# InstantGaming Giveaway Automator

> **Intelligent automation for InstantGaming prize draws with sophisticated detection evasion**

[![Version](https://img.shields.io/badge/version-1.1.5-blue.svg)](https://github.com/Dystilest/IG-Givewway-Script)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Userscript](https://img.shields.io/badge/userscript-Tampermonkey%20%7C%20Violentmonkey-orange.svg)](https://www.tampermonkey.net/)

An advanced userscript designed for InstantGaming prize draw automation, featuring organic behavior simulation, variable timing patterns, intelligent retry mechanisms, and enhanced anti-detection capabilities.

**Latest Update (v1.1.5):** Bulk opener now opens **ALL** giveaway links from `links.md` (no 25-tab limit); staggered timing preserved for browser compatibility.

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
| 🔗 **Bulk Open Links** | Fetch & open **ALL** curated giveaway URLs from `links.md` (staggered 100ms) |
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
Bulk Open Stagger:    100ms between tabs (opens all links)
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
| Bulk operations (95+ tabs) | � Low | Staggered opening reduces browser strain |

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
- Disable staggered opening (hardcoded for safety)

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

**Current Release:** 1.1.5

**What's New in v1.1.5:**
- 🚀 Removed 25-tab limit - bulk opener now opens **ALL** giveaway links
- ⏱️ Maintains 100ms staggered timing for browser compatibility
- 📊 Shows total count of giveaways being opened

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

## 🎯 Curated Giveaway Links

Below are all the curated InstantGaming giveaway links maintained in [`links.md`](links.md). The **Bulk Open** command opens **ALL** of these links automatically (95+ giveaways).

<p align="left">
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/BOBLENNON?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12254287-1660306272.jpg" alt="Bob Lennon" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INSTANTGAMING?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2700115-1546959181.jpg" alt="Instant Gaming" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/SUPREMELEADER?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1716955-1681777192.jpg" alt="PwnZ Official IG partner" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ICONOBLAST?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/173704-1571080323.jpg" alt="IconoBLAST" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/bugland?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3009082-1540312665.jpg" alt="Bugland" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GAMEMOVIELAND?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/170629-1547987125.jpg" alt="Game Movie Land" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CODQG?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/452863-1561392211.jpg" alt="CoDQG" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/NALFEINN?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2210688-1649113160.jpg" alt="Nalfeïnn" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/VARG?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5518320-1553640087.jpg" alt="Varg31" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/skyyart?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8099122-1564755224.jpg" alt="Skyyart" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ALKOR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4684425-1617274240.jpg" alt="Alkor" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ROBERT?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/765860-1527847205.jpg" alt="Robert87000" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GAMEWAVE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3297504-1554723487.jpg" alt="GAMEWAVE" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/RATSUPER?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/162664-1527173086.jpg" alt="Mr_RatSup3r" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/YANKA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/17791717-1684537536.jpg" alt="Yanka" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/STREAMRUNNERS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/15530490-1634564097.jpg" alt="StreamRunners" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MeetTheMyth?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/911134-1650630244.jpg" alt="MeetTheMyth" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PHENRIR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16050488-1638352180.jpg" alt="Phenrir Mailoki" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GMODFR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/15499812-1646775114.jpg" alt="Garrys Mod France" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGES?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/825485-1683532505.jpg" alt="Instant Gaming ES" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ACRE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2550652-1614044439.jpg" alt="Acre" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/BILLYCHEROKEE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2072378-1604485229.jpg" alt="BillyCherokee" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LYNX?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2437583-1659723926.jpg" alt="Lynx" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ZONALEROS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/13745456-1614222765.jpg" alt="ZonaLeRoS" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GUIGUI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/262337-1647999658.jpg" alt="El Guigui" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PORAID?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5324059-1634130045.jpg" alt="Cl3ment" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGPT?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16693760-1689603180.jpg" alt="InstantGamingPT" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/TOMBIE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/7276237-1585753188.jpg" alt="Tombie" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/muusoo?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/6107700-1630593332.jpg" alt="Muuso" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/xariel?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/767265-1595434670.jpg" alt="Xariel" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/POKEMONMILLENNIUM?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8857101-1582127081.jpg" alt="Pokemon Millennium" width="76" height="76"/>
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/AQUIYAHORA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5219782-1581748271.jpg" alt="AquiyAhora" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PIVI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8850456-1573572198.jpg" alt="Pivi" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Seals311?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3502745-1617900174.jpg" alt="Seals311 Official IG partner" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/vicio?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/881499-1523615431.jpg" alt="vicio" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGITALIA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/7534356-1687868492.jpg" alt="InstantGamingIT" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INFOPOINT-ITALIA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5022391-1620639580.jpg" alt="Infopoint-Italia" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FROZ3N?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1016668-1682448159.jpg" alt="Froz3n" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ELOTRIX?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9351061-1578514985.jpg" alt="ELoTRiX" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/NYKK3?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/560668-1500305390.jpg" alt="NYKK3" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PLAYERINSIDE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1115181-1694833323.jpg" alt="PlayerInside" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ILGATTOSULTUBO?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/539151-1690300630.jpg" alt="ilGatto" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FRANCESCOPARDINI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9461224-1581008870.jpg" alt="Francesco Pardini" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/NU89?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3123668-1636629261.jpg" alt="NU89" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ITERMOSIFONI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/811973-1557938063.jpg" alt="i Termosifoni" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CORYPHEUS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/15398397-1632480753.jpg" alt="Corypheus" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/THETJI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/17123566-1647950384.jpg" alt="Tij" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/deladysigner?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/7761723-1615476784.jpg" alt="DeLadysigner" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/KURU?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8991415-1574995082.jpg" alt="KuruHS" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/biffa?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/21867230-1698315461.jpg" alt="Biffa Plays" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/K0MPA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/17310536-1649317648.jpg" alt="K0mpa" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/instantgamingde?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2700115-1699892940.jpg" alt="InstantGamingDE" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INSTANTGAMINGPL?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2700115-1699892940.jpg" alt="InstantGamingPL" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/snedgie?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/23507458-1709662317.jpg" alt="snedgie" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/mitasims?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/20860359-1685554038.jpg" alt="Mitasims" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/officialinvictus?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/21241269-1689851267.jpg" alt="Official Invictus" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GCA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3773947-1698238052.jpg" alt="Creators Area" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/tahva?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/10646155-1708975800.jpg" alt="Tahva" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/frankieslair?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/23820479-1712567596.jpg" alt="Frankie's Lair" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GIORNOGAMING?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4011018-1561985872.jpg" alt="GiornoGaming" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/SOLOUMIDO?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12543134-1662069422.jpg" alt="Soloumido" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CYBERLUK?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9983452-1617873810.jpg" alt="CyberLuk" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/STELIUS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/6294915-1637162339.jpg" alt="Stelius" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CSGOFR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1994535-1695849965.jpg" alt="CS France" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/EXOMADARA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/859995-1693223960.jpg" alt="ExoMadara" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/KWOREY?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1599623-1603853393.jpg" alt="kworey" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PHOTORACERTV?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/11519077-1621966067.jpg" alt="PhotoRacerTV" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ARLAN360?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/19166590-1670176579.jpg" alt="Arlan360" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/j0nathan?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/32491-1612461730.jpg" alt="j0nathan" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/HEIKKI360?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/7276336-1553876546.jpg" alt="Heikki360" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/topgames?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3694635-1636126807.jpg" alt="Top Games" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CABRAVOLADORA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/367168-1463061235.jpg" alt="CabraVoladora" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/DRWAL?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16373643-1644843063.jpg" alt="Drwal Rębajło" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MERTA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16704111-1643815283.jpg" alt="Merta" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/IMPAKT?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9828884-1649672897.jpg" alt="impaKt" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/kiszak?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16472848-1693834365.jpg" alt="Kiszak" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/playluque?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/21036547-1687441412.jpg" alt="PlayLuque" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/STRADI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2544880-1691670477.jpg" alt="Stradi" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/poro?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/24150014-1715595420.jpg" alt="poro" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/DESASTRESHOW?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1897045-1617093992.jpg" alt="Desastre Show" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/JOFRIK99?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16861995-1676462477.jpg" alt="jofrik99" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/kemist?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/7994803-1650052388.jpg" alt="KEMIST" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MFGAMING?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/17307721-1649242244.jpg" alt="MFGAMING" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/heystan?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/themes/igv2/images/avatar2.svg" alt="HeyStan" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/drunge?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2871044-1706278970.jpg" alt="Drunge" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Zazza23?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/942998-1720514395.jpg" alt="Zazzone230" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/blackpommes?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/14294886-1712926805.jpg" alt="BlackPommes" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/pt/giveaway/quantoquevaicustar?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/24567717-1719927759.jpg" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/pt/giveaway/eusouocap?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/25089307-1725023867.jpg" alt="Eu sou o Cap" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LUSORKOEFFIZIENT?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8124578-1565266897.jpg" alt="lusorkoeffizient" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/it/giveaway/joepad17?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2165589-1610322231.jpg" alt="JoePad17" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/en/giveaway/vutomy?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/24399720-1718284555.jpg" alt="Vutomy" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/es/giveaway/elkai?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/11213325-1724639703.jpg" alt="eLKAi" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/en/giveaway/onlywaifu?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/24159414-1715876189.jpg" alt="onlywaifu" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/en/giveaway/cryzenx?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12615446-1750011746.jpg" alt="CryZENx" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/naito75?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/646051-1626862718.jpg" alt="naito75" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/pt/giveaway/remedy?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/20453628-1680792400.jpg" alt="MisterRemedy" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/pl/giveaway/LOSIU?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16899979-1646305428.jpg" alt="Åosiu" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/pt/giveaway/azhunky?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/26709731-1737983086.jpg" alt="Azhunky" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ramosturbo?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/578901-1736969080.jpg" alt="Ramos Turbo" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/de/giveaway/mello?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8725992-1714118564.jpg" alt="MELLO" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/en/giveaway/pixelade?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/25779964-1730223397.jpg" alt="Pixelade" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/en/giveaway/carinazinhaa?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4215295-1622219100.jpg" alt="Carinazinhaa" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/en/giveaway/huebi?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/25729334-1731956009.jpg" alt="Huebi" width="76" height="76" />
    </a>
    <a class="giveaway" href="https://www.instant-gaming.com/es/giveaway/miriampetricor?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/28376726-1752697731.jpg" alt="Miriam Petricor" width="76" height="76" />
    </a>
</p>

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
