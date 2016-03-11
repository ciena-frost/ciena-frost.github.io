1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Dialog - RR </span>
========================================================

Created by <span class="author"> Brian Choi</span>, last modified by <span class="editor"> Katherine Parmeson</span> on Mar 07, 2016

Description
-----------

A dialog is a window that is used to elicit a response form the user.

Behaviors
---------

-   Dialogs are 550px or 900px wide and appear at a fixed position (80px) from the top of the browser's visible area, centered horizontally.
-   <span style="color: rgb(51,51,51);">A dialog will open on top of a translucent background with a minimum of a Close button.</span>
-   <span style="color: rgb(51,51,51);">The one exception to the close button is on the About dialog, which will have an "X" in the upper right and will also allow a user to click anywhere outside the dialog to close it.</span>
-   <span style="color: rgb(51,51,51);">All dialogs will allow a user to have access to the app bar if they choose to navigate away. Navigating away from an input form will open a dialog (on top of the existing input form) warning the user of the potential for loss of data.</span>
-   Always  display a title: brief but specific text informing the user exactly what will happen.
-   Always display a call to action buttons: primary action to the right with cancel button to the left. See [buttons](Button---VI_171214699.html) for guidelines
-   Label button clearly with the action they will invoke, refrain from using Yes/No and OK/Cancel labels.

Usage guidelines
----------------

<span style="color: rgb(51,51,51);">A dialog should be used when the system needs to request information or input from the user. This could be in response to a user initiated action or a specific state of the system.</span>

<span style="color: rgb(51,51,51);">There are four categories of dialogs. The input form, confirmation, status and error dialog.</span>

 

<span style="font-size: 20.0px;line-height: 1.5;">Input form </span>

-   A input form is used when the system needs to get input from the user. This is most likely  used during the process of creating or editing an object.
-   This dialog will generally have a "Create" or "Save" button as the primary, right-most button and a "Cancel" button to the left.
-   If the user has made any changes to an input form and choose to use the app bar to navigate away they will be prompted with a second dialog warning them of possible loss of data.

 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214753/183346736.png" class="confluence-embedded-image" width="800" /></span>

<span class="s1">Confirmation dialog:</span>
--------------------------------------------

-   Are presented whenever a user is performing a potentially destructive action or when the action is time consuming to reverse. 
-   It can contain warning image, if the action performed will affect the system or is destructive.
-   Cancel button should be on focus when dialog is opened, so users will not accidentally perform the action.
-   For more guidelines see n[otifications.](https://confluence.ciena.com/pages/viewpage.action?pageId=169226076)

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214753/176942239.png" class="confluence-embedded-image" /></span><span style="color: rgb(255,0,255);">remove the visual specs from these pictures</span>

Mulit-Object confirmation dialogs:
----------------------------------

-   Are presented to users when performing certain actions that involve multiple objects. 
-   They can contain warning image, if the action performed will affect the system or is destructive. 
-   A list of affected objects will be displayed below the message. 
-   Cancel button should be on focus when dialog is opened, so users will not accidentally perform the action.

<span class="s1">
</span>

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214753/176934514.png" class="confluence-embedded-image" /></span>

Error dialogs
-------------

-   Begin the message with the name of the object being acted upon.
-   For an error dialog clearly state the nature of the error, and how the user can correct it. If appropriate provide a link for the user to quickly navigate to the object in error.
-   For more guidelines see n[otifications.](https://confluence.ciena.com/pages/viewpage.action?pageId=169226076)

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214753/176944307.png" class="confluence-embedded-image" height="250" /></span>

 

Status dialogs
--------------

-   For a status dialog, incorporate the appropriate percent complete notification indicator, [details.](https://confluence.ciena.com/display/blueplanet/Progress+Indicator)
-   For more guidelines see n[otifications.](https://confluence.ciena.com/pages/viewpage.action?pageId=169226076)
    <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214753/176942424.png" class="confluence-embedded-image" height="250" /></span>

Visual specification
--------------------

<span style="color: rgb(255,0,255);">Need general dialog specs and then anything specific...</span>

<span class="confluence-embedded-file-wrapper"><img src="assets/images/171214753/176942202.png" class="confluence-embedded-image" /></span>

 

<span class="s1">
</span>

 

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-25 15:18:16.png](attachments/171214753/176918903.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-25 15:18:41.png](attachments/171214753/176918911.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-25 15:19:11.png](attachments/171214753/176918913.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-25 15:20:21.png](attachments/171214753/176918920.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-5 11:36:57.png](attachments/171214753/176934513.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-5 11:37:10.png](attachments/171214753/176934514.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-5 11:38:44.png](attachments/171214753/176934515.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 10:36:38.png](attachments/171214753/176942156.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 11:1:45.png](attachments/171214753/176942202.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 11:23:51.png](attachments/171214753/176942239.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [dialog-full-screen-.png](attachments/171214753/176942277.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 13:7:27.png](attachments/171214753/176942365.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 13:27:13.png](attachments/171214753/176942382.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 13:49:38.png](attachments/171214753/176942418.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-12 13:51:29.png](attachments/171214753/176942424.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [dialog-error-.png](attachments/171214753/176944307.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-03-02 at 2.27.26 PM.png](attachments/171214753/183346736.png) (image/png)

Document generated by Confluence on Mar 07, 2016 12:06

[Atlassian](http://www.atlassian.com/)


