1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Notifications (RR) </span>
===============================================================

Created by <span class="author"> Christiane Campbell</span>, last modified by <span class="editor"> Katherine Parmeson</span> on Feb 23, 2016

When to use
===========

Several notification patterns are used in Blue Planet, depending on the context and type of notification the user needs.  In order to allow for a more immersive, task-focused experience, the amount of in-your-face notification should be kept to a minimum. The preferred method for notifications is in context with what the user is actively working on. If there is a chance notification on a page may be missed then there should be a secondary notification, of which there are three methods available. Likewise if there is a reasonable expectation that the user will be able to see the in context notification do not use a secondary notification. Our goal is to provide feedback in context, and not force users to take action on a notification when it is not necessary. 

**Some actions *initiated by the user*** may not provide a sufficient confirmation or failure indication within the page the user is on, these should utilize the **transient message**. For example, changing a parameter on a service from a list browser may not be visible to the user if they are displaying the small data view. The **transient message** will provide <span class="inline-comment-marker" data-ref="a018978f-2539-4097-bd6c-2812937bce9d">validation that the attribute was updated</span> or failed to update. Instructional information can also be provided via a **transient message**.  Some pages can take advantage of this format to show next steps or indicate an activity mode a user may be in. <span class="inline-comment-marker" data-ref="f8e49d8a-3b7b-4343-b11a-32e3edde9948">For example in OnePlanner, the on-page instructional text for dragging the columns to make groups could be better displayed in a </span>**<span class="inline-comment-marker" data-ref="f8e49d8a-3b7b-4343-b11a-32e3edde9948">transient message</span>**<span class="inline-comment-marker" data-ref="f8e49d8a-3b7b-4343-b11a-32e3edde9948"> that can be dismissed by the user.</span> 

**<span class="inline-comment-marker" data-ref="4ffb6c6b-7585-4e9d-89cb-ed1eb941be82"><span class="confluence-embedded-file-wrapper"><img src="assets/images/169226076/176940846.png" class="confluence-embedded-image" /></span></span>**

**<span class="inline-comment-marker" data-ref="4ffb6c6b-7585-4e9d-89cb-ed1eb941be82">T</span><span class="inline-comment-marker" data-ref="4ffb6c6b-7585-4e9d-89cb-ed1eb941be82">ransient messages</span>**<span class="inline-comment-marker" data-ref="4ffb6c6b-7585-4e9d-89cb-ed1eb941be82"> should also be used as a secondary notification to inform the user of failure even when there is an on page indicator, if<span> there is a reasonable chance that the user may miss the visible status on the page itself.  </span></span>

**Activities that run in the background, <span class="inline-comment-marker" data-ref="64541db7-644f-4d3c-bd0f-dd237584f967">may take longer than a minute</span>, or require a follow-up action by the user**, should appear in the **notification badge/tray.** This will reduce the occurrence of interrupting the users workflow as they have likely moved on to another task. Most successful activities will provide an entry in the **notification tray, ** <span class="inline-comment-marker" data-ref="e587f1ee-c914-4474-b3df-059bacc92720"><span class="inline-comment-marker" data-ref="8b845880-8ee4-4308-8ce1-bda110ca79bc">but will not increase the badge count</span>.  An example of a successful action that will increase the badge count is when a report that has been running in the background and has completed successfully. All failed background activities and those requiring follow-up action by the user will increase the badge count and likewise appear in the tray.</span>

<span style="color: rgb(0,0,0);">**<span style="color: rgb(0,51,102);"><span style="color: rgb(51,51,51);"><span class="inline-comment-marker" data-ref="83b134cf-4be6-4bc8-be43-6d57464872e4">Error</span> dialogs</span></span>**<span style="color: rgb(0,51,102);"><span style="color: rgb(51,51,51);"> appear for important or critical errors that may block a users progress. <span style="color: rgb(255,0,255);"><span class="inline-comment-marker" data-ref="bcec9de5-3e28-4628-9eb2-5881260206a9">For example...</span> </span></span></span><span style="color: rgb(51,51,51);"><span style="color: rgb(0,51,102);"> </span></span></span>

**Warning, and confirmation dialogs** appear when the user has requested a potentially destructive change.  Sometimes they are aware of the destructive nature of the change and this provides them a way to back out of it with no harm done.  In other cases, they may be unaware of the potential for damage. In these cases, the dialogs should describe the change and its potential impacts and give the user a choice to continue with the request or not.

**Status dialogs** should appear during multi-step processes that don't required interaction by the user at each step. For example during provisioning and deprovisioning of services. Provisioning a service can fail at multiple points along the way. It is important for the user to see the progress and at what point a failure has occurred.

Notification format table
=========================

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"> </th>
<th align="left">Instant /<br />
In Context</th>
<th align="left">Transient</th>
<th align="left">Badge</th>
<th align="left">Dialog</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">network element enroll</td>
<td align="left">Yes</td>
<td align="left"><p><span style="color: rgb(255,102,0);">Secondary, </span><span style="color: rgb(255,102,0);">On failure</span></p></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">network element de-enroll</td>
<td align="left"><span class="inline-comment-marker" data-ref="fd3fa9fc-5900-425d-8e4c-cd30e19c4df4">Yes</span></td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">network element upgrade</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">network element backup</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">network element restore</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">network element cut-out (remove endpoint)</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">network element cut-in (add endpoint)</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">*service/infrastructure provision</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">Yes, status dialog</td>
</tr>
<tr class="odd">
<td align="left">service/infrastructure deprovision</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">Yes, status dialog</td>
</tr>
<tr class="even">
<td align="left">service/infrastructure edit/actions from details (simple edits)</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">service/infrastructure edit from list browser (simple edits)</td>
<td align="left">Yes</td>
<td align="left">Yes</td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">service/infrastructure actions from list browser</td>
<td align="left">Yes</td>
<td align="left">Yes</td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">user create</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">user edit</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">user delete</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">acknowledge/clear alarm</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left"><em>run report</em></td>
<td align="left">No</td>
<td align="left">No</td>
<td align="left">Always increase badge count</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left"><em>run test</em></td>
<td align="left">Yes</td>
<td align="left">No</td>
<td align="left">Always increase badge count</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left">profile manager</td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">reset card</td>
<td align="left">No</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, O</span>n failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left"><em>other delete actions (important)</em></td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left"><em>deleting a user session</em></td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left"><em>tenant create</em></td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left"><em>tenant edit</em></td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left">No</td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left"><em>tenant delete</em></td>
<td align="left">Yes</td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left"><em>SLAT commands</em></td>
<td align="left"><p><span>Yes</span></p></td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left"><em>network config setup (dynamic LSP, control plane...)</em></td>
<td align="left"><span>Yes</span></td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left"><em>system - admin configuration (security, server setup)</em></td>
<td align="left"><span>Yes</span></td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><span>No</span></td>
<td align="left">No</td>
</tr>
<tr class="odd">
<td align="left"><em>dialog based workflow</em></td>
<td align="left"><span>Yes</span></td>
<td align="left"><span style="color: rgb(255,102,0);"><span style="color: rgb(255,102,0);">Secondary, </span>On failure</span></td>
<td align="left"><p>Success - no increase in badge count, show in tray</p>
<p>Failure - increase badge count and in tray</p></td>
<td align="left">No</td>
</tr>
<tr class="even">
<td align="left">Informational message</td>
<td align="left"> </td>
<td align="left">Yes</td>
<td align="left"> </td>
<td align="left"> </td>
</tr>
</tbody>
</table>

**\* ** Provisioning a service is a special case, the application will start by providing a notification in the form of a dialog which will update the user with the status as it progresses. If the user chooses to close the dialog they will be notified if a failure occurs with a transient message and an increase in badge count value. If the user closes the transient message, the badge count will decrease. Likewise if they open the notification tray, the transient dialog will also close. **The user will not be required to dismiss the same failed notification twice.**  If the provisioning succeeds after the user has closed the status dialog a message will appear in the notification tray, but the badge count will not increase.

**\*\*** Actions listed in italics have not yet been designed so may change notification patterns at that time.

UX/UI components
================

Transient messages
------------------

1.  **Thin, color coded bar** (informational, success, failure)
2.  **Simple messag**e - providing enough information to give the user a good picture of the situation
3.  **<span class="inline-comment-marker" data-ref="c7f3fcae-0a5b-4dc5-a08f-566b19cac0ef">Detail page</span>**  link for the object of importance
4.  **"X"** to allow the user to clear the message

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/169226076/176923945.png" class="confluence-embedded-image" height="150" /></span>

Badge and notification tray
---------------------------

1.  <span style="color: rgb(0,0,0);">**Tray** contains items the user may need to take action on</span>
2.  **The** **badge** is the** **numeric representation of the number of failed/important notifications that have been added <span class="inline-comment-marker" data-ref="dbde1936-3e87-4908-8f06-c88c6dce8b35">since the tray was last opened</span>
3.  **Clear all** notifications in one step
4.  **View the** <span class="inline-comment-marker" data-ref="807787fd-111c-4204-b226-1bc363d141b3">**history** of cleared notifications</span>, one week back
5.  **Detail page** link for the object of importance

<span class="inline-comment-marker" data-ref="eecd1775-a38d-49f2-82a7-69fd63e7a3a4"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/169226076/176923965.png" class="confluence-embedded-image" width="500" /></span>
</span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="inline-comment-marker" data-ref="eecd1775-a38d-49f2-82a7-69fd63e7a3a4">Notification dialogs</span>
---------------------------------------------------------------------------------------------------------------

1.  **Dialog: **550px wide and appear at a fixed position (80px) from the top of the browser's visible area, centered horizontally
2.  **Title: **brief but specific text informing the user exactly what will happen
3.  **Progress indicator** if necessary based on context (see [progress indicators](https://confluence.ciena.com/display/blueplanet/Progress+indicators+-+IP)).
4.  **Call to action buttons: **primary action to the right with cancel button to the left. If the action can be destructive, the focus will be on the cancel button

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/169226076/181081995.png" class="confluence-embedded-image" width="500" /></span>
=====================================================================================================================================================================================

Interaction design
==================

Transient messages
------------------

-   If the process completes successfully, the transient dialog will close itself after 5 seconds.
-   If the process fails the transient message should remain open until the user closes it.
-   Informational dialogs may have a close option or remain open while a user is in a certain state/mode.
-   Transient messages <span class="inline-comment-marker" data-ref="479d8f99-a7c0-4c66-9e4b-2939255e1c60">may become stacked</span> if the user does not close them.
-   Transient messages should have a link to provide additional data for failed processes.
-   To view design specifications, [click here.](https://confluence.ciena.com/display/blueplanet/Transient+Messages+-+IP)

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/169226076/181081996.png" class="confluence-embedded-image" width="900" /></span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Badge notifications
-------------------

-   The badge number will increase when a failure notification is ready for the user.
-   Clicking the badge will show a list of any notifications not previously cleared by the user.
-   Once the user has opened the notifications panel, the badge on the app bar will go away. <span class="inline-comment-marker" data-ref="87523911-008e-40d7-ba94-0c155ea0d06e">Assuming when opened, a user will read all new notifications.</span>
-   Notifications will be <span class="inline-comment-marker" data-ref="b4d801ef-6ada-48fb-a226-d6e1dff9ac74">sorted with the most recent event at the top of the list.</span>
-   The user will be able to clear individual notifications or all at once. 
-   <span class="inline-comment-marker" data-ref="6c46e5b0-3ab3-44c0-93bf-31ac4a04768b">The user will have the ability to view the history of all cleared notifications.</span>
-   Since these notifications require follow-up by the user, clicking on them will open the appropriate page in a new tab for the user to perform the appropriate action.
-   <span style="line-height: 1.42857;">To view design specifications, </span>[click here.](https://confluence.ciena.com/display/blueplanet/Badge+notification++-+IP)

 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/169226076/181081993.png" class="confluence-embedded-image" width="900" /></span>

 

 

<span class="inline-comment-marker" data-ref="5306aa64-a920-4f54-9e8e-f029e3528337">Notification dialogs</span>
---------------------------------------------------------------------------------------------------------------

-   Use for error, confirmation and status dialogs.
-   Begin the message with the name of the object being acted upon.
-   **For an error dialog** clearly state the nature of the error, and how the user can correct it. If appropriate provide a link for the user to quickly navigate to the object in error.
-   **For a confirmation dialog** clearly state the consequence if the action continues. Do not use the phrase "Are you sure..." 
-   **For a destructive action** the "Cancel" button should have the focus and the destructive button should be clearly labeled with the action it will perform.
-   **For a status dialog** incorporate the appropriate percent complete notification indicator, [click here.](https://confluence.ciena.com/display/blueplanet/Progress+Indicator)
-   Label button clearly with the action they will invoke, refrain from using Yes/No and OK/Cancel labels.
-   To view confirmation design specification, [click here.](Dialog---RR_171214753.html) 

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-11-27 10:51:13.png](attachments/169226076/169240767.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-18 at 8.52.07 AM.png](attachments/169226076/175022006.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.25.02 AM.png](attachments/169226076/175023807.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.25.14 AM.png](attachments/169226076/175023808.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.26.27 AM.png](attachments/169226076/175023815.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.27.51 AM.png](attachments/169226076/175023816.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.28.59 AM.png](attachments/169226076/175023819.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.41.21 AM.png](attachments/169226076/175023833.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-19 at 10.41.38 AM.png](attachments/169226076/175023834.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [modal-examples.png](attachments/169226076/175026586.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-22 at 2.37.05 PM.png](attachments/169226076/175028735.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-25 at 9.25.29 AM.png](attachments/169226076/176918392.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-25 at 10.46.21 AM.png](attachments/169226076/176918601.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-25 at 10.46.36 AM.png](attachments/169226076/176918602.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [transient-example.png](attachments/169226076/176923945.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [badge-example.png](attachments/169226076/176925221.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [badge-example.png](attachments/169226076/181082004.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-02-11 at 5.50.51 AM.png](attachments/169226076/176940418.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-02-11 at 8.41.55 AM.png](attachments/169226076/176940822.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image001.png](attachments/169226076/176940846.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-02-15 at 7.51.24 AM.png](attachments/169226076/176943492.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-02-15 at 7.51.46 AM.png](attachments/169226076/176943493.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [badge v2.png](attachments/169226076/181082034.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [conf-dialog-strength.png](attachments/169226076/181081994.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [modal dialog conf v2.png](attachments/169226076/181082028.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [transient v2 example.png](attachments/169226076/181081996.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [badge-example.png](attachments/169226076/176923965.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [modal dialog conf v2.png](attachments/169226076/181081995.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [badge v2.png](attachments/169226076/181081993.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


