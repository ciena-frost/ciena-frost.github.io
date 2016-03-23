1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Text field - RR </span>
============================================================

Created by <span class="author"> Brian Choi</span>, last modified by <span class="editor"> Sonya Thornley</span> on Mar 23, 2016

PORTED to <a href="https://github.com/ciena-frost/ciena-frost.github.io" class="uri" class="external-link">https://github.com/ciena-frost/ciena-frost.github.io</a>
===================================================================================================================================================================

Description
-----------

A text field is used to accept user-entered text.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183368970.png" class="confluence-embedded-image" /></span>

 

Behaviors
---------

-   <span style="color: rgb(0,0,0);">A text field is a rectangular area in which the user enters text or modifies existing text. </span>
-   <span style="color: rgb(0,0,0);">Entered text is left aligned</span>
-   <span style="color: rgb(0,0,0);">Numeric values entered into a text field should be right aligned.</span>
-   <span style="color: rgb(0,0,0);">A text field displays the characters that are typed into the field. See [password input field](Password-input-field---RR_171214720.html) if the characters need to be hidden.</span>
-   <span style="color: rgb(51,51,0);">A text field can be validated to provide error state and error text below the text field.</span>
-   <span style="color: rgb(51,51,0);">For a text field that is already populated with text, selecting in the text field will highlight the whole contents.</span>
-   <span style="color: rgb(51,51,0);">An X is displayed at the end of the text field to clear the inputted characters</span><span style="color: rgb(51,51,0);">.</span>

See [text area](183356860.html) for a text field with more than one row.

See [auto-complete text field](https://confluence.ciena.com/display/blueplanet/Auto-complete+text+field) to provide suggestions.

Usage guidelines
----------------

<span style="color: rgb(0,0,0);">**Be sure to perform appropriate error checks when you receive user input.** </span>If the appropriate text is not provided, the field should display an error state and provide short appropriate text as to the cause of the error. <span style="color: rgb(0,0,0);">In most cases, the appropriate time to check the data in the field is when the user clicks outside the field or there is a loss of focus (presses the Return, Enter, or Tab key).</span>

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183354295.png" class="confluence-embedded-image" /></span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Display a label with a text field.** A label helps users understand what type of information should be entered. Labels should be placed to the left or on top of the text field. See [Text](https://confluence.ciena.com/pages/viewpage.action?pageId=171214731). </span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">**Display units of measure to the right of the text field.** See [Text](https://confluence.ciena.com/pages/viewpage.action?pageId=171214731) and [Forms](https://confluence.ciena.com/pages/viewpage.action?pageId=171233653).</span>

**<span><span style="color: rgb(0,0,0);">
</span></span>**

**<span><span style="color: rgb(0,0,0);">Prompt text can optionally be displayed in the field and should be used sparingly. </span></span>**<span style="color: rgb(0,0,0);"><span style="color: rgb(51,51,0);">See </span></span><span style="color: rgb(0,0,0);">[Text](https://confluence.ciena.com/pages/viewpage.action?pageId=171214731)<span style="color: rgb(51,51,0);"> for prompt text.</span></span>

**<span><span style="color: rgb(0,0,0);"> </span></span>**<span><span style="color: rgb(0,0,0);"><span style="color: rgb(255,0,255);"><span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183354312.png" class="confluence-embedded-image" /></span></span></span></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">**Ensure that the length of the text field comfortably accommodates the length of the expected input.** The length of a text field helps users gauge whether they’re inputting the appropriate information. See [Forms](https://confluence.ciena.com/pages/viewpage.action?pageId=167230064) for appropriate size if being used in a form.</span></span>

 

### <span style="color: rgb(0,0,0);font-size: 20.0px;font-weight: normal;">Visual specification</span>

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214713/183369007.png" class="confluence-embedded-image" /></span>

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 11:4:51.png](attachments/171214713/171239372.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 14:44:10.png](attachments/171214713/171239715.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 14:45:31.png](attachments/171214713/171239718.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-4 14:46:24.png](attachments/171214713/171239720.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [text-box-spec.png](attachments/171214713/171241800.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [text-box-spec2.png](attachments/171214713/171241808.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:8:53.png](attachments/171214713/183354280.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:10:7.png](attachments/171214713/183354286.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:11:0.png](attachments/171214713/183354288.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:12:36.png](attachments/171214713/183354292.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:12:50.png](attachments/171214713/183354293.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:13:34.png](attachments/171214713/183354295.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:25:47.png](attachments/171214713/183354308.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-11 13:28:7.png](attachments/171214713/183354312.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-16 20:4:1.png](attachments/171214713/183360525.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-16 20:4:54.png](attachments/171214713/183360527.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-17 13:50:40.png](attachments/171214713/183361568.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-17 13:51:57.png](attachments/171214713/183361573.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-17 13:52:31.png](attachments/171214713/183361575.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-17 13:54:52.png](attachments/171214713/183361582.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 10:59:3.png](attachments/171214713/183368874.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 11:50:53.png](attachments/171214713/183368970.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 11:52:47.png](attachments/171214713/183368972.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 11:53:2.png](attachments/171214713/183368973.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 12:8:9.png](attachments/171214713/183368999.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 12:9:30.png](attachments/171214713/183369002.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 12:11:14.png](attachments/171214713/183369005.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 12:15:41.png](attachments/171214713/183369006.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-3-23 12:16:9.png](attachments/171214713/183369007.png) (image/png)

Document generated by Confluence on Mar 23, 2016 13:23

[Atlassian](http://www.atlassian.com/)


