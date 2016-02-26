1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Object details overview (RR) </span>
=========================================================================

Created by <span class="author"> Christiane Campbell</span>, last modified on Feb 23, 2016

When to use:
============

An object details page packages together all details about an object in a full page of real estate.  It helps users understand the object, troubleshoot it, perform actions, edit and check out related information to the object.  <span>When a user chooses to drill into a specific object, they're focused on *that* object for object-specific work.  Capturing an object's details in a separate page allows users to use multiple screens or browser tabs, keeping this information separate from other tasks they are performing.</span>

Most objects in the system are expected to have a corresponding object details page, *unless they are so simple that all details can be conveyed effectively in an object browser*.

UX / UI components:
===================

1.  **Info Bar:** includes a clear identifier of the object, plus other key attributes (e.g. state, type)
2.  **Action buttons:** object-specific actions.  See the <span style="color: rgb(0,51,102);">[Info bar](https://confluence.ciena.com/pages/viewpage.action?pageId=169240853)</span> pattern. 
3.  **Object view canvas: **<span style="line-height: 1.42857;">canvas to view the object's details.  There may be several alternate views.  The primary view is seen upon opening the page.  If applicable, the view canvas can be further subdivided such that secondary information can be displayed through progressive disclosure and selection of what is seen in the primary view (e.g. service map and service line views, NE shelf level view, and  selected card graphical view)</span>
4.  **View selector:** UI component to display and select alternate available object views.  This gives the user the ability to switch between different views of the object, such as a graphical view, a list of parameters for the object, note<span style="color: rgb(0,51,102);">s, change logs,</span> etc. 
5.  **Related info applications**<span style="line-height: 1.42857;">: quick links to important related data in context of the object.  Opens into slide-out panel on top of the object view.  A brief visual summary may be associated to the link.</span>

<span style="line-height: 1.42857;">
</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/176927107.png" class="confluence-embedded-image" width="850" /></span>

 

The attached video illustrates an interaction design for switching between the alternate view selector and opening related info applications. 

<span class="confluence-embedded-file-wrapper"><a href="/download/attachments/171228128/detail_view.mov?version=2&amp;modificationDate=1453144473160&amp;api=v2" class="confluence-embedded-file"><img src="assets/images/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-multimedia.png" height="250" /><span class="title">detail_view.mov</span></a></span>

<span style="font-size: 24.0px;line-height: 1.25;">
</span>

<span style="font-size: 24.0px;line-height: 1.25;">
</span>

<span style="font-size: 24.0px;line-height: 1.25;">Interaction design</span>

<span style="font-size: 20.0px;line-height: 1.5;">Opening object details</span>
-------------------------------------------------------------------------------

<span>**Users navigate to object details pages in multiple ways including from an object browser, global search results, and even from direct context of another objec**</span>t.  

 

**Match the web browser tab's title to the Identifier title in the Infobar.  **This will be the most effective way to differentiate the tab when many are opened<span style="line-height: 1.42857;">.</span>

<span style="line-height: 1.42857;"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/176927104.png" class="confluence-embedded-image" width="850" /></span></span>

 

**Object details are opened into a new web browser tab, allowing **<span>**the user to continue with the previous page in parallel.**  When navigating from an object browser, it's very likely that users will want to conserve the list that they've gone through pains to search/filter/sort in order to come back to it as part of their overall work.  This also corresponds to how typical NMS tasks are performed today, where viewing details of an object maintains the original list.</span>

Users can also open many object details pages at once, each into separate web browser tabs.  **This avoids pogo-sticking back and forth between the object browser and various object details pages when needing to view certain details across a subset of objects.**  The "page parking" interaction method effectively allows users to navigate amongst details without losing sight of their original list context.

**Opening new object detail tabs will follow the web browser's conventions.  **Since most browsers allow some form of user customization to determine new tab placement and focus, Blue Planet will folllow these conventions.

<span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/175016470.png" class="confluence-embedded-image" width="850" /></span></span>

 

**
**

**Display key object summaries & attributes in the info bar directly beneath the object identifier. ** This way, the overall object's context is always in view, even when viewing data in related info links.  Specific object data shown here will typically overlap with the primary/secondary attributes visible in a list object browser's small view.

For example, an NE's key details may include: alarm counts, NE type & version, IP address, MAC Address, number of shelves.

<span style="color: rgb(255,0,255);"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/175016477.png" class="confluence-embedded-image" width="850" /></span><span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"> </span></span></span>
<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"> </span></span></span>
<span style="color: rgb(0,0,0);">**All data displayed & summarized in object details pages is dynamically updated.**  This way, the user will learn that they reliably reflect the latest state of the object at all times.</span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">**
**</span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">Object views</span></span>
--------------------------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">
</span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">**Display the primary view of the object in the primary view canvas upon opening.**  As much as possible, this should be a graphical view of the object that aims to help the user quickly understand it. The right graphics can convey a lot of meaning quickly, as opposed to having the user parse through text and mentally assemble the object.  For example, a service's primary view may be a map of the service with accompanying subway line view, whereas the full set of service parameters may be an alternate view.</span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">
</span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">
</span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">**Offer more than one view for an object that may be necessary to perform different user tasks.**  Users may alternate between these views as needed from the primary view canvas using the view selector.  <span>For example, an alarm detail might display the fields & values of the full record by default, but also offer a graphical span view or affected network view for the user to better troubleshoot the alarm.  Other example alternate views could be things such as user notes, change histories.</span></span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span>
</span></span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span><span style="color: rgb(0,0,0);">See the object detail meta-type patterns for descriptions of suggested views for different object types: [Connections](https://confluence.ciena.com/pages/viewpage.action?pageId=171228072), [Equipment](https://confluence.ciena.com/pages/viewpage.action?pageId=171228069), [Events/Alarms](https://confluence.ciena.com/pages/viewpage.action?pageId=171228079), [Profiles/accounts](https://confluence.ciena.com/pages/viewpage.action?pageId=171228076).</span></span></span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span><span style="color: rgb(0,0,0);"> </span></span></span></span></span>

**
**

**Users can open alternate views into a new web browser tab/window.**  Therefore, these buttons must behave as web-links such that the user can invoke the web browser's menu for hyperlinks.

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span><span style="color: rgb(0,0,0);">
</span></span></span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">**
**</span></span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">**Make all object parameters consistently accessible as an alternate view of the object.**  </span>Typically, there are more object attributes than can fit in the Infobar. </span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">For example, key attributes for a service may include: State/Reason, Service type, Client rate, Protection type, and Customer.  However, many more attributes describe the service in full detail, including all attributes applied to provision the service in the first place.  This diagram shows a fairly basic example of a mesh restorable control plane service's attribute details.</span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/181082160.png" class="confluence-embedded-image" width="850" /></span></span>

<span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"> </span></span></span>
<span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"> </span></span></span></span>

<span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);"><span style="color: rgb(255,0,255);">
</span></span></span></span>

**Users can set an object into "Edit" mode to edit attributes inline of its object details.**   This can either be accessed directly from the parameter view (edit button) or from the Actions buttons, which opens the parameter view in edit mode. <span style="color: rgb(0,0,0);">The subset of fields that can be edited become editable. Once happy with the changes, the user explicitly saves ("Save changes") which simultaneously exits the "Edit" mode.  In this case, no separate dialog is opened and edits can be seen in context of the wider object details.</span>

<span style="color: rgb(255,0,255);">&lt;see user feedback for when to use confirmation dialog for.  ++ put the stuff from the connection meta-type into the overview pattern since it applies to all object types.  </span>

<span style="color: rgb(255,0,255);">progress indication next to the button.  If successful, goes away and edit button re-enabled. Other users (or this user in another tab looking at the same object) see the same thing.</span>

<span style="color: rgb(255,0,255);">If it fails, notification to user (see notification pattern) – values go back to what they are actually in the network.</span>

<span style="color: rgb(255,0,255);">&lt;need guideline to figure out what falls into this category of simple edits vs. deeper, multi-NE changes – e.g. regroom&gt;</span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Any object may have a "Notes" view **to view/add notes *against* the object.****  See the [Notes (IP)](https://confluence.ciena.com/pages/viewpage.action?pageId=176919589) pattern for a more detailed description.  </span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Some object views allow the user to progressively disclose ("drill-in") more detailed specifics about a relevant part of the overall object.** For example, the primary view of a service is a map of the service's NEs and links, but users can drill in to a more detailed view of a path of the service.  This secondary view is optional.  See the object detail meta-type patterns for descriptions where secondary views are applicable.</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Secondary views are drawn based on what is selected in the primary view.**  Changing the selection in the primary view, therefore, entirely changes the contents of the secondary view.  For example, if the user selects a path in the service map, the corresponding subway line view appears as a secondary view.</span><span style="color: rgb(0,0,0);"> </span>

<span style="color: rgb(0,0,0);">Note that it may not always make sense to auto-select something in the primary view to populate the secondary view.  For example, in an NE shelf level view, there is no particular object that makes sense to select by default, in which case instruction text can always be displayed in its stead to help users discover the interface (e.g. "Click card for larger view").</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Graphical views are interactive and reflect any changes dynamically.**  Users can select objects represented within a view in order to interact with them.  Their k</span><span style="color: rgb(0,0,0);">ey information is displayed in a Selection details pod, accompanied by a set of contextual actions that are relevant from this context.  Generally, this will include an </span><span style="color: rgb(0,0,0);">identifier of the selected object, its type, state, key attributes, key actions, and a link to open its own corresponding object details page.</span>

<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">The most recently selected item is represented in the Selection details pod.  If no selection has been made, the selection details pod may not even be visible, or it may be visible with simple instruction text to help the user discover the interface (e.g. "Click an object to view details").</span></span>

 

Accessing the object's related information
------------------------------------------

**Users can access relevant related information on the object via quick links.**  These provide value-add correlations between the object in view and other related items in the system to support different user tasks.  For example, when viewing a service, related information may include its alarms, other services that depend on it, other services/infrastructure that it depends on, performance data, historical tests, etc.  Generally, these links could be to any operationally useful "drill-across" query to related items in the DB, which may evolve with customer demand.

These related info buttons are always visible from the object details view.  If brief summary data can be helpful to the user, consider including some data as information scent of the related data.  For example, alarms can be summarized using the traditional alarm count/color roll-up.  When clicked, a panel slides out *over the object view canvas* to display the related information. 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/175017347.png" class="confluence-embedded-image" width="850" /></span>

 

Update the info bar to include a title for the displayed content and a navigation button to return to the main view canvas.  This picture illustrates the intent (not final visual design).

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/175017306.png" class="confluence-embedded-image" width="850" /></span>

<span>**
**</span>

<span>**Users can also open these related information panels into a new web browser tab/window.**  </span>Note that related information opened into a new web browser tab behaves as if the user had literally torn off this content to temporarily view side-by-side with other content.

 

**Users can click on other available related information without first going back to the main object details screen.** The other related information is listed and available in view to open directly.** **

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171228128/175017348.png" class="confluence-embedded-image" width="850" /></span>

 

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-16 13:38:38.png](attachments/171228128/171231322.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-22 16:10:54.png](attachments/171228128/171236246.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-22 16:54:7.png](attachments/171228128/171236285.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-22 16:57:15.png](attachments/171228128/171236289.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-5 10:35:16.png](attachments/171228128/171240562.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-5 10:35:51.png](attachments/171228128/171240564.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-5 10:37:4.png](attachments/171228128/171240566.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-5 11:37:41.png](attachments/171228128/171240668.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-5 11:46:29.png](attachments/171228128/171240688.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-6 11:29:24.png](attachments/171228128/171241746.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-6 11:33:8.png](attachments/171228128/171241750.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-6 11:34:47.png](attachments/171228128/171241756.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-6 13:44:25.png](attachments/171228128/171241946.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-6 13:52:56.png](attachments/171228128/171241964.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-12 16:48:46.png](attachments/171228128/175016465.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-12 16:53:4.png](attachments/171228128/175016470.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-12 16:58:33.png](attachments/171228128/175016477.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-12 17:10:29.png](attachments/171228128/175016506.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-13 10:57:0.png](attachments/171228128/175017306.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-13 11:3:44.png](attachments/171228128/175017326.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-13 11:9:26.png](attachments/171228128/175017346.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-13 11:9:38.png](attachments/171228128/175017347.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-13 11:10:2.png](attachments/171228128/175017348.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-18 10:34:49.png](attachments/171228128/175021861.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [detail\_view.mov](attachments/171228128/175022379.mov) (video/quicktime)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [detail\_view.mov](attachments/171228128/175022374.mov) (video/quicktime)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-1 10:13:41.png](attachments/171228128/176926691.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-1 13:4:14.png](attachments/171228128/176927104.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-1 13:6:30.png](attachments/171228128/176927107.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-23 13:0:11.png](attachments/171228128/181082160.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


