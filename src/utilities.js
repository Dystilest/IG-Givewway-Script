// InstantGaming Giveaway Automator - Utility Module
// Reusable helper functions and configuration management for prize draw automation

/**
 * Retrieves configuration settings with defaults
 */
function initializeSettings() {
  return {
    actionInterval: GM_getValue('actionInterval', 2000),
    enableAutoJoin: GM_getValue('enableAutoJoin', true),
    enableSocialTasks: GM_getValue('enableSocialTasks', true),
    displayAlerts: GM_getValue('displayAlerts', true),
    maxAttempts: 3,
    attemptInterval: 2500,
    enableTimingVariation: GM_getValue('enableTimingVariation', true),
    minTimingVariation: 500,
    maxTimingVariation: 2000,
    enableNaturalActions: GM_getValue('enableNaturalActions', true)
  };
}

/**
 * Helper: Apply timing variation for natural behavior simulation
 */
function calculateVariedTiming(baseTiming, settings) {
  if (!settings.enableTimingVariation) {
    return baseTiming;
  }
  const variationRange = settings.maxTimingVariation - settings.minTimingVariation;
  const randomVariation = Math.random() * variationRange + settings.minTimingVariation;
  return Math.floor(baseTiming + randomVariation);
}

/**
 * Helper: Emulate organic scrolling activity
 */
function emulateNaturalActivity(settings) {
  if (!settings.enableNaturalActions) return;
  const scrollDelta = Math.random() * 100 - 50;
  window.scrollBy(0, scrollDelta);
}

/**
 * Structured console output with color coding
 */
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

/**
 * Display notification to user
 */
function displayNotification(header, content, level = 'info', settings) {
  if (settings.displayAlerts && typeof GM_notification !== 'undefined') {
    GM_notification({
      title: header,
      text: content,
      timeout: 3000
    });
  }
  writeLog(`${header}: ${content}`, level);
}

/**
 * Asynchronously wait for DOM element using MutationObserver
 */
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

/**
 * Generate authentic mouse interaction event
 */
function generateMouseClick() {
  return new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    buttons: 1
  });
}

/**
 * Safe new tab opener with exception handling
 */
function launchNewTab(targetUrl) {
  try {
    window.open(targetUrl, '_blank');
    writeLog(`Launched new tab: ${targetUrl}`, 'info');
  } catch (exception) {
    writeLog(`Failed to launch tab: ${exception.message}`, 'error');
  }
}
