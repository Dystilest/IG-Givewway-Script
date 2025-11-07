// ==UserScript==
// @name         InstantGaming Giveaway Automator
// @description  Advanced automation tool for InstantGaming prize draws featuring intelligent detection evasion and natural interaction patterns.
// @version      1.1.2
// @author       Dystilest
// @namespace    https://github.com/Dystilest
// @match        *://www.instant-gaming.com/*/giveaway/*
// @match        *://www.instant-gaming.com/giveaways*
// @match        *://github.com/Dystilest/*
// @run-at       document-idle
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/Dystilest/IG-Givewway-Script/refs/heads/main/ig-giveaway-bot.user.js
// @updateURL https://raw.githubusercontent.com/Dystilest/IG-Givewway-Script/refs/heads/main/ig-giveaway-bot.user.js
// ==/UserScript==

(function() {
  "use strict";

    // Timeout tracking for cleanup
    const activeTimeouts = [];
    const activeMutationObservers = [];

    // Cleanup function to prevent memory leaks
    function cleanup() {
      activeTimeouts.forEach(id => clearTimeout(id));
      activeTimeouts.length = 0;
      activeMutationObservers.forEach(observer => observer.disconnect());
      activeMutationObservers.length = 0;
      writeLog('Cleanup completed - cleared all timers and observers', 'info');
    }

    // Register cleanup on page unload
    window.addEventListener('beforeunload', cleanup);

    // Helper to track setTimeout calls
    function trackedSetTimeout(callback, delay) {
      const timeoutId = setTimeout(() => {
        const index = activeTimeouts.indexOf(timeoutId);
        if (index > -1) activeTimeouts.splice(index, 1);
        callback();
      }, delay);
      activeTimeouts.push(timeoutId);
      return timeoutId;
    }

    // Settings Configuration Object
    const SETTINGS = {
      actionInterval: GM_getValue('actionInterval', 2000),
      enableAutoJoin: GM_getValue('enableAutoJoin', true),
      enableSocialTasks: GM_getValue('enableSocialTasks', true),
      displayAlerts: GM_getValue('displayAlerts', true),
      maxAttempts: 3,
      attemptInterval: 2500,
      enableTimingVariation: GM_getValue('enableTimingVariation', true),
      minTimingVariation: 500,   // Minimum variance in milliseconds
      maxTimingVariation: 2000,  // Maximum variance in milliseconds
      enableNaturalActions: GM_getValue('enableNaturalActions', true)
    };

    // Calculate varied timing to simulate organic user behavior
    // Uses Box-Muller transform for normal (Gaussian) distribution - more human-like
    function calculateVariedTiming(baseTiming) {
      if (!SETTINGS.enableTimingVariation) {
        return baseTiming;
      }
      
      // Box-Muller transform for normal distribution
      const u1 = Math.random();
      const u2 = Math.random();
      const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      
      // Standard deviation is 30% of the mean for realistic variance
      const stdDev = baseTiming * 0.3;
      const normalValue = baseTiming + z0 * stdDev;
      
      // Clamp to reasonable range (don't go below 500ms or above 3x base)
      const clampedValue = Math.max(500, Math.min(normalValue, baseTiming * 3));
      
      return Math.floor(clampedValue);
    }

    // Emulate organic user scrolling behavior with varied patterns
    function emulateNaturalActivity() {
      if (!SETTINGS.enableNaturalActions) return;
      
      // Random activity patterns - sometimes scroll, sometimes don't
      const activityType = Math.random();
      
      if (activityType < 0.3) {
        // 30% chance: Don't scroll (user just looking)
        return;
      } else if (activityType < 0.7) {
        // 40% chance: Small scroll (reading nearby content)
        const smallScroll = (Math.random() - 0.5) * 80;
        window.scrollBy(0, smallScroll);
      } else if (activityType < 0.9) {
        // 20% chance: Medium scroll
        const mediumScroll = (Math.random() - 0.5) * 200;
        window.scrollBy(0, mediumScroll);
      } else {
        // 10% chance: Large scroll (looking around page)
        const largeScroll = (Math.random() - 0.5) * 400;
        window.scrollBy(0, largeScroll);
      }
    }

    // Generate realistic click event with proper coordinates
    function generateRealisticClick(element) {
      const rect = element.getBoundingClientRect();
      // Click somewhere in the 30-70% range of element (avoiding edges)
      const x = rect.left + rect.width * (0.3 + Math.random() * 0.4);
      const y = rect.top + rect.height * (0.3 + Math.random() * 0.4);
      
      return new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
        clientX: x,
        clientY: y,
        screenX: window.screenX + x,
        screenY: window.screenY + y
      });
    }

    // Console logging with styled output
    function writeLog(content, level = 'info') {
      const logPrefix = '[IG Giveaway Bot]';
      const colorScheme = {
        info: 'color: #3498db',
        success: 'color: #2ecc71',
        error: 'color: #e74c3c',
        warning: 'color: #f39c12'
      };
      console.log(`%c${logPrefix} ${content}`, colorScheme[level] || colorScheme.info);
    }

    function displayNotification(header, content, level = 'info') {
      if (SETTINGS.displayAlerts && typeof GM_notification !== 'undefined') {
        GM_notification({
          title: header,
          text: content,
          timeout: 3000
        });
      }
      writeLog(`${header}: ${content}`, level);
    }

    function awaitElement(cssSelector, maxWaitTime = 5000) {
      return new Promise((resolve, reject) => {
        const targetElement = document.querySelector(cssSelector);
        if (targetElement) {
          resolve(targetElement);
          return;
        }

        const domWatcher = new MutationObserver(() => {
          const targetElement = document.querySelector(cssSelector);
          if (targetElement) {
            domWatcher.disconnect();
            const index = activeMutationObservers.indexOf(domWatcher);
            if (index > -1) activeMutationObservers.splice(index, 1);
            resolve(targetElement);
          }
        });

        activeMutationObservers.push(domWatcher);

        domWatcher.observe(document.body, {
          childList: true,
          subtree: true
        });

        const timeoutId = setTimeout(() => {
          domWatcher.disconnect();
          const index = activeMutationObservers.indexOf(domWatcher);
          if (index > -1) activeMutationObservers.splice(index, 1);
          reject(new Error(`Element not found within timeout: ${cssSelector}`));
        }, maxWaitTime);
        
        activeTimeouts.push(timeoutId);
      });
    }

    // Referral link injection mechanism - Only on giveaway pages, once per session
    if (!document.location.href.includes('igr=') && 
        document.location.href.includes('giveaway') &&
        !sessionStorage.getItem('referralApplied')) {
      sessionStorage.setItem('referralApplied', 'true');
      const urlDelimiter = document.location.href.includes('?') ? '&' : '?';
      writeLog('Appending referral parameter to giveaway page...', 'info');
      document.location.href = document.location.href + urlDelimiter + 'igr=ramsesii';
    }

  function launchNewTab(targetUrl) {
    try {
      window.open(targetUrl, '_blank');
      writeLog(`Launched new tab: ${targetUrl}`, 'info');
    } catch (exception) {
      writeLog(`Failed to launch tab: ${exception.message}`, 'error');
    }
  }

  async function executeJoinAction(attemptNumber = 0) {
    try {
      writeLog('Searching for entry button...', 'info');
      
      // Perform natural activity simulation prior to interaction
      emulateNaturalActivity();
      
      // Try multiple selectors for robustness - ordered from most specific to most general
      const selectors = [
        "button.validate",                    // FIXED: removed .button prefix
        "button.button.validate",
        "button[class*='validate']",
        "button[type='submit'].button",
        "button[type='submit']",
        ".giveaway-participate button",
        ".participate-button",
        "button[class*='participate']",
        "form button[type='submit']",
        "button.btn-primary",
        "button.primary"
      ];
      
      let entryButton = null;
      let successSelector = null;
      
      // First pass: try each selector with shorter timeout
      for (const selector of selectors) {
        try {
          entryButton = await awaitElement(selector, 1500);
          if (entryButton) {
            successSelector = selector;
            writeLog(`Found entry button using selector: ${selector}`, 'success');
            break;
          }
        } catch (e) {
          // Try next selector
          continue;
        }
      }
      
      // Second pass: if nothing found, try a longer wait on the primary selector
      if (!entryButton) {
        writeLog('First pass failed, trying longer wait on primary selector...', 'warning');
        try {
          entryButton = await awaitElement(selectors[0], 5000);
          if (entryButton) {
            successSelector = selectors[0];
            writeLog(`Found entry button on second attempt`, 'success');
          }
        } catch (e) {
          // Will handle below
        }
      }
      
      // Debug: Log all buttons on the page if still not found
      if (!entryButton) {
        const allButtons = document.querySelectorAll('button');
        writeLog(`DEBUG: Found ${allButtons.length} button(s) on page`, 'warning');
        allButtons.forEach((btn, idx) => {
          writeLog(`Button ${idx + 1}: classes="${btn.className}", type="${btn.type}", text="${btn.textContent.trim().substring(0, 30)}"`, 'info');
        });
      }
      
      if (entryButton) {
        // Verify if user has already entered
        if (entryButton.disabled || entryButton.classList.contains('disabled')) {
          displayNotification('Previously Entered', 'This giveaway has already been entered by you', 'warning');
          return;
        }
        
        // Brief randomized pause before triggering click
        await new Promise(resolve => setTimeout(resolve, calculateVariedTiming(300)));
        
        // Generate authentic mouse click event with realistic coordinates
        const mouseClick = generateRealisticClick(entryButton);
        entryButton.dispatchEvent(mouseClick);
        
        displayNotification('Entry Successful!', 'Giveaway entry has been completed', 'success');
        
        // Queue social media tasks with timing variation
        const socialTaskDelay = calculateVariedTiming(SETTINGS.actionInterval);
        writeLog(`Preparing social tasks in ${socialTaskDelay}ms...`, 'info');
        
        trackedSetTimeout(() => {
          if (SETTINGS.enableSocialTasks) {
            processSocialRewards();
          }
        }, socialTaskDelay);
      }
    } catch (exception) {
      writeLog(`Entry attempt #${attemptNumber + 1} encountered error: ${exception.message}`, 'warning');
      
      if (attemptNumber < SETTINGS.maxAttempts) {
        const nextAttemptDelay = calculateVariedTiming(SETTINGS.attemptInterval);
        writeLog(`Retrying operation in ${nextAttemptDelay}ms...`, 'info');
        trackedSetTimeout(() => executeJoinAction(attemptNumber + 1), nextAttemptDelay);
      } else {
        displayNotification('Operation Failed', 'Unable to locate entry button. Verify you are on a giveaway page.', 'error');
      }
    }
  }

  async function processSocialRewards() {
    try {
      writeLog('Detecting social reward elements...', 'info');
      
      // Initial delay with timing randomization
      await new Promise(resolve => setTimeout(resolve, calculateVariedTiming(500)));
      
      // Collect all social reward links
      const rewardLinks = document.querySelectorAll("a.button.reward");
      
      if (rewardLinks.length === 0) {
        writeLog('No social reward elements detected', 'info');
        return;
      }
      
      let processedCount = 0;
      rewardLinks.forEach((linkElement, position) => {
        // Distribute clicks across time with variation
        const baseInterval = position * 400;
        const variedInterval = calculateVariedTiming(baseInterval);
        
        setTimeout(() => {
          if (!linkElement.classList.contains('disabled')) {
            // Dispatch authentic click event with realistic coordinates
            const mouseClick = generateRealisticClick(linkElement);
            linkElement.dispatchEvent(mouseClick);
            processedCount++;
            writeLog(`Processed social reward ${position + 1}/${rewardLinks.length}`, 'success');
          }
        }, variedInterval);
      });
      
      // Wait for all operations to complete
      const completionDelay = calculateVariedTiming(rewardLinks.length * 400) + 100;
      trackedSetTimeout(() => {
        if (processedCount > 0) {
          displayNotification('Social Rewards', `Processed ${processedCount} social reward element(s)`, 'success');
        }
      }, completionDelay);
      
    } catch (exception) {
      writeLog(`Social reward processing error: ${exception.message}`, 'error');
    }
  }

  function activateGiveawayLinks() {
    try {
      const giveawayElements = document.querySelectorAll("a.giveaway");
      
      if (giveawayElements.length === 0) {
        displayNotification('Notice', 'No giveaway elements found on current page', 'warning');
        return;
      }
      
      giveawayElements.forEach((linkElement) => linkElement.click());
      displayNotification('Giveaway Links', `Activated ${giveawayElements.length} giveaway link(s)`, 'success');
    } catch (exception) {
      writeLog(`Giveaway link activation error: ${exception.message}`, 'error');
    }
  }

  function bulkOpenLinks() {
    try {
      const MAX_TABS = 25; // Safety limit to prevent browser overload
      const linkCollection = document.querySelectorAll('#user-content-giveaways>a');
      
      if (linkCollection.length === 0) {
        displayNotification('Notice', 'No giveaway links detected. Confirm you are viewing the GitHub giveaway collection.', 'warning');
        return;
      }
      
      // Limit number of tabs for safety
      const linksToOpen = Array.from(linkCollection).slice(0, MAX_TABS);
      const skippedCount = linkCollection.length - linksToOpen.length;
      
      if (skippedCount > 0) {
        displayNotification('Rate Limit', `Opening ${MAX_TABS} tabs (${skippedCount} skipped for safety)`, 'warning');
      }
      
      linksToOpen.forEach((linkElement, position) => {
        // Stagger tab opening to prevent browser restrictions
        setTimeout(() => {
          launchNewTab(linkElement.href);
        }, position * 100);
      });
      
      displayNotification('Bulk Operation', `Launching ${linksToOpen.length} giveaway(s) in separate tabs`, 'success');
    } catch (exception) {
      writeLog(`Bulk link opening error: ${exception.message}`, 'error');
    }
  }

  // Settings management functions
  function switchAutoJoinMode() {
    SETTINGS.enableAutoJoin = !SETTINGS.enableAutoJoin;
    GM_setValue('enableAutoJoin', SETTINGS.enableAutoJoin);
    displayNotification('Configuration', `Auto-join mode ${SETTINGS.enableAutoJoin ? 'activated' : 'deactivated'}`, 'info');
  }

  function switchSocialTasksMode() {
    SETTINGS.enableSocialTasks = !SETTINGS.enableSocialTasks;
    GM_setValue('enableSocialTasks', SETTINGS.enableSocialTasks);
    displayNotification('Configuration', `Social tasks ${SETTINGS.enableSocialTasks ? 'activated' : 'deactivated'}`, 'info');
  }

  function switchAlertDisplay() {
    SETTINGS.displayAlerts = !SETTINGS.displayAlerts;
    GM_setValue('displayAlerts', SETTINGS.displayAlerts);
    displayNotification('Configuration', `Alert display ${SETTINGS.displayAlerts ? 'activated' : 'deactivated'}`, 'info');
  }

  function switchTimingVariation() {
    SETTINGS.enableTimingVariation = !SETTINGS.enableTimingVariation;
    GM_setValue('enableTimingVariation', SETTINGS.enableTimingVariation);
    displayNotification('Configuration', `Timing variation ${SETTINGS.enableTimingVariation ? 'activated' : 'deactivated'}`, 'info');
  }

  function switchNaturalActions() {
    SETTINGS.enableNaturalActions = !SETTINGS.enableNaturalActions;
    GM_setValue('enableNaturalActions', SETTINGS.enableNaturalActions);
    displayNotification('Configuration', `Natural actions ${SETTINGS.enableNaturalActions ? 'activated' : 'deactivated'}`, 'info');
  }

  function modifyActionInterval() {
    const MIN_INTERVAL = 1000; // Minimum 1 second for safety
    const MAX_INTERVAL = 60000; // Maximum 60 seconds (reasonable upper limit)
    
    const userInput = prompt(`Specify action interval (${MIN_INTERVAL}-${MAX_INTERVAL}ms):`, SETTINGS.actionInterval);
    
    if (userInput === null) {
      // User cancelled
      return;
    }
    
    const parsedValue = parseInt(userInput);
    
    if (isNaN(parsedValue)) {
      displayNotification('Invalid Input', 'Please enter a valid number', 'error');
      return;
    }
    
    if (parsedValue < MIN_INTERVAL || parsedValue > MAX_INTERVAL) {
      displayNotification('Out of Range', `Interval must be between ${MIN_INTERVAL}-${MAX_INTERVAL}ms`, 'error');
      return;
    }
    
    SETTINGS.actionInterval = parsedValue;
    GM_setValue('actionInterval', SETTINGS.actionInterval);
    displayNotification('Configuration', `Action interval set to ${SETTINGS.actionInterval}ms`, 'success');
  }

  // Command registration in userscript menu
  GM_registerMenuCommand("🎯 Manual Entry", executeJoinAction);
  GM_registerMenuCommand("📱 Process Social Rewards", processSocialRewards);
  GM_registerMenuCommand("📋 Activate Giveaway Links", activateGiveawayLinks);
  GM_registerMenuCommand("🔗 Bulk Open Links", bulkOpenLinks);
  GM_registerMenuCommand("⚙️ Switch Auto-Join Mode", switchAutoJoinMode);
  GM_registerMenuCommand("⚙️ Switch Social Tasks Mode", switchSocialTasksMode);
  GM_registerMenuCommand("🔔 Switch Alert Display", switchAlertDisplay);
  GM_registerMenuCommand("🎲 Switch Timing Variation", switchTimingVariation);
  GM_registerMenuCommand("🤖 Switch Natural Actions", switchNaturalActions);
  GM_registerMenuCommand("⏱️ Modify Action Interval", modifyActionInterval);

  // Automatic execution when page loads
  if (SETTINGS.enableAutoJoin && document.location.href.includes('giveaway')) {
    writeLog('Auto-join mode active, initiating process...', 'info');
    // Allow page to fully render with organic timing variation
    const startupDelay = calculateVariedTiming(1500);
    writeLog(`Commencing operation in ${startupDelay}ms (natural delay applied)...`, 'info');
    setTimeout(() => executeJoinAction(), startupDelay);
  }

})();
