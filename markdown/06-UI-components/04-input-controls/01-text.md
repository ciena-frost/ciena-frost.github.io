## Summary

Accept and display input text

<img src="assets/images/ui-components/input-controls/text/sample.png" class="confluence-embedded-image" />


## Related topics

- [Auto-Complete Text Field](#/ui-components/input-controls/auto-complete-text-field) - suggestions based on a data source
- [Forms](#/design-patterns/forms/overview) - usage in form contexts
- [Password](#/ui-components/input-controls/password) - masked input to hide characters
- [Text Area](#/ui-components/input-controls/text-area) - text input with multiple rows


## Behaviors

- Accepts and displays input text
- Input text is left-aligned, but can be right-aligned when required (e.g. some numeric input)
- Focusing the component selects any existing input text
- Focusing the component displays a clear button which can remove all input text
- May conditionally indicate an error state
- Can display a prompt when required
- _(Roadmap)_ Can display units of measure when required


## Guidelines

- **Validate input** when the text field value has an expected format.  If invalid input text is provided the text field should indicate an error state when the text field loses focus.

  <img src="assets/images/ui-components/input-controls/text/error.png" class="confluence-embedded-image" />

- **Display appropriate units of measure** when the text field value will be interpreted according to a unit of measure (e.g. GB, MB, kB).
- **Use prompt text as a last-resort** to supplement context, labels and instructions

  <img src="assets/images/ui-components/input-controls/text/prompt.png" class="confluence-embedded-image" />

- **Avoid overflow** when possible by sizing text fields to comfortably accomodate the expected input length

<!--
## Visual specification

<img src="assets/images/ui-components/input-controls/text/visual-design.png" class="confluence-embedded-image" />
-->
