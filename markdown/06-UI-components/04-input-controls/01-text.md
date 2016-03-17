A text field are used to accept user-entered text. A text field can be a simple text entry field, or an auto-complete text field that provides suggestions while you type.

### Simple text field:

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/171239720.png" class="confluence-embedded-image" /></span>

 

### Auto-complete text field:

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183354280.png" class="confluence-embedded-image" /></span>

 

 

## Behaviors


-   <span style="color: rgb(0,0,0);">A text field is a rectangular area in which the user enters text or modifies existing text. </span>
-   <span style="color: rgb(0,0,0);">By default, a text field supports keyboard focus.</span>
-   <span style="color: rgb(0,0,0);">Use a text field to get information from the user</span>
-   <span style="color: rgb(0,0,0);">Numeric values entered into a text field should be right aligned.</span>
-   <span style="color: rgb(0,0,0);">A text field displays the characters that are typed into the field. See [password input field](#/ui-components/input-controls/password) if the characters need to be hidden.</span>
-   <span style="color: rgb(51,51,0);">A text field can be validated to provide error state and error text below the text field.</span>
-   <span style="color: rgb(51,51,0);">For a text field that is already populated with text, selecting in the text field will highlight the whole contents.</span>
-   <span style="color: rgb(51,51,0);">An X is displayed at the end of the text field to clear the inputted characters</span><span style="color: rgb(51,51,0);">.</span>

### Specific auto-complete text field behaviours

-   <span style="color: rgb(51,51,0);">As the user types a menu of possible options is displayed matching the characters.</span>
-   <span style="color: rgb(51,51,0);">The matching characters are displayed in bold in alphabetical order.</span>
-   <span style="color: rgb(255,0,255);"><span style="color: rgb(51,51,0);">The typed text will remain in the text field if the user does not choose an option from the auto-complete menu.</span></span>
-   <span style="color: rgb(51,51,0);">The default state of an auto-complete text field is closed.</span>
-   <span style="color: rgb(51,51,0);">The menu displays 5 to 9 items.</span>
-   <span style="color: rgb(51,51,0);">The menu will display a scroll bar if there are more than the items displayed.</span>
-   <span style="color: rgb(51,51,0);">The menu opens below the text field.</span>
-   <span style="color: rgb(51,51,0);">Selecting an item will populate the text field with the text of the selected item.</span>
-   <span style="color: rgb(51,51,0);">Does not allow multiple selection.</span><span style="color: rgb(51,51,0);">
    </span>
-   <span style="color: rgb(51,51,0);">Case insensitive</span>
-   <span style="color: rgb(51,51,0);">Pause for (300 ms to one seconds?) before it retrieves</span>
-   <span style="color: rgb(51,51,0);">If it takes longer than (see [progress indicators](#/design-patterns/user-feedback/progress-indicator)) the specified amount of time, then a progress indicator is displayed to provide feedback that the list is being generated to be displayed.</span>

<span style="color: rgb(51,51,0);"><span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183354308.png" class="confluence-embedded-image" /></span>
</span>

-   <span style="color: rgb(51,51,0);">String matches on:</span>
    -   <span style="color: rgb(51,51,0);">Contains</span>
    -   <span style="color: rgb(51,51,0);">Prefix matching (default behavior)</span>

## Usage guidelines

<span style="color: rgb(0,0,0);">**Be sure to perform appropriate error checks when you receive user input.** </span>If the appropriate text is not provided, the field should display an error state and provide short appropriate text as to the cause of the error. <span style="color: rgb(0,0,0);">In most cases, the appropriate time to check the data in the field is when the user clicks outside the field or there is a loss of focus (presses the Return, Enter, or Tab key).</span>

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183354295.png" class="confluence-embedded-image" /></span>


<span style="color: rgb(0,0,0);">**Display a label with a text field.** A label helps users understand what type of information they should enter. Labels should be placed to the left or on top of the text field. See [text](#/design-conventions/text). </span>

<span style="color: rgb(0,0,0);">**Units can be displayed to the right of the text field.** See [text](#/design-conventions/text) and [forms](#/design-patterns/forms/overview).</span>

**<span><span style="color: rgb(0,0,0);">Prompt text can optionally be displayed in the field and should be used sparingly. </span></span>**

**<span><span style="color: rgb(0,0,0);"> </span></span>**<span><span style="color: rgb(0,0,0);"><span style="color: rgb(255,0,255);"><span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183354312.png" class="confluence-embedded-image" /></span></span></span></span>

<span style="color: rgb(255,0,255);"><span style="color: rgb(51,51,0);">Prompt</span> <span style="color: rgb(51,51,0);">text</span> <span style="color: rgb(51,51,0);">in a field is to be used</span> <span style="color: rgb(51,51,0);">when:</span></span><span style="color: rgb(51,51,0);"><span style="color: rgb(255,0,255);"> </span></span>

-   <span><span><span style="color: rgb(51,51,0);">"e.g. *text*" should be used when a particular format should be used. </span></span></span>
-   <span><span><span style="color: rgb(51,51,0);">"*Instruction*" should be used when it is not obvious from the label what to input into the field or to reenforce what can be inputed.</span></span></span>

<span><span><span style="color: rgb(51,51,0);">See [text](#/design-conventions/text) for prompt text.</span></span></span>

 

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">**Ensure that the length of a text field comfortably accommodates the length of the expected input.** The length of a text field helps users gauge whether they’re inputting the appropriate information. See [forms](#/design-patterns/forms/overview) for appropriate size if being used in a form.</span></span>

 

### <span style="color: rgb(51,51,0);">Specific auto-complete text field usage guidelines</span>

<span style="color: rgb(51,51,0);"> </span><span style="color: rgb(0,0,0);">The auto-complete text field enables user to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering. Suited for full string being inputed and partial strings being inputed as search attributes.</span>

<span style="color: rgb(0,0,0);">Choose an auto-complete text field over a combo box when there will be a large amount of data to display such that it makes using a combo box cumbersom. </span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">An auto-complete text field should be used when there is only one item to choose from, as it does not support multiple selection.</span></span>





**A text field has five states:**

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183360527.png" class="confluence-embedded-image" /></span>

 

**Normal:** This is the default state of the text field.

<span class="s1">**Hover:** Use this state to show that the user is hovering over the text field with a mouse. </span>

<span class="s1">**Focus:** Use this state to show that the user has selected the text field either by tabbing to it or selecting it with the mouse.</span>

**Disabled:** When the text field is temporary unavailable.

**Error:**  When the text is entered in incorrect  or when a text field option is a required field and the user hasn't input the option prior to continuing his workflow. Use the error design to visual indicate to the user that this is an error.

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);"> </span></span>

## **Visual specification**

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183360525.png" class="confluence-embedded-image" /></span>


