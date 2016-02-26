1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Application bar (RP) </span>
=================================================================

Created by <span class="author"> Christiane Campbell</span>, last modified by <span class="editor"> Sonya Thornley</span> on Feb 04, 2016

When to use
===========

Always.  The application bar is a pattern that is ubiquitous to every page in Blue Planet.  Its primary function is as an always-present navigation tool for the user.

UI components
=============

1.  **Logo/Home link:** click to return to landing page. Also displays branding.
2.  <span style="color: rgb(0,0,0);">**Network menu:** opens menu of network-related applications (e.g. service browsing/provisioning, alarms)</span>
3.  <span style="color: rgb(0,0,0);">**System menu:** opens menu of Blue Planet system related applications (e.g. NMS health, security settings)</span>
4.  **Global search button:**<span style="color: rgb(0,0,0);"> opens a keyword search field to search for objects globally across the system</span>
5.  <span style="color: rgb(0,0,0);">**Notification button:** <span>opens notification tray (see</span><span> </span><span style="color: rgb(51,102,255);">[Notifications](https://confluence.ciena.com/pages/viewpage.action?pageId=169226076)</span><span style="color: rgb(51,102,255);"> </span><span>). B</span>adge indicates new notifications.</span>
6.  <span style="color: rgb(0,0,0);">**User menu:** displays currently logged-in user. Click to open menu of user-specific actions/applications.</span>

 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167240596/176931110.png" class="confluence-embedded-image" width="850" /></span>

Interaction design  
====================

Navigating to specific applications
-----------------------------------

Navigation to the various deployed applications is available in the menus on the application bar.  These will include:

-   **Network: **applications used to interact with the managed network
-   **System:** applications to manage the Blue Planet system itself
-   **User:** applications specifically for the logged-in user (e.g. change pwd, preferences, logout)

Note: If 3rdparty/OEM applications are deployed into Blue Planet, an additional menu can be added to accommodate them next to the Network & System menus (name tbd).

**
**

**Menus can be further laid out into columns to help categorize applications**.  The goal of this categorization is to help the user find what they're looking for by matching their mental model as much as possible.  For example, the Network menu can be subdivided into applications related to Resources, Services, and Troubleshooting.  The System menu may be organized into Configuration, System health, and Security applications. The number of columns can vary depending on the solution.

<span style="color: rgb(255,0,255);">
</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167240596/176931134.png" class="confluence-embedded-image" width="850" /></span>

 

**Extra explanatory text may be added below application titles as a form of information scent** to help users know what to expect when they click the link.  This is especially helpful when application names are ambiguous due to different meanings in the industry or between customers.  A classic example is with the word "Service" which is often overloaded in the industry.  However, if the application name is clear (hopefully most cases), then there is no need for extra descriptive text.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/167240596/176932599.png" class="confluence-embedded-image" /></span>

<span>**
**</span>

<span>**Menus will only show what a user has permission to see** (e.g. based on security privileges).  It might even be possible to let users/administrators customize what they see in their menus to match their defined operational role within their company.  </span>Any management of this beyond security is tbd and outside the scope of this page.

**
**

**Clicking on menu items will replace the current page by default.**  However, the ability to open into a new tab or window will be ubiquitous throughout the application to facilitate using multiple screens and flexibly organizing screens to suit the user's workflow.  The option to do so will be clearly & consistently visible to the end user.  For more details, see <span style="color: rgb(51,102,255);">Links.</span>

Global search
-------------

Clicking the global search icon opens the global search keyword input field, allowing the user to search for and directly navigate to a page that's of interest.  For a description of this pattern, see <span style="color: rgb(51,102,255);">Global search.</span>

<span style="line-height: 1.42857;">Notifications</span>
--------------------------------------------------------

<span style="line-height: 1.42857;">The system alerts users with various events that are of specific interest them, relating to their own activities in Blue Planet.  This includes notifications of errors, activity progress/completion, next steps for long-running activities, etc.  They are accessible via the application bar's notification tray.  New notifications are reinforced visually with a badge on the notification icon.  For more details, see <span style="color: rgb(51,102,255);">[<span style="color: rgb(51,102,255);">Notifications</span>](https://confluence.ciena.com/pages/viewpage.action?pageId=169226076).</span></span>

<span style="line-height: 1.42857;"><span style="color: rgb(51,102,255);">
</span></span>

<span style="color: rgb(51,51,0);font-size: 20.0px;">User</span>

<span style="color: rgb(51,102,255);font-size: 20.0px;"> </span>The user icon displays the name of the currently logged in user. Clicking on the user menu icon will open a menu. For more details, see [Login/Logout](169228732.html).

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-11-30 9:55:9.png](attachments/167240596/171213187.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-3 9:41:27.png](attachments/167240596/171216983.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar.png](attachments/167240596/171218476.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar2.png](attachments/167240596/171217466.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar3.png](attachments/167240596/171217219.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar2.png](attachments/167240596/171218478.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar4.png](attachments/167240596/171217565.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar.png](attachments/167240596/171218956.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar2.png](attachments/167240596/171216995.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar.png](attachments/167240596/171219037.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-4 14:57:0.png](attachments/167240596/171219022.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-4 14:57:27.png](attachments/167240596/171219024.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-4 14:57:45.png](attachments/167240596/171219025.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-4 14:59:10.png](attachments/167240596/171219028.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbar.png](attachments/167240596/171216987.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-3 13:54:17.png](attachments/167240596/176931110.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-3 13:56:47.png](attachments/167240596/176931134.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [appbarfinal.png](attachments/167240596/176932599.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


