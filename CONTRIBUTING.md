# Contributing to InstantGaming Giveaway Automator

Thank you for your interest in contributing to this project! 🎉

## How You Can Contribute

### Reporting Bugs

1. Search existing [Issues](https://github.com/Dystilest/IG-Givewway-Script/issues) to avoid duplicates
2. If not found, open a new issue with the bug report template
3. Provide comprehensive details:
   - Browser name and version
   - Userscript manager and version
   - Console output (press F12)
   - Steps to reproduce the issue

### Proposing Features

1. Review existing [Issues](https://github.com/Dystilest/IG-Givewway-Script/issues) for similar proposals
2. Open a new issue using the feature request template
3. Describe the use case and potential benefits

### Contributing Code

1. **Fork** the repository to your account
2. **Create a branch** for your contribution (`git checkout -b feature/enhancement-name`)
3. **Implement your changes** following the guidelines below
4. **Test comprehensively** across multiple browsers
5. **Commit** with descriptive messages (`git commit -m 'Add enhancement description'`)
6. **Push** to your branch (`git push origin feature/enhancement-name`)
7. **Submit a Pull Request**

## Code Style Standards

### JavaScript Guidelines

- Utilize modern ES6+ syntax
- Prefer `const` and `let` over `var`
- Include JSDoc comments for functions
- Keep functions concise and focused
- Use descriptive variable names
- Implement proper error handling with try-catch

### Example Structure

```javascript
/**
 * Asynchronously wait for DOM element with timeout
 * @param {string} cssSelector - CSS selector string
 * @param {number} maxWaitTime - Maximum wait time in milliseconds
 * @returns {Promise<Element>}
 */
function awaitElement(cssSelector, maxWaitTime = 5000) {
  return new Promise((resolve, reject) => {
    // Implementation logic
  });
}
```

### Code Formatting

- Indent using 2 spaces
- Use semicolons consistently
- Single quotes for strings
- Add explanatory comments for complex logic

## Testing Requirements

Before submission:

1. Test across at least 2 different browsers
2. Test both with and without referral redirect
3. Review console for any errors
4. Verify all menu commands function correctly
5. Test edge cases (already entered, missing buttons, etc.)

## Pull Request Standards

- Reference any related issues
- Explain what changes were made
- Justify why the changes are beneficial
- Update README if applicable
- Maintain focus (one feature per PR)

## Questions?

Feel free to open an issue for any questions or to participate in discussions!

## License Agreement

By contributing, you agree that your contributions will be licensed under the MIT License.
