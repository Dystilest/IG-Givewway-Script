# Configuration Examples

This document provides configuration examples for different usage scenarios.

## Conservative Settings (Maximum Stealth)

```javascript
actionInterval: 5000           // 5 second base interval
enableTimingVariation: true    // Keep enabled
minTimingVariation: 1000       // 1-3 second variance
maxTimingVariation: 3000
enableNaturalActions: true     // Keep enabled
```

**Best for:** Users who want maximum safety and don't mind slower operation.

---

## Balanced Settings (Default)

```javascript
actionInterval: 2000           // 2 second base interval
enableTimingVariation: true    // Enabled
minTimingVariation: 500        // 0.5-2 second variance
maxTimingVariation: 2000
enableNaturalActions: true     // Enabled
```

**Best for:** Most users - good balance of speed and safety.

---

## Fast Settings (Lower Stealth)

```javascript
actionInterval: 1000           // 1 second base interval
enableTimingVariation: true    // Still recommended
minTimingVariation: 200        // 0.2-1 second variance
maxTimingVariation: 1000
enableNaturalActions: true     // Still recommended
```

**Best for:** Users who want faster operation and are willing to accept slightly higher risk.

⚠️ **Warning:** Not recommended for heavy usage (50+ entries/day).

---

## Custom Configuration

You can adjust settings through the userscript menu:

1. Click on Tampermonkey/Violentmonkey icon
2. Select the script
3. Use "⏱️ Modify Action Interval" to change base timing
4. Toggle features as needed

All settings persist automatically across browser sessions.
