## Summary

A password input box accepts the user-entered input. It is a simple text field that can display asterisk for each character.

<img src="assets/images/ui-components/input-controls/password/description.png" class="confluence-embedded-image"/>

## Behaviors

-   A password input field is a [text field](#/ui-components/input-controls/text) in which the user enters a value or modifies a value. 
-   Use a password input field to allow a user to input a value that needs to remain hidden as the user types.
-   By default, always hide the text with asterisks unless stated by the user.
-   In appropriate circumstances, allow the user to show the characters that were typed by selecting the show indicator.
-   If the user has selected the show indicator the icon changes to the hide indicator.
-   If the user has selected the hide indicator, the icon changes to the show indicator and displays the characters as asterisks.
-   Display error messages below the password input field.
-   If error, display the error text and the border of the password input field in red (see visual specification).
-   All text in the password input field should be left aligned.
-   An indicator is visible when the caps lock key is on.

## Usage guidelines

See [text field](#/ui-components/input-controls/text) for basic usage guidelines of the password input field.

In particular circumstances, **it might be appropriate to allow the user to see the characters they are typing**. If that is the case, provide the user with the ability to show the characters by selecting the show indicator button that would be displayed in the password input field. When the user selects show indicator, the control then changes to hide indicator to hide the characters. For passwords, this would be used when creating a password such that you don't have to have double password entry.

<img src="assets/images/ui-components/input-controls/password/usage-guidelines.png" class="confluence-embedded-image"/>

## Visual specification

<img src="assets/images/ui-components/input-controls/password/visual-specification.png" class="confluence-embedded-image"/>