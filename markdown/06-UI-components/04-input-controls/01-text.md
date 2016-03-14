1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Text field - VI </span>
============================================================

Created by <span class="author"> Brian Choi</span>, last modified by <span class="editor"> Sonya Thornley</span> on Mar 04, 2016

Description
-----------

A text field are used to accept user-entered text. A text field can be a simple text entry field, or an auto-complete text field that provides suggestions while you type.

### Simple text field:

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/171239720.png" class="confluence-embedded-image" /></span>

 

### Auto-complete text field:

<span style="color: rgb(255,0,255);">VI - need visual</span>

<span style="color: rgb(255,0,255);"> <span class="confluence-embedded-file-wrapper"><img src="assets/images/171235559/171236147.png" class="confluence-embedded-image" /></span></span>

 

 

Behaviors
---------

-   <span style="color: rgb(0,0,0);">A text field is a rectangular area in which the user enters text or modifies existing text. </span>
-   <span style="color: rgb(0,0,0);">By default, a text field supports keyboard focus.</span>
-   <span style="color: rgb(0,0,0);">Use a text field to get information from the user</span>
-   <span style="color: rgb(0,0,0);">Numeric values entered into a text field should be right aligned.</span>
-   <span style="color: rgb(0,0,0);">A text field displays the characters that are typed into the field. See [password input field](Password-input-field---VI_171214720.html) if the characters need to be hidden.</span>
-   <span style="color: rgb(51,51,0);">A text field can be validated to provide error state and error text below the text field.</span>

-   <span style="color: rgb(51,51,0);">An X is displayed at the end of the text field to clear the inputted characters.</span>

<span style="color: rgb(51,51,0);">
</span>

### <span style="color: rgb(51,51,0);">Specific auto-complete text field behaviours</span>

-   <span style="color: rgb(51,51,0);">As the user types a menu of possible options is displayed matching the characters.</span>
-   <span style="color: rgb(51,51,0);">The matching characters are displayed in bold.</span>
-   <span style="color: rgb(51,51,0);">The default state of an auto-complete text field is closed.</span>
-   <span style="color: rgb(51,51,0);">Keyboard focus anywhere in the text field opens the auto-complete text field menu.</span>
-   <span style="color: rgb(51,51,0);">The menu displays 6 items.</span>
-   <span style="color: rgb(51,51,0);">The menu will display a scroll bar if there are more than 6 items displayed.</span>
-   <span style="color: rgb(51,51,0);">The menu opens below the text field.</span>
-   <span style="color: rgb(51,51,0);">Selecting an item will populate the text field with the text of the selected item.</span>
-   <span style="color: rgb(51,51,0);">Does not allow multiple selection.</span>

Usage guidelines
----------------

<span style="color: rgb(0,0,0);">**Be sure to perform appropriate edit checks when you receive user input.** </span>If the appropriate text is not provided, the field should display an error state and provide short appropriate text as to the cause of the error. <span style="color: rgb(0,0,0);">In most cases, the appropriate time to check the data in the field is when the user clicks outside the field or presses the Return, Enter, or Tab key.</span>

<span style="color: rgb(255,0,255);">VI - picture of the error case.</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Display an introductory label with a text field.** A label helps users understand what type of information they should enter. </span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">**Ensure that the length of a text field comfortably accommodates the length of the expected input.** The length of a text field helps users gauge whether they’re inputting the appropriate information.</span></span>

 

<span style="color: rgb(0,0,0);">The auto-complete text field enables user to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering.</span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">An auto-complete text field should be used when there is only one item to choose from, as it does not support multiple selection.</span></span>

**
**

**A text field has five states:**

<span style="color: rgb(255,0,255);">VI - separate the hover/focus</span>

 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214713/171239715.png" class="confluence-embedded-image" width="850" /></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);"> </span></span>

**Normal: **This is the default state of the text field.

<span class="s1">**Hover: **Use this state to show that the user is hovering over the text field with a mouse. </span>

<span class="s1">**Focus:** Use this state to show that the user has selected the text field either by tabbing to it or selecting it with the mouse.</span>

**Disabled:** When the text field is temporary unavailable.

**Error:**  When the text is entered in incorrect  or when a text field option is a required field and the user hasn't input the option prior to continuing his workflow. Use the error design to visual indicate to the user that this is an error.

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);"> </span></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">Visual specification</span></span>
-------------------------------------------------------------------------------------------------------

<span style="color: rgb(255,0,255);">VI - hover and focus</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214713/171241808.png" class="confluence-embedded-image" width="850" /></span>

<span class="s1">[]()
</span>

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 11:4:51.png](attachments/171214713/171239372.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 14:44:10.png](attachments/171214713/171239715.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 14:45:31.png](attachments/171214713/171239718.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 14:46:24.png](attachments/171214713/171239720.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [text-box-spec.png](attachments/171214713/171241800.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [text-box-spec2.png](attachments/171214713/171241808.png) (image/png)

Document generated by Confluence on Mar 07, 2016 12:06

[Atlassian](http://www.atlassian.com/)


