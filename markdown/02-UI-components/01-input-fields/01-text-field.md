## Summary

Accept and display input text

<img src="assets/images/ui-components/input-controls/text/sample.png" />


## Related topics

- [Auto-complete text field](#/ui-components/input-fields/auto-complete-text-field) - suggestions based on a data source
- [Password](#/ui-components/input-fields/password) - masked text input to hide characters
- [Text area](#/ui-components/input-fields/text-area) - text input with multiple rows


## Behaviors

- Accepts and displays input text
- Input text is left-aligned, but can be right-aligned when required (e.g. some numeric input)
- Focusing the component selects any existing input text
- Focusing the component displays a clear button which can remove all input text
- May conditionally indicate an error state
- Can display a prompt when required
- _(Roadmap)_ Can display units of measure when required


## Guidelines

- **Validate input** when possible.  If invalid input text is provided the text field indicates an error state when the text field loses focus.  See [forms](#/design-patterns/forms/overview) for standard error text positioning.

  <img src="assets/images/ui-components/input-controls/text/error.png" class="confluence-embedded-image" />

- **Display appropriate units of measure** when the text field value will be interpreted according to a unit of measure (e.g. GB, MB, kB).
- **Use prompt text as a last-resort** to supplement context, labels and instructions

  <img src="assets/images/ui-components/input-controls/text/prompt.png" class="confluence-embedded-image" />

- **Avoid overflow** when possible by sizing text fields to comfortably accomodate the expected input length
