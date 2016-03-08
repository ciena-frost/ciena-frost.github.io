1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Password input field - VI </span>
======================================================================

Created by <span class="author"> Brian Choi</span>, last modified by <span class="editor"> Sonya Thornley</span> on Mar 04, 2016

Description
-----------

A password input box accepts the user-entered password. It differs from the text box in that it is a special component to allow the password to display an asterix for each character.

<span class="confluence-embedded-file-wrapper">$assets/images/171214720/171229672.png" class="confluence-embedded-image" /></span>

 

Behaviors
---------

-   <span style="color: rgb(0,0,0);">A password input field is a [text field](Text-field---VI_171214713.html) in which the user enters a password or modifies an existing password.  </span>
-   <span style="color: rgb(0,0,0);">By default, a password input field supports keyboard focus and password entry.</span>
-   <span style="color: rgb(0,0,0);">Use a password input field to allow a user to input a password or other text that needs to remain hidden as the user types.</span>
-   <span style="color: rgb(0,0,0);">By default, always hide the password text with asterixs unless stated by the user. </span><span style="color: rgb(0,0,0);">
    </span>
-   <span style="color: rgb(0,0,0);">In appropriate circumstances, allow the user to show the characters that were typed by selecting "Show"</span>
-   <span style="color: rgb(0,0,0);">If the user has selected "Show", then the button changes to "Hide" to display the characters as asterixs again.</span>
-   <span style="color: rgb(0,0,0);">Display error messages below the password input field </span>
-   <span style="color: rgb(0,0,0);">If error, display the error text and the border of the password input field in red (see visual specification).</span>
-   <span style="color: rgb(0,0,0);">All text in the password input field should be left aligned.</span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">Usage guidelines</span></span>
------------------------------------------------------------------------------------------------

<span style="color: rgb(0,0,0);">**Be sure to perform appropriate verification when you receive user input.** If the appropriate text is not provided, the field should display an error state and provide short appropriate text as to the cause of the error. <span style="color: rgb(0,0,0);">In most cases, the appropriate time to check the data in the field is when the user clicks outside the field or presses the Return, Enter, or Tab key.</span></span>

<span style="color: rgb(0,0,0);"> </span>

<span style="color: rgb(255,0,255);"> </span><span class="confluence-embedded-file-wrapper">$assets/images/171214720/171229671.png" class="confluence-embedded-image" /></span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">****In general, display an introductory label for the password input field** for example "Password". If not a password, then chose a label that helps the user understand what type of information they should enter.**</span></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">**In general, ensure that the length of a password input field comfortably accommodates the length of the expected input.** The length of a password input field helps users gauge whether they’re inputting the appropriate information.</span></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">
</span></span>

In particular circumstances, **it might be appropriate to allow the user to see the characters they are typing**. If that is the case, provide the user with the ability to show the characters by selecting the "Show" button that would be displayed in the password input field. When the user selects "Show", the control then changes to "Hide" to hide the characters.

<span style="color: rgb(255,0,255);">VI - show the "Show" and "Hide" behaviours.</span>

**A password input field has four states**:

<span style="color: rgb(255,0,255);">VI - need hover as well</span>

 

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size">$assets/images/171214720/171229719.png" class="confluence-embedded-image" width="850" /></span> </span></span>

**Normal: **This is the default state of the password input field.

**Hover: **Use this state to show that the user is hovering over the text field with a mouse. 

**Focus:** Use this state to show that the user has selected the password text field either by tabbing to it or selecting it with the mouse.

**Disabled:** When the password input field is temporary unavailable.

**Error:**  When the password is entered incorrectly or when a password input field is a required field and the user hasn't inputted any text prior to continuing the workflow. Use the error design to visually indicate to the user that this it is an error.

Visual specification
--------------------

<span style="color: rgb(255,0,255);">VI - need hover and focus  separately.</span>

<span class="confluence-embedded-file-wrapper">$assets/images/171214720/171243052.png" class="confluence-embedded-image" /></span>

<span style="color: rgb(255,0,255);line-height: 1.42857;"> </span>

Attachments:
------------

$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:21:46.png](attachments/171214720/171229665.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:22:33.png](attachments/171214720/171229668.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:23:1.png](attachments/171214720/171229671.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:23:58.png](attachments/171214720/171229672.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:26:2.png](attachments/171214720/171229676.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:27:3.png](attachments/171214720/171229679.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-15 13:43:26.png](attachments/171214720/171229719.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-7 11:55:4.png](attachments/171214720/171243038.png) (image/png)
$assets/images/icons/bullet_blue.gif" width="8" height="8" /> [password-input-box.png](attachments/171214720/171243052.png) (image/png)

Document generated by Confluence on Mar 07, 2016 12:06

[Atlassian](http://www.atlassian.com/)


