## 🎯 Curated Giveaway Links (links.md)

Below is the current curated set of InstantGaming giveaway URLs (first 25 opened when using Bulk Open):
<!-- START: Curated Links Extract -->
<!-- (List truncated to first 25 for readability; bulk opener fetches full file) -->
1. https://www.instant-gaming.com/fr/giveaway/BOBLENNON?igr=jaha
2. https://www.instant-gaming.com/fr/giveaway/INSTANTGAMING?igr=jaha
3. https://www.instant-gaming.com/fr/giveaway/SUPREMELEADER?igr=jaha
4. https://www.instant-gaming.com/fr/giveaway/ICONOBLAST?igr=jaha
5. https://www.instant-gaming.com/fr/giveaway/bugland?igr=jaha
6. https://www.instant-gaming.com/fr/giveaway/GAMEMOVIELAND?igr=jaha
7. https://www.instant-gaming.com/fr/giveaway/CODQG?igr=jaha
8. https://www.instant-gaming.com/fr/giveaway/NALFEINN?igr=jaha
9. https://www.instant-gaming.com/fr/giveaway/VARG?igr=jaha
10. https://www.instant-gaming.com/fr/giveaway/skyyart?igr=jaha
11. https://www.instant-gaming.com/fr/giveaway/ALKOR?igr=jaha
12. https://www.instant-gaming.com/fr/giveaway/ROBERT?igr=jaha
13. https://www.instant-gaming.com/fr/giveaway/GAMEWAVE?igr=jaha
14. https://www.instant-gaming.com/fr/giveaway/RATSUPER?igr=jaha
15. https://www.instant-gaming.com/fr/giveaway/YANKA?igr=jaha
16. https://www.instant-gaming.com/fr/giveaway/STREAMRUNNERS?igr=jaha
17. https://www.instant-gaming.com/fr/giveaway/MeetTheMyth?igr=jaha
18. https://www.instant-gaming.com/fr/giveaway/PHENRIR?igr=jaha
19. https://www.instant-gaming.com/fr/giveaway/GMODFR?igr=jaha
20. https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGES?igr=jaha
21. https://www.instant-gaming.com/fr/giveaway/ACRE?igr=jaha
22. https://www.instant-gaming.com/fr/giveaway/BILLYCHEROKEE?igr=jaha
23. https://www.instant-gaming.com/fr/giveaway/LYNX?igr=jaha
24. https://www.instant-gaming.com/fr/giveaway/ZONALEROS?igr=jaha
25. https://www.instant-gaming.com/fr/giveaway/GUIGUI?igr=jaha
<!-- END: Curated Links Extract -->
# InstantGaming Giveaway Automator

> **Intelligent automation for InstantGaming prize draws with sophisticated detection evasion**

[![Version](https://img.shields.io/badge/version-1.1.4-blue.svg)](https://github.com/Dystilest/IG-Givewway-Script)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Userscript](https://img.shields.io/badge/userscript-Tampermonkey%20%7C%20Violentmonkey-orange.svg)](https://www.tampermonkey.net/)

An advanced userscript designed for InstantGaming prize draw automation, featuring organic behavior simulation, variable timing patterns, intelligent retry mechanisms, and enhanced anti-detection capabilities.

**Latest Update (v1.1.4):** Bulk opener now fetches curated giveaway URLs directly from `links.md`; Manual Entry & Activate Links commands removed; Bulk Open prioritized and still rate-limited/staggered.

---

## ⚠️ Browser Compatibility

**OperaGX is not supported.** Please use Firefox, Chrome, Edge, or other Chromium-based browsers for optimal performance.

### Recommended Browsers

| Browser | Compatibility | Notes |
|---------|--------------|-------|
| **Firefox** | ✅ Excellent | Native userscript support, best privacy |
| **Chrome** | ✅ Excellent | Standard Chromium, reliable extensions |
| **Edge** | ✅ Excellent | Chromium-based, Microsoft support |
| **Brave** | ✅ Good | Chromium-based, privacy-focused |
| **Vivaldi** | ✅ Good | Chromium-based, power user features |
| **Opera** | ⚠️ Mixed | Sometimes works but can be unstable |
| **OperaGX** | ❌ Not Compatible | Custom framework breaks userscript managers |

**Why OperaGX doesn't work:**
- Modified Chromium framework interferes with Tampermonkey/Violentmonkey
- GM_* APIs (`GM_getValue`, `GM_notification`) don't function properly
- Aggressive RAM limiting can terminate scripts mid-execution
- Custom extension system incompatible with standard userscripts

---

## ✨ Core Features

### 🤖 Intelligent Automation
- **Automated Entry System** - Automatically submits entries on giveaway pages
- **Social Media Integration** - Processes social reward requirements (follow/like actions)
- **Batch Processing** - Efficiently handles multiple giveaways simultaneously
- **Smart Retry Logic** - Automatically retries up to 3 times with intelligent backoff

### 🛡️ Detection Evasion
- **Variable Timing** - Normal distribution delays (realistic human-like patterns)
- **Authentic Events** - Uses genuine browser events with realistic coordinates
- **Organic Behavior** - Variable scrolling patterns and natural interaction simulation
- **Distributed Actions** - Staggers multiple interactions to prevent pattern detection
- **Fallback Mechanisms** - Multiple selector strategies for reliability

### ⚙️ Customization Options
- **Flexible Settings** - Customize intervals, toggle features, adjust behavior
- **Persistent Storage** - All preferences saved across browser sessions
- **Manual Controls** - Complete manual override available via context menu
- **Visual Feedback** - Optional desktop notifications for all operations

### 📊 Operation Monitoring
- **Styled Console Output** - Color-coded logging for easy debugging
- **Real-time Status** - Live feedback for every operation
- **Error Tracking** - Comprehensive error messages with recovery suggestions

---

## 🚀 Installation Guide

### Step 1: Install Userscript Manager

Select the appropriate extension for your browser:

| Browser | Extension | Installation Link |
|---------|-----------|-------------------|
| Firefox | Violentmonkey | [Get Extension](https://violentmonkey.github.io/) |
| Chrome | Tampermonkey | [Get Extension](https://tampermonkey.net/) |
| Edge | Tampermonkey | [Get Extension](https://tampermonkey.net/) |
| Brave | Tampermonkey | [Get Extension](https://tampermonkey.net/) |

### Step 2: Install Userscript

Click the link below to install the script:

[📥 **Install ig-giveaway-bot.user.js**](https://github.com/Dystilest/IG-Givewway-Script/raw/main/ig-giveaway-bot.user.js)

**Note:** This version includes referral support (`igr=ramsesii`) which helps support the developer. The referral parameter is only added once per session and only on giveaway pages, never on catalog or checkout pages.

### Step 3: Usage

1. Visit any InstantGaming giveaway page
2. Script automatically activates and processes entry
3. Monitor console (F12) or notifications for operation status

---

## 📖 User Guide

### Automatic Operation (Default)

The script executes automatically on giveaway pages only:

1. **Detection Phase** - Locates entry button with smart waiting and fallback selectors
2. **Entry Submission** - Submits entry with realistic timing and click coordinates
3. **Social Processing** - Automatically handles social reward buttons
4. **Status Reporting** - Logs all actions and displays notifications

**Security:** The script only runs on giveaway-specific URLs for your safety.

### Manual Operation

Access controls via Tampermonkey/Violentmonkey menu (extension icon):

| Command | Function |
|---------|----------|
| 🔗 **Bulk Open Links** | Fetch & open curated giveaway URLs from `links.md` (up to 25, staggered) |
| 📱 **Process Social Rewards** | Process social reward buttons on current giveaway page |
| ⚙️ **Switch Social Tasks Mode** | Toggle automatic social processing |
| 🔔 **Switch Alert Display** | Toggle desktop notifications |
| 🎲 **Switch Timing Variation** | Toggle random timing patterns |
| 🤖 **Switch Natural Actions** | Toggle organic behavior simulation |
| ⏱️ **Modify Action Interval** | Configure custom interval between actions |

---

## 🔧 Configuration

### Default Parameters

```javascript
Action Interval:      2000ms (customizable, 1000-60000ms range)
Social Tasks:         Enabled
Notifications:        Enabled
Timing Variation:     Enabled (Normal distribution, ±30% std dev)
Natural Actions:      Enabled (Variable scroll patterns)
Max Attempts:         3 retries
Attempt Interval:     2500ms
Rate Limiting:        25 tabs max for bulk operations
Fallback Selectors:   4 button selector alternatives
```

### Optimization

All settings persist automatically and can be modified via menu commands.

**For enhanced stealth:**
- Increase action interval to 3000-5000ms
- Maintain timing variation enabled
- Keep natural actions enabled
- Use selectively (avoid entering every available giveaway)

---

## 🛡️ Stealth Mechanisms

### Implementation Details

The script incorporates multiple advanced stealth features:

1. **Normal Distribution Timing** - Uses Box-Muller transform for Gaussian timing patterns (more human-like than uniform random)
2. **Realistic Click Events** - Includes clientX/Y coordinates within 30-70% of element bounds
3. **Variable Behavior Patterns** - 4 different scroll patterns (none/small/medium/large) with weighted probabilities
4. **Distributed Processing** - Prevents rapid-fire interaction patterns
5. **Intelligent Retry** - Gracefully handles slow page rendering with exponential backoff
6. **Fallback Selectors** - Multiple button detection strategies prevent breakage
7. **Memory Management** - Cleanup handlers prevent detection via resource monitoring
8. **Restricted Permissions** - Only runs on giveaway pages, not entire site

### Risk Evaluation

| Usage Pattern | Risk Level | Recommendation |
|--------------|-----------|----------------|
| 1-5 entries/day | 🟢 Minimal | Safe with default configuration |
| 10-20 entries/day | 🟡 Low | Consider slight interval increase |
| 50+ entries/day | 🟠 Moderate | Use sparingly, blend with manual entries |
| Timing variation disabled | 🔴 High | Always keep randomization ENABLED |
| Bulk operations (25+ tabs) | 🟠 Moderate | Rate limited to 25 for safety |

### Recommended Practices

✅ **Do:**
- Maintain randomization features enabled
- Combine automated with manual entries
- Use appropriate intervals (2000ms+)
- Be selective about giveaway participation
- Monitor console for any warnings or errors

❌ **Don't:**
- Process 100+ giveaways in single session
- Disable timing variation or natural actions
- Enter every available giveaway
- Configure intervals below 1000ms (enforced minimum)
- Try to bypass the 25-tab bulk limit

---

## 🐛 Troubleshooting

### Script Not Functioning?

1. **Inspect Console** - Open F12, check for color-coded messages
2. **Confirm Page Type** - Verify you're on an InstantGaming giveaway page
3. **Use Bulk Open** - From repository page to open curated giveaways (optional)
4. **Adjust Timing** - Slower connections may need 3000-5000ms intervals
5. **Verify Browser** - OperaGX is not compatible

For more help, see [FAQ.md](docs/FAQ.md) or check [Configuration Guide](docs/CONFIGURATION.md).

### "Previously Entered" Alert?

This is **expected behavior**! The script detects prior participation.

### Social Rewards Not Processing?

- Browser security may restrict automated external link clicks
- Try manual clicking or increased intervals
- Some buttons intentionally require genuine user interaction

### Alerts Not Appearing?

- Verify browser notification permissions
- Toggle alert display via menu to refresh
- Some browsers restrict userscript notifications

---

## 📁 Project Organization

```
IG-Givewway-Script/
├── .github/
│   └── ISSUE_TEMPLATE/               # Issue & feature templates
├── docs/
│   ├── CONFIGURATION.md              # Configuration examples & guides
│   └── FAQ.md                        # Frequently asked questions
├── src/
│   └── utilities.js                  # Shared utility functions
├── ig-giveaway-bot.user.js           # Main script (with referral)
├── ig-giveaway-bot-direct.user.js    # Alternative (no referral)
├── README.md                         # Project documentation
├── CONTRIBUTING.md                   # Contribution guidelines
├── CHANGELOG.md                      # Version history
├── LICENSE                           # MIT License
├── .gitattributes                    # Git attributes
└── .gitignore                        # Git exclusions
```

---

## 🔄 Update Mechanism

The script auto-updates via Tampermonkey/Violentmonkey when new releases are published.

**Current Release:** 1.1.4

**What's New in v1.1.4:**
- 🔗 Bulk opener parses raw `links.md` for giveaway URLs
- 🧹 Removed Manual Entry & Activate Links commands from menu
- 🚀 Bulk Open moved to top; still rate-limited & staggered
- 📄 README includes curated links snapshot

**What's New in v1.1.3:**
- Manual-only bulk opening & context-aware menu adjustments
- Removal of Auto-Join toggle

**What's New in v1.1.0:**
- 🔒 Enhanced security: Referral only on giveaway pages
- 🎯 Realistic click events with proper coordinates
- 📊 Normal distribution timing (Box-Muller transform)
- 🎲 Variable scroll patterns (4 behavior types)
- 🛡️ Memory leak prevention with cleanup handlers
- 🔍 Fallback selectors for better reliability
- ⚡ Rate limiting (25 tab max) for safety
- ✅ Input validation (1000-60000ms enforced)

---

## 📄 License

MIT License - Free for use, modification, and distribution.

---

## 👨‍💻 Author

**Dystilest**

- GitHub: [@Dystilest](https://github.com/Dystilest)
- Repository: [IG-Givewway-Script](https://github.com/Dystilest/IG-Givewway-Script)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit bug reports via GitHub Issues
- Create pull requests with enhancements
- Propose new features
- Provide feedback

---

## ⚡ Support

If this script enhances your experience:
- ⭐ Star the repository
- 🔗 Use the referral variant
- 📢 Share with the community
- 🐛 Report issues

---

## ⚖️ Legal Notice

This automation tool is developed for educational purposes and personal use. It automates standard user interactions on InstantGaming. Use responsibly and in compliance with InstantGaming's terms of service. The author assumes no responsibility for any account actions taken by InstantGaming.

---

<div align="center">

**Crafted with precision for the gaming community**

[⬆ Return to Top](#instantgaming-giveaway-automator)

</div>
