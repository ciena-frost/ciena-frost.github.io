A password input box accepts the user-entered input. It is a simple text field that can display asterisk for each character.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214720/171229672.png" class="confluence-embedded-image" /></span>

##Behaviors

- A password input field is a simple [text field](#/ui-components/input-controls/text) in which the user enters a value or modifies a value.
- Use a password input field to allow a user to input a value that needs to remain hidden as the user types.
- By default, always hide the text with asterisks unless stated by the user.
- In appropriate circumstances, allow the user to show the characters that were typed by selecting "Show"
- If the user has selected "Show", then the button changes to "Hide" to display the characters as asterisks again.
- Display error messages below the password input field
- If error, display the error text and the border of the password input field in red (see visual specification).
- All text in the password input field should be left aligne
- An indicator is visible when the caps lock key is on.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214720/183360478.png" class="confluence-embedded-image" /></span>

##Usage guidelines

See [text field](#/ui-components/input-controls/text) for basic usage guidelines of the password input field.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214720/183360482.png" class="confluence-embedded-image" /></span>

In particular circumstances, **it might be appropriate to allow the user to see the characters they are typing**. If that is the case, provide the user with the ability to show the characters by selecting the "Show" button that would be displayed in the password input field. When the user selects "Show", the control then changes to "Hide" to hide the characters. For passwords, this would only be when creating a password such that you don't have to have double password entry.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214720/183360484.png" class="confluence-embedded-image" /></span>

**A password input field has five states**:

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214720/183354320.png" class="confluence-embedded-image" /></span>

**Normal:** This is the default state of the password input field.

**Hover:** Use this state to show that the user is hovering over the text field with a mouse. 

**Focus:** Use this state to show that the user has selected the password text field either by tabbing to it or selecting it with the mouse.

**Disabled:** When the password input field is temporary unavailable.

**Error:**  When the password is entered incorrectly or when a password input field is a required field and the user hasn't inputted any text prior to continuing the workflow. Use the error design to visually indicate to the user that this it is an error.

##Visual specification

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214720/183354319.png" class="confluence-embedded-image" /></span>

