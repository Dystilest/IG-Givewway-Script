# InstantGaming Giveaway Automator

> **Intelligent automation for InstantGaming prize draws with sophisticated detection evasion**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Dystilest/IG-Givewway-Script)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Userscript](https://img.shields.io/badge/userscript-Tampermonkey%20%7C%20Violentmonkey-orange.svg)](https://www.tampermonkey.net/)

An advanced userscript designed for InstantGaming prize draw automation, featuring organic behavior simulation, variable timing patterns, and intelligent retry mechanisms.

---

## ⚠️ Browser Compatibility

**OperaGX is not supported.** Please use Firefox, Chrome, Edge, or other Chromium-based browsers for optimal performance.

---

## ✨ Core Features

### 🤖 Intelligent Automation
- **Automated Entry System** - Automatically submits entries on giveaway pages
- **Social Media Integration** - Processes social reward requirements (follow/like actions)
- **Batch Processing** - Efficiently handles multiple giveaways simultaneously
- **Smart Retry Logic** - Automatically retries up to 3 times with intelligent backoff

### 🛡️ Detection Evasion
- **Variable Timing** - Random delays (500-2000ms variance) to simulate human patterns
- **Authentic Events** - Uses genuine browser events rather than simple programmatic clicks
- **Organic Behavior** - Random scrolling and natural interaction simulation
- **Distributed Actions** - Staggers multiple interactions to prevent pattern detection

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

**Variant A: With Referral Support (Recommended)**
```
Supports the developer through affiliate tracking
```
[📥 **Install ig-giveaway-bot.user.js**](https://github.com/Dystilest/IG-Givewway-Script/raw/main/ig-giveaway-bot.user.js)

**Variant B: Direct Version**
```
Clean functionality without any referral tracking
```
[📥 **Install ig-giveaway-bot-direct.user.js**](https://github.com/Dystilest/IG-Givewway-Script/raw/main/ig-giveaway-bot-direct.user.js)

### Step 3: Usage

1. Visit any InstantGaming giveaway page
2. Script automatically activates and processes entry
3. Monitor console (F12) or notifications for operation status

---

## 📖 User Guide

### Automatic Operation (Default)

The script executes automatically on giveaway pages:

1. **Detection Phase** - Locates entry button with smart waiting
2. **Entry Submission** - Submits entry with natural timing variation
3. **Social Processing** - Automatically handles social reward buttons
4. **Status Reporting** - Logs all actions and displays notifications

### Manual Operation

Access controls via Tampermonkey/Violentmonkey menu (extension icon):

| Command | Function |
|---------|----------|
| 🎯 **Manual Entry** | Manually trigger entry submission on current page |
| 📱 **Process Social Rewards** | Process all social reward requirements |
| 📋 **Activate Giveaway Links** | Click all giveaway links on current page |
| 🔗 **Bulk Open Links** | Open all GitHub giveaway collection links in new tabs |
| ⚙️ **Switch Auto-Join Mode** | Toggle automatic entry submission |
| ⚙️ **Switch Social Tasks Mode** | Toggle automatic social processing |
| 🔔 **Switch Alert Display** | Toggle desktop notifications |
| 🎲 **Switch Timing Variation** | Toggle random timing patterns |
| 🤖 **Switch Natural Actions** | Toggle organic behavior simulation |
| ⏱️ **Modify Action Interval** | Configure custom interval between actions |

---

## 🔧 Configuration

### Default Parameters

```javascript
Action Interval:      2000ms (customizable)
Auto-Join:            Enabled
Social Tasks:         Enabled
Notifications:        Enabled
Timing Variation:     Enabled (500-2000ms variance)
Natural Actions:      Enabled
Max Attempts:         3 retries
Attempt Interval:     2500ms
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

The script incorporates multiple stealth features:

1. **Variable Timing** - No two interactions share identical timing
2. **Authentic Events** - Uses `MouseEvent` API for genuine clicks
3. **Organic Simulation** - Random scrolling with natural patterns
4. **Distributed Processing** - Prevents rapid-fire interaction patterns
5. **Intelligent Retry** - Gracefully handles slow page rendering

### Risk Evaluation

| Usage Pattern | Risk Level | Recommendation |
|--------------|-----------|----------------|
| 1-5 entries/day | 🟢 Minimal | Safe with default configuration |
| 10-20 entries/day | 🟡 Low | Consider slight interval increase |
| 50+ entries/day | 🟠 Moderate | Use sparingly, blend with manual entries |
| Timing variation disabled | 🔴 High | Always keep randomization ENABLED |

### Recommended Practices

✅ **Do:**
- Maintain randomization features enabled
- Combine automated with manual entries
- Use appropriate intervals (2000ms+)
- Be selective about giveaway participation

❌ **Don't:**
- Process 100+ giveaways in single session
- Disable randomization mechanisms
- Enter every available giveaway
- Configure intervals below 1000ms

---

## 🐛 Troubleshooting

### Script Not Functioning?

1. **Inspect Console** - Open F12, check for color-coded messages
2. **Confirm Page Type** - Verify you're on an InstantGaming giveaway page
3. **Try Manual Mode** - Use "Manual Entry" from menu
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

**Current Release:** 1.0.0

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
