// ==UserScript==
// @name         InstantGaming Giveaway Automator (Direct)
// @description  Advanced automation tool for InstantGaming prize draws without referral tracking.
// @version      1.0.0
// @author       Dystilest
// @namespace    https://github.com/Dystilest
// @match        *://www.instant-gaming.com/*
// @match        *://github.com/Dystilest/*
// @run-at       document-idle
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @license      MIT
// @downloadURL https://github.com/Dystilest/IG-Givewway-Script/raw/main/ig-giveaway-bot-direct.user.js
// @updateURL https://github.com/Dystilest/IG-Givewway-Script/raw/main/ig-giveaway-bot-direct.user.js
// ==/UserScript==

(function() {
  "use strict";

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
    function calculateVariedTiming(baseTiming) {
      if (!SETTINGS.enableTimingVariation) {
        return baseTiming;
      }
      const variationRange = SETTINGS.maxTimingVariation - SETTINGS.minTimingVariation;
      const randomVariation = Math.random() * variationRange + SETTINGS.minTimingVariation;
      return Math.floor(baseTiming + randomVariation);
    }

    // Emulate organic user scrolling behavior
    function emulateNaturalActivity() {
      if (!SETTINGS.enableNaturalActions) return;
      
      // Generate subtle random scroll movement
      const scrollDelta = Math.random() * 100 - 50;
      window.scrollBy(0, scrollDelta);
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
            resolve(targetElement);
          }
        });

        domWatcher.observe(document.body, {
          childList: true,
          subtree: true
        });

        setTimeout(() => {
          domWatcher.disconnect();
          reject(new Error(`Element not found within timeout: ${cssSelector}`));
        }, maxWaitTime);
      });
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
      
      // Locate the giveaway entry button
      const entryButton = await awaitElement("button.button.validate", 5000);
      
      if (entryButton) {
        // Verify if user has already entered
        if (entryButton.disabled || entryButton.classList.contains('disabled')) {
          displayNotification('Previously Entered', 'This giveaway has already been entered by you', 'warning');
          return;
        }
        
        // Brief randomized pause before triggering click
        await new Promise(resolve => setTimeout(resolve, calculateVariedTiming(300)));
        
        // Generate authentic mouse click event
        const mouseClick = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1
        });
        entryButton.dispatchEvent(mouseClick);
        
        displayNotification('Entry Successful!', 'Giveaway entry has been completed', 'success');
        
        // Queue social media tasks with timing variation
        const socialTaskDelay = calculateVariedTiming(SETTINGS.actionInterval);
        writeLog(`Preparing social tasks in ${socialTaskDelay}ms...`, 'info');
        
        setTimeout(() => {
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
        setTimeout(() => executeJoinAction(attemptNumber + 1), nextAttemptDelay);
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
            // Dispatch authentic click event
            const mouseClick = new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true,
              buttons: 1
            });
            linkElement.dispatchEvent(mouseClick);
            processedCount++;
            writeLog(`Processed social reward ${position + 1}/${rewardLinks.length}`, 'success');
          }
        }, variedInterval);
      });
      
      // Wait for all operations to complete
      const completionDelay = calculateVariedTiming(rewardLinks.length * 400) + 100;
      setTimeout(() => {
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
      const linkCollection = document.querySelectorAll('#user-content-giveaways>a');
      
      if (linkCollection.length === 0) {
        displayNotification('Notice', 'No giveaway links detected. Confirm you are viewing the GitHub giveaway collection.', 'warning');
        return;
      }
      
      linkCollection.forEach((linkElement, position) => {
        // Stagger tab opening to prevent browser restrictions
        setTimeout(() => {
          launchNewTab(linkElement.href);
        }, position * 100);
      });
      
      displayNotification('Bulk Operation', `Launching ${linkCollection.length} giveaway(s) in separate tabs`, 'success');
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
    const userInput = prompt('Specify action interval (in milliseconds):', SETTINGS.actionInterval);
    if (userInput && !isNaN(userInput)) {
      SETTINGS.actionInterval = parseInt(userInput);
      GM_setValue('actionInterval', SETTINGS.actionInterval);
      displayNotification('Configuration', `Action interval configured to ${SETTINGS.actionInterval}ms`, 'success');
    }
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
