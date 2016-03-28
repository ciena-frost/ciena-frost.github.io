## Summary

Accept and display masked input text

<img src="assets/images/ui-components/input-controls/password/summary.png"/>

## Related topics

- [Auto-complete text field](#/ui-components/input-fields/auto-complete-text-field) - suggestions based on a data source
- [Text area](#/ui-components/input-fields/text-area) - text input with multiple rows
- [Text field](#/ui-components/input-fields/text-field) - basic text input

## Behaviors

- Accepts and displays masked input text
- Input text is left-aligned
- Focusing the component selects any existing input text
- Focusing the component displays a clear button which can remove all input text
- Indicates when caps lock is on
- May conditionally indicate an error state
- Can toggle between masked and unmasked input text when required
- Can display a prompt when required

## Guidelines

- **Validate input** when possible.  If invalid input text is provided the text field indicates an error state when the text field loses focus.  See [forms](#/design-patterns/forms/overview) for standard error text positioning.
- **When appropriate allow the masked input text to be revealable**, e.g. to avoid entering a duplicate confirmation password when setting a new password

<img src="assets/images/ui-components/input-controls/password/usage-guidelines.png"/>

- **Use prompt text as a last resort** to supplement context, labels and instructions
- **Avoid overflow** when possible by sizing text fields to comfortably accomodate the expected input length
