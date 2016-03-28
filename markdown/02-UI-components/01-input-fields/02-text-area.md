## Summary

Accept and display multiple rows of input text

<img src="assets/images/ui-components/input-controls/text-area/summary.png"/>

## Related topics

- [Auto-complete text field](#/ui-components/input-fields/auto-complete-text-field) - suggestions based on a data source
- [Password](#/ui-components/input-fields/password) - masked text input to hide characters
- [Text field](#/ui-components/input-fields/text-field) - basic text input

## Behaviors

- Accepts and displays multiple rows of input text
- Displays a minimum of 2 rows
- Text input will wrap on x-overflow and scroll on y-overflow
- Focusing the component selects any existing input text
- Focusing the component displays a clear button which can remove all input text
- Scroll is still operational when the text area is disabled
- May conditionally indicate an error state

## Guidelines

- **Use for free form text on the scale of one or more sentences**, e.g. notes or descriptions

- **Validate input** when possible.  If invalid input text is provided the text area indicates an error state when the text area loses focus.  See [forms](#/design-patterns/forms/overview) for standard error text positioning.

- **Minimize overflow** when possible by sizing text areas to accomodate at least 50% of the expected input length
