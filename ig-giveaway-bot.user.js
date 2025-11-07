// ==UserScript==
// @name         InstantGaming Social Rewards Automator
// @description  Simple automation tool for InstantGaming social reward buttons on giveaway pages.
// @version      1.2.0
// @author       Dystilest
// @namespace    https://github.com/Dystilest
// @match        *://www.instant-gaming.com/*/giveaway/*
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

  // Settings Configuration Object
  const SETTINGS = {
    enableSocialTasks: GM_getValue('enableSocialTasks', true),
    displayAlerts: GM_getValue('displayAlerts', true)
  };

  // Console logging with styled output
  function writeLog(content, level = 'info') {
    const logPrefix = '[IG Social Rewards]';
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

  // Referral link injection mechanism - Only on giveaway pages, once per session
  if (!document.location.href.includes('igr=') && 
      document.location.href.includes('giveaway') &&
      !sessionStorage.getItem('referralApplied')) {
    sessionStorage.setItem('referralApplied', 'true');
    const urlDelimiter = document.location.href.includes('?') ? '&' : '?';
    writeLog('Appending referral parameter to giveaway page...', 'info');
    document.location.href = document.location.href + urlDelimiter + 'igr=ramsesii';
  }

  async function processSocialRewards() {
    try {
      writeLog('Detecting social reward elements...', 'info');
      
      // Collect all social reward links
      const rewardLinks = document.querySelectorAll("a.button.reward");
      
      if (rewardLinks.length === 0) {
        writeLog('No social reward elements detected', 'info');
        displayNotification('No Rewards', 'No social reward buttons found on this page', 'warning');
        return;
      }
      
      let processedCount = 0;
      rewardLinks.forEach((linkElement, position) => {
        // Distribute clicks across time (400ms between each)
        setTimeout(() => {
          if (!linkElement.classList.contains('disabled')) {
            linkElement.click();
            processedCount++;
            writeLog(`Processed social reward ${position + 1}/${rewardLinks.length}`, 'success');
          }
        }, position * 400);
      });
      
      // Wait for all operations to complete
      setTimeout(() => {
        if (processedCount > 0) {
          displayNotification('Social Rewards', `Processed ${processedCount} social reward button(s)`, 'success');
        }
      }, rewardLinks.length * 400 + 100);
      
    } catch (exception) {
      writeLog(`Social reward processing error: ${exception.message}`, 'error');
      displayNotification('Error', 'Failed to process social rewards', 'error');
    }
  }

  // Settings management functions
  function switchSocialTasksMode() {
    SETTINGS.enableSocialTasks = !SETTINGS.enableSocialTasks;
    GM_setValue('enableSocialTasks', SETTINGS.enableSocialTasks);
    displayNotification('Configuration', `Social tasks ${SETTINGS.enableSocialTasks ? 'enabled' : 'disabled'}`, 'info');
  }

  function switchAlertDisplay() {
    SETTINGS.displayAlerts = !SETTINGS.displayAlerts;
    GM_setValue('displayAlerts', SETTINGS.displayAlerts);
    displayNotification('Configuration', `Notifications ${SETTINGS.displayAlerts ? 'enabled' : 'disabled'}`, 'info');
  }

  // Command registration in userscript menu
  GM_registerMenuCommand("📱 Process Social Rewards", processSocialRewards);
  GM_registerMenuCommand("⚙️ Toggle Social Tasks", switchSocialTasksMode);
  GM_registerMenuCommand("🔔 Toggle Notifications", switchAlertDisplay);

})();
