# Frequently Asked Questions

## Installation

### Q: Which browser should I use?
**A:** Firefox, Chrome, Edge, or Brave are recommended. OperaGX is **not compatible**.

### Q: Which userscript manager is best?
**A:** Both Tampermonkey and Violentmonkey work well. Violentmonkey is open-source and lighter weight.

### Q: What about the referral link?
**A:** The script includes a referral parameter (`igr=ramsesii`) to support development. It's only added once per browser session and only on giveaway pages - never on catalog, checkout, or other pages. The referral does not affect functionality or your privacy.

---

## Usage

### Q: Does this work automatically?
**A:** Yes! Once installed, it automatically processes giveaways when you visit a giveaway page.

### Q: Can I use it manually?
**A:** Absolutely! Click the userscript extension icon and select "Manual Entry" to trigger it manually.

### Q: What does "Previously Entered" mean?
**A:** This means you've already entered this giveaway. The script prevents duplicate entries.

### Q: Why aren't social buttons clicking?
**A:** Some social buttons open external links, which browsers may block for security. You may need to click them manually or adjust browser settings.

---

## Safety

### Q: Is this safe to use?
**A:** The script mimics natural human behavior with realistic timing distributions, authentic click coordinates, and variable patterns. Version 1.1.0 significantly enhances anti-detection. Use responsibly and in moderation.

### Q: Can I get banned?
**A:** We've implemented advanced stealth features including:
- Normal distribution timing (not uniform random)
- Realistic click events with proper coordinates
- Variable scroll patterns (4 behavior types)
- Memory leak prevention
- Rate limiting

However, no automation is 100% risk-free. Follow recommended practices:
- Don't enter 100+ giveaways per day
- Keep randomization enabled
- Mix automated with manual entries
- Be selective about participation

### Q: What are the recommended settings?
**A:** The default settings (2000ms base interval with normal distribution timing) are safe for most users. The script now enforces minimum 1000ms and maximum 60000ms intervals. See CONFIGURATION.md for other options.

---

## Troubleshooting

### Q: The script isn't working. What should I check?
**A:** 
1. Verify you're on an InstantGaming giveaway page (URL must contain "giveaway")
2. Check browser console (F12) for error messages
3. Try manual mode from the menu
4. Ensure your browser is supported
5. Check that the userscript manager is enabled
6. The script now only runs on giveaway-specific URLs for security

### Q: How do I see console messages?
**A:** Press F12 to open Developer Tools, then click the "Console" tab. Look for blue, green, orange, or red messages from "[IG Giveaway Bot]".

### Q: The script auto-updates but seems broken after update?
**A:** Version 1.1.0 includes major changes. Try:
1. Clear your browser cache
2. Disable and re-enable the script
3. Check that you're on a giveaway page (not catalog/checkout)
4. Reinstall the script if issues persist

### Q: Can I use this on mobile?
**A:** Mobile browsers don't support userscript managers well. Desktop is recommended.

---

## Configuration

### Q: How do I change settings?
**A:** Click your userscript manager icon (Tampermonkey/Violentmonkey), hover over the script name, and select from the menu options.

### Q: Do settings persist?
**A:** Yes! All settings are saved automatically and persist across browser sessions.

### Q: What's the best delay setting?
**A:** 2000ms (default) is good for most users. Increase to 3000-5000ms if you want extra safety or have a slow connection. The script now enforces a minimum of 1000ms and maximum of 60000ms for safety.

### Q: Should I disable timing variation?
**A:** **No!** Keep timing variation enabled. It uses advanced normal distribution (Box-Muller transform) for realistic human-like patterns. This is critical for anti-detection.

### Q: What's new about timing in v1.1.0?
**A:** Instead of simple random delays, the script now uses Gaussian (normal) distribution which better mimics how humans actually time their actions. This is statistically more realistic and harder to detect.

---

## Features

### Q: What's the difference between auto-join and social tasks?
**A:** 
- **Auto-join**: Automatically clicks the main participate/entry button
- **Social tasks**: Automatically clicks social reward buttons (follow/like)

### Q: Can I disable certain features?
**A:** Yes! All features can be toggled through the userscript menu.

### Q: What does "Natural Actions" do?
**A:** It simulates human behavior with variable scrolling patterns:
- 30% chance: No scroll (just looking)
- 40% chance: Small scroll (reading nearby)
- 20% chance: Medium scroll
- 10% chance: Large scroll (exploring page)

This variability makes automation less detectable compared to always scrolling the same amount.

### Q: What's the bulk tab limit?
**A:** Version 1.1.0 limits bulk link opening to 25 tabs maximum to prevent browser overload and potential detection. This is a safety feature that cannot be disabled.

---

## Support

### Q: How do I report a bug?
**A:** Open an issue on GitHub with:
- Browser and version
- Userscript manager and version
- Console output (F12)
- Steps to reproduce

### Q: Can I contribute?
**A:** Yes! See CONTRIBUTING.md for guidelines.

### Q: Where can I get help?
**A:** Open an issue on GitHub or check existing issues for similar problems.

---

## Legal

### Q: Is this legal?
**A:** The script automates legitimate user interactions. However, check InstantGaming's terms of service for any restrictions on automation.

### Q: Who is responsible if something goes wrong?
**A:** The script is provided "as-is" under MIT License. The author is not responsible for any account actions taken by InstantGaming. Use at your own discretion.
