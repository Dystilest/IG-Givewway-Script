# InstantGaming Social Rewards Automator

> **Simple automation tool for InstantGaming social reward buttons**

[![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/Dystilest/IG-Givewway-Script)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Userscript](https://img.shields.io/badge/userscript-Tampermonkey%20%7C%20Violentmonkey-orange.svg)](https://www.tampermonkey.net/)

A lightweight userscript for automating social reward interactions on InstantGaming giveaway pages. Automatically clicks social media follow/like buttons to complete reward requirements.

**Latest Update (v1.2.0):** Major simplification - script now focuses exclusively on social media reward automation. All bulk opening and automatic entry features have been removed for a streamlined, single-purpose tool.

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

---

## ✨ Features

### 📱 Social Media Automation
- **Automatic Social Rewards** - Processes all social media reward buttons (follow/like actions) on giveaway pages
- **Smart Detection** - Automatically finds and clicks enabled reward buttons
- **Timing Control** - 400ms intervals between clicks to avoid overwhelming the page
- **Visual Feedback** - Optional desktop notifications for completed operations

### ⚙️ Simple Settings
- **Toggle Social Tasks** - Enable or disable the social media automation
- **Toggle Notifications** - Show or hide desktop notifications
- **Persistent Storage** - All preferences saved across browser sessions

### 📊 Operation Monitoring
- **Styled Console Output** - Color-coded logging for easy debugging
- **Real-time Status** - Live feedback for every operation
- **Error Tracking** - Clear error messages when issues occur

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

**Note:** This version includes referral support (`igr=ramsesii`) which helps support the developer. The referral parameter is only added once per session and only on giveaway pages.

### Step 3: Usage

1. Visit any InstantGaming giveaway page
2. Use the userscript menu to trigger "📱 Process Social Rewards"
3. Monitor console (F12) or notifications for operation status

---

## 📖 User Guide

### Manual Operation

Access controls via Tampermonkey/Violentmonkey menu (extension icon):

| Command | Function |
|---------|----------|
| 📱 **Process Social Rewards** | Process social reward buttons on current giveaway page |
| ⚙️ **Toggle Social Tasks** | Enable or disable social media automation |
| 🔔 **Toggle Notifications** | Show or hide desktop notifications |

---

## 🔧 Configuration

### Default Parameters

```javascript
Social Tasks:         Enabled
Notifications:        Enabled
Click Interval:       400ms between social reward buttons
```

### Optimization

All settings persist automatically and can be modified via menu commands.

---

## 🐛 Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| Script doesn't appear to run | Check userscript manager is enabled; verify you're on a giveaway page (`*/giveaway/*`) |
| No buttons being clicked | Open console (F12) to check for error messages; some giveaways may not have social rewards |
| Notifications not showing | Toggle notifications via menu command; check browser permission settings |
| Console shows errors | Check that you have the latest version installed; try refreshing the page |

### Browser-Specific Notes

- **OperaGX**: Not supported due to framework incompatibilities
- **Firefox**: May require explicit notification permissions - check browser settings
- **Chrome/Edge**: Works best with Tampermonkey extension
- **Brave**: Ensure scripts are allowed in Shield settings

---

## 📋 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

---

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License - Free for use, modification, and distribution.

---

## 🎯 Curated Giveaway Links

Below are all the curated InstantGaming giveaway links maintained in [`links.md`](links.md). You can open these manually to participate in giveaways.

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
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FuryTV?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2212086-1724072991.jpg" alt="Fury TV" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Tenshuu?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3012666-1534427037.jpg" alt="Tenshuu" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MRLIBAX?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/253994-1556531181.jpg" alt="Mr Libax" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/KORO?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4052178-1534419826.jpg" alt="korOsValo" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CAMELEO?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9098344-1545235857.jpg" alt="Caméléo" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FANTA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/118033-1643208825.jpg" alt="FantaBobGames" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LeGrille?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8163859-1624637051.jpg" alt="LeGrille" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/YASS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1040048-1527152853.jpg" alt="Yass" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/AKYTV?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4988871-1554723445.jpg" alt="Aky.tv" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/EWEN?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/7127896-1604334835.jpg" alt="Ewen" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MELCHIOR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8044632-1565104262.jpg" alt="Melchior" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MAX?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1695502-1686143388.jpg" alt="MaxEstLa" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/GRIMKUJOW?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/16229-1527078970.jpg" alt="Grim Kujow" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PANDAZOUK?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3224958-1708946166.jpg" alt="PANDAZOUK" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FUNKYBLASTER?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2251551-1585233048.jpg" alt="Funky Blaster" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/DEUSLOL?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5026726-1564500878.jpg" alt="DeusLoL" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/THEKILLERZ?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2289172-1663073959.jpg" alt="Thekillerz" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MANI?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2265878-1563802398.jpg" alt="Mani" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/KAMETO?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4419086-1681388071.jpg" alt="Kamel le magicien [KCorp]" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FREZA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/6099353-1619085068.jpg" alt="Freza" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/TONTON?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2278551-1631526638.jpg" alt="Tonton" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/CLEBARDMAN?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3012503-1578326878.jpg" alt="Cleebardman" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/DRAKHKAR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/6179084-1687344903.jpg" alt="Drakhkar" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MadeinFarcry?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8070341-1563293619.jpg" alt="MadeinFarcry" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LAITUE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2291175-1605533468.jpg" alt="La Laitue" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LaColoc?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12252940-1710255862.jpg" alt="La Coloc" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ADRI1?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2262803-1529408951.jpg" alt="Adri1" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Spearix?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5087077-1678375881.jpg" alt="Spearix" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/moman?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2286186-1698077506.jpg" alt="mOmAN." width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/PoneyClub?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5086919-1652192695.jpg" alt="PoneyClub" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/laink?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4402301-1680540677.jpg" alt="Laink" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/terracid?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8056889-1594135653.jpg" alt="Terracid" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ares?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12253062-1679054896.jpg" alt="Arès" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Aayley?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2253577-1527069926.jpg" alt="Aayley" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/chowh1?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8044702-1565097983.jpg" alt="Chowh1 [KCorp]" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/newtiteuf?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/11113-1680622833.jpg" alt="Newtiteuf" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/alphacast?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/196651-1527149879.jpg" alt="Alphacast" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ponce?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4978668-1687180879.jpg" alt="Ponce" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/BAGHERA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2302906-1601392527.jpg" alt="BagheraJones" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MICHOU?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2270370-1690966043.jpg" alt="Michou" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/thekairi?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/10020888-1630596854.jpg" alt="TheKairi78" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/paladium?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3063193-1688040031.jpg" alt="Paladium" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Mistermv?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1689838-1676477877.jpg" alt="MisterMV" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/FUTIVES?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3000799-1604675337.jpg" alt="FutiVes" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/HORTY?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3009082-1540312665.jpg" alt="Horty [KCorp]" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/aluniz?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3002308-1690291638.jpg" alt="Aluniiz" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/djfred?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5009717-1690884267.jpg" alt="djfred93140" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/SHIBABEE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/10008085-1608126346.jpg" alt="Shibabee" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Rivenzi?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8083516-1629279959.jpg" alt="Rivenzi [KCorp]" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/WANKIL?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5991556-1689947668.jpg" alt="Wankil Studio" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/maghla?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/170642-1564585677.jpg" alt="Maghla" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Donovan?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8097916-1564584733.jpg" alt="Dona" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/xari?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8099108-1693834655.jpg" alt="Xari [KCorp]" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Mynthos?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4403-1651569329.jpg" alt="Mynthos" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Doliprane?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/10013653-1653663330.jpg" alt="Doliprane" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Domingo?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8053041-1685373952.jpg" alt="Domingo [KCorp]" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/zanzibart?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/19267-1678895181.jpg" alt="Zanzibart" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Krea?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4423147-1678896023.jpg" alt="Krea" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/ayden?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5014527-1584028084.jpg" alt="Ayden" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Lapi?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3060859-1700138166.jpg" alt="La compagnie du palpé" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LeStream?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2286686-1646065506.jpg" alt="LeStream" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/inoxtag?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/3012617-1691406817.jpg" alt="Inoxtag" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/INTHEPANDA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5002964-1692720056.jpg" alt="InThePanda" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/sardoche?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2286186-1698077506.jpg" alt="Sardoche" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/JOYCA?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/198301-1681469851.jpg" alt="Joyca" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LAOULOS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/10005169-1597143965.jpg" alt="La Oulos" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/MONBANQUET?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8069842-1579803421.jpg" alt="Mon Banquet" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Corobizar?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2700115-1546959181.jpg" alt="Corobizar" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Cyprien?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/6095717-1708448018.jpg" alt="Cyprien Gaming" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Mineka?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/5067326-1643723311.jpg" alt="Mineka" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Tibo?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2210684-1698244820.jpg" alt="Tibo InShape" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/JESUISPASPAUVRE?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/1038673-1706531398.jpg" alt="Je Suis Pas Pauvre" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Goovi?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9098344-1545235857.jpg" alt="Goovi" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/SPEARSOR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/9126126-1695290929.jpg" alt="Spe Arsor" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/EZKO?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4419086-1681388071.jpg" alt="EZ Ezko" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/OgamingShow?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2261069-1708610629.jpg" alt="O'Gaming Show" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Sypher?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12239577-1708601764.jpg" alt="Sypher" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Doigby?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/12251569-1708601809.jpg" alt="Doigby" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/squeezie?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/193649-1527156851.jpg" alt="Squeezie" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Maghla2?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/8058839-1709896991.jpg" alt="Maghla 2.0" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/RIIIBS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/4406732-1709896961.jpg" alt="Riiibs" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/LOCKLEAR?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2253576-1586348854.jpg" alt="Locklear" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/COACHS?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/170642-1564585677.jpg" alt="CoacHs" width="76" height="76" />
    </a> 
    <a class="giveaway" href="https://www.instant-gaming.com/fr/giveaway/Prime?igr=jaha" target="_blank" rel="noreferrer">
        <img src="https://gaming-cdn.com/images/avatars/2262803-1529408951.jpg" alt="Prime" width="76" height="76" />
    </a> 
</p>

---

*Happy giveaway hunting!* 🎮
