# Configuration Examples

This document provides configuration examples for different usage scenarios.

**Note:** Version 1.1.0 enforces input validation. Action intervals must be between 1000-60000ms.

## Conservative Settings (Maximum Stealth)

```javascript
actionInterval: 5000           // 5 second base interval
enableTimingVariation: true    // Keep enabled (uses normal distribution)
enableNaturalActions: true     // Keep enabled (4 variable patterns)
```

**Best for:** Users who want maximum safety and don't mind slower operation.

**Impact:** 
- Timing uses Gaussian distribution (±30% std dev)
- Variable scroll patterns reduce predictability
- Realistic click coordinates within element bounds

---

## Balanced Settings (Default - Recommended)

```javascript
actionInterval: 2000           // 2 second base interval
enableTimingVariation: true    // Enabled (normal distribution)
enableNaturalActions: true     // Enabled (variable patterns)
```

**Best for:** Most users - good balance of speed and safety.

**Features:**
- Normal distribution timing (Box-Muller transform)
- Variable scroll patterns (30/40/20/10 distribution)
- Realistic click events with proper coordinates
- Memory leak prevention with cleanup handlers

---

## Fast Settings (Lower Stealth)

```javascript
actionInterval: 1000           // 1 second base interval (enforced minimum)
enableTimingVariation: true    // Still strongly recommended
enableNaturalActions: true     // Still recommended
```

**Best for:** Users who want faster operation and are willing to accept slightly higher risk.

⚠️ **Warning:** 
- 1000ms is the enforced minimum (cannot go lower)
- Not recommended for heavy usage (50+ entries/day)
- Still uses advanced anti-detection but faster pace may be more noticeable

---

## Custom Configuration

You can adjust settings through the userscript menu:

1. Click on Tampermonkey/Violentmonkey icon
2. Select the script
3. Use "⏱️ Modify Action Interval" to change base timing
4. Toggle features as needed

All settings persist automatically across browser sessions.

**New in v1.1.0:**
- Input validation: Intervals must be 1000-60000ms
- Error messages guide you to valid ranges
- Cannot accidentally set invalid values
- Bulk operations limited to 25 tabs for safety
