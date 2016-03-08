1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Object browser overview (RR) </span>
=========================================================================

Created by <span class="author"> Christiane Campbell</span>, last modified on Feb 22, 2016

-   [](#Objectbrowseroverview(RR)-)
-   [When to use](#Objectbrowseroverview(RR)-Whentouse)
-   [UX/UI Components](#Objectbrowseroverview(RR)-UX/UIComponents)
-   [Interaction design](#Objectbrowseroverview(RR)-Interactiondesign)
    -   [Opening the object browser](#Objectbrowseroverview(RR)-Openingtheobjectbrowser)
    -   [Sorting](#Objectbrowseroverview(RR)-Sorting)
    -   [No (visible) paging!](#Objectbrowseroverview(RR)-No(visible)paging!)
    -   [Dynamic updates ](#Objectbrowseroverview(RR)-Dynamicupdates)
        -   [Viewing change details](#Objectbrowseroverview(RR)-Viewingchangedetails)
        -   [Freezing contents temporarily](#Objectbrowseroverview(RR)-Freezingcontentstemporarily)
    -   [Contextual actions](#Objectbrowseroverview(RR)-Contextualactions)

When to use
===========

When users need to retrieve, display, act upon, or edit sets of similar objects, they do so via an object browser.  Main tasks:

-   Retrieve a set of objects based on a set of criteria
-   View the set of objects and a subset of their attributes
-   Sort the set of objects by one or more of their attributes
-   Filter the object instances so what is displayed is a reduced set of the original scope
-   Select one or more object instances from the displayed set
-   View attribute details for a specific object instance
-   Edit an object's attributes
-   Perform simple actions on an object (e.g.  acknowledge alarms, run a test, lock, delete, clear
-   Open additional tools (screens, dialogs, etc.) to perform complex tasks on the selected object (for example, related objects, more detailed views, relationships, higher or lower layer associations, additional metrics, etc.)

There are two main formats of object browsers:

1.  a **list** format (see [List object browser (RR)](167240510.html))
2.  a **table** format (see [Table object browser (RR)](167240513.html))

Determine which to use based on the object type and the main usage scenarios for these objects.  The "When to use" sections for each browser type describe what you should consider in order to choose the most suitable format.

UX/UI Components
================

1.  **Info Bar:** includes objects, list context description, list counts, and optional summary information for the objects in the list
2.  **Keyword search box:** sets the initial context of the browser based on supplied keyword(s)
3.  **App-level actions (optional):** non-contextual actions the user can take related to this object type
4.  **Filter pane:** displays all available filters to further refine the set. Collapsible by the user.
5.  **Sort controls**: multiple-attribute sort on attributes of objects in the list**
    **
6.  **Retrieved results**:  list of results displayed with primary, secondary, tertiary attributes organized into "swim lanes" within each row.  Most important information is highlighted and located in leftmost & rightmost "swim lanes" to facilitate scanning in the list.  Accommodates differences between displayed data for different rows in the table.
7.  **Action controls**:  applicable actions bar shifts up into the view upon selection of one or more rows in the list.  Actions determined and enabled/disabled based on selections.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/171226249.png" class="confluence-embedded-image" width="700" /></span>

Interaction design
==================

Opening the object browser
--------------------------

**NMS users are typically very task-focused and searching for something in particular**, rather than browsing through *everything*.  So, even before opening an object browser, the user typically knows something about the objects for which they are searching.  Filtering is also a critical interaction pattern intended to help users narrow their results to find a specific object quickly, or a set of objects relevant to the task at hand.   

Users will be able to open an object browser, thus **setting its context** by:

-   opening the object browser from another object's context (e.g. open list of services from a link in the map),
-   loading objects related to a set of other objects (e.g. select NE2, NE3, NE5, NE7 and "load equipment" for them)
-   setting search criteria to focus in on a specific part of the overall search universe, or
-   deliberately choosing to avoid setting limiting criteria in order to view ALL

**
**

**Users can further refine the list by applying filters** once the result set is loaded.

<span class="confluence-embedded-file-wrapper"><img src="assets/images/167231067/171226772.png" class="confluence-embedded-image" /></span>

**The user is prompted to enter keyword(s) as starting context for their object browser, on the assumption that users are not usually interested in *everything*.  **This will search across multiple string-based attributes of the object type (e.g. service name, service endpoint).  Users can specify more than one search term, separated by spaces, which will be AND'ed together.

**
**

**Users can hit "Search" without providing any keyword.**  This will result in the object browser being opened in the context of the full set of possible results.

**
**

**The current keyword search applied to the object browser should be prominently displayed in the Info bar.**  The user can change the starting context by searching again from the info bar.  This resets any applied filters in the list.

**
**

**Results are displayed in the default sort order for the object browser.**  Sort must be reflected in the sort controls.

**
**

**An object browser can be opened from the context of another object.**  For example, opening the equipment list from the context of a particular NE on the map, or in a service view.  The applied context must clearly be displayed.

 

**Users can further narrow the result set by filtering based on attributes relevant for the current result set**<span style="color: rgb(0,0,0);">. These filters appear in the object browser's filter pane.  For</span> details on how filtering works, see [Filtering (RR)](171214768.html).

 

**Match the web browser tab's title to the main title in the Infobar.  **This will be the most effective way to differentiate the tab when many are opened<span>.</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/176927128.png" class="confluence-embedded-image" width="850" /></span>

Sorting
-------

NMS users sort objects as a technique to

-   group like-objects together in a chunk, 
-   o<span style="color: rgb(0,0,0);">rganize the results in an order of priority (e.g. Critical alarms first, most recent alarms, Down services first),</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**An external sort control is available above an object browser's result set** (see control description at [Sort](https://confluence.ciena.com/pages/viewpage.action?pageId=175019564)).  It displays both the default sort, and allows the user to change the sortable attribute/order.  Users can also add more sort criteria that are displayed in the order in which they are applied.</span>

**
**

**Sortable attributes are presented in a defined order to help the user find what they're looking for.**  For example, in alphabetical order (default), or most common sort criteria at top, if known.

<span style="color: rgb(0,51,102);">
</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/175020228.png" class="confluence-embedded-image" height="250" /></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">**
**</span></span>

<span style="color: rgb(0,51,102);"><span style="color: rgb(0,0,0);">**In table object browsers, column headers can also be used to apply the same capability.**  When used, the applied sort should also be reflected next to the sort control, in addition to in the table columns.  Multi-column sort is applicable by applying a modifier key when clicking on the next column (Ctrl).  Add visual to help ex</span>plain.</span>

 

**Sort **<span>**across the entire result set **that is in scope of the object browser (based on its current context + applied filter).  This will match </span>the<span> user's mental model of how the sort should work.  Maintain the current sort order even when the results change due to updated filters or dynamic changes from the server/network (e.g. addition/removal/updating of results).</span>

<span>
</span>

**The user can select any attribute in the results to apply an ascending/descending sort order on demand.**  The list of offered attributes shall include all attributes, including those that may only apply to certain rows in a heterogeneous result set.  Similar to the presented filters, the list of <span>sortable attributes </span>should<span> be reduced to match the currently applied filters on the object browser.  Applying a filter that removes a sortable attribute that is currently part of the applied sort should not change the results.</span>

<span>
</span>

**<span>Multiple attributes can be chained in order to apply a hierarchical sort on </span>the results.  **<span>The 2nd level of sort (for the 2nd selected attribute) will be applied within the groups created by the first level of sort.</span>

<span>
</span>

**Apply a default sort when object browsers are first opened. **<span> The current applied sort must be explicitly shown to the user with the same sort controls they can adjust manually.  The appropriate default sort for a list should be determined on a case-by-case basis based on the object type and the main user tasks involved in order to avoid unnecessary user action to manually re-sort the list.  For example, alarms are normally sorted on raise-time, whereas services are sorted by service name.</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Sort each attribute consistently, independent of the object browser. ** Sort according to the ordinality and cardinality of the data.  For example:</span>

-   <span style="color: rgb(0,0,0);">Date/Time: oldest to most recent</span>
-   <span style="color: rgb(0,0,0);">Equipment identifiers (e.g. ports): parse and sort these fields according to their format. For example, 1-9-2 before 1-10-3 in ascending order.  (note: alphanumeric sort would place it before, because 1&lt;9)</span>
-   <span style="color: rgb(0,0,0);">Endpoints: combination of alphanumeric sort on Network element name, and then sort by equipment identifiers</span>
-   <span style="color: rgb(0,0,0);">Severity: Critical, Major, Minor, Warning, Info</span>
-   <span style="color: rgb(0,0,0);">State: Down, Troubled, Normal</span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Keep user's selection in view while sorting.  **If multiple objects are selected, always keep the first one in view.</span>

<span style="color: rgb(0,0,0);">
</span>

No (visible) paging!
--------------------

**No paging controls are visible to the user. **

As the user scrolls through an object browser, **implicit paging** is performed "behind the scenes".  In this way, users should perceive a seamless scroll as the results are retrieved/made visible on the screen.  As the user scrolls, they should not perceive a time delay as new results are retrieved and made visible on their screen.  Page sizes should be determined to optimize this perceived performance.

<span>**
**</span>

<span>**The scrollbar must always reflect relative position within entire result set**, not within page.  This way, the user always has a sense of where they are in the total result set with which they're working</span><span>.</span>

If the user jumps to another section of the result set by clicking directly in the scrollbar (e.g. far down the list), display an indeterminate progress indicator in the browser results window while the appropriate page is retrieved.  See <span style="color: rgb(51,102,255);">Progress indicators</span>.

 

Dynamic updates<span style="color: rgb(61,60,64);"> </span>
-----------------------------------------------------------

<span style="color: rgb(61,60,64);">**All changes are automatically reflected in the object browser.** <span>This way, </span><span>users have access to the latest state of the network at all times. </span>Possible changes are:</span>

-   <span style="color: rgb(61,60,64);">insertions of objects – because they are new to the system or now match the browser's filter</span>
-   <span style="color: rgb(61,60,64);">updates to existing objects in the browser, such <span class="inline-comment-marker" data-ref="11c77a06-698b-4c0b-8db9-2cc9cfc94a75">state changes</span>, acknowledgements</span>
-   <span style="color: rgb(61,60,64);">removal of objects – because they have been deleted from the system or no longer match the browser's filter</span>

 

<span style="color: rgb(0,0,0);">**Visually mark all changed/inserted objects.**  T<span style="color: rgb(61,60,64);">his way, <span class="inline-comment-marker" data-ref="083049b4-f871-457d-ac32-b4c80b04d8c0">users can identify changes</span>, even if they originally happened outside the visible area of the browser. </span>Unmark them when the user selects them.</span>

<span style="color: rgb(255,0,255);"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/181078482.png" class="confluence-embedded-image" width="850" /></span></span>

<span style="color: rgb(0,0,0);"> <span style="color: rgb(255,0,255);">VD req'd. – propose to use the vertical bar to the left of the rows to indicate this status.</span></span>

<span style="color: rgb(255,0,255);">
</span>

<span style="color: rgb(0,0,0);">**Summarize changes to the result set since the user last searched, filtered or opened the browser (if opened from context).**  </span><span style="line-height: 1.42857;">Count the changes since the contents were last "set" and display it in a badge next to the list totals.  Animate changes to the badge to draw the user's eye.</span>

<span style="line-height: 1.42857;"><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/181078431.png" class="confluence-embedded-image" width="850" /></span></span>

 

### Viewing change details

**Click on the badge icon to view the corresponding change list, sorted by time with the most recent at the top.**  This displays a log of the last 100 changes (insertions/updates/removals) since the user last set the list's context by filtering, searching or first opening the list from some other context.  Note: if there were multiple changes to the same object, they can all be listed separately – this sequence of events is sometimes valuable to the user.

If there are more than X items in the change list, introduce a scrollbar.  Keep <span>the change list open until the user explicitly closes it. </span>

If new items come in while the change list is open, update the badge count, and visually indicate the count of new items in the change list itself.  Users can click this to pull them in.

<span style="color: rgb(255,0,255);">VD req'd.  Instead of being anchored to the badge, it could slide in from the right in a panel?  Size of X should be defined by VD.</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/181078528.png" class="confluence-embedded-image" width="850" /></span>

 

**Clicking a change list record auto-scrolls the browser to the affected object.**  This avoids users having to manually hunt for the object.  Of course, no link is possible for removal logs.

 

**After closing the change list, the badge icon & count is cleared.**  An icon remains for the user to click in order to re-open the change log, if needed.

 

**Changing search context (e.g. keyword search) or applied filters resets the change list to zero.**  Leave previously marked items as-is??

**
**

### Freezing contents temporarily

We can classify object browsers into one of two major types:

-   *slow-changing browsers* that contain relatively static objects.  Examples: network elements, equipment, services, and infrastructure.
-   *streaming browsers* that contain rapidly changing data.  Examples: alarms, events.

**Users can freeze the contents of *streaming browsers*.  **Due to the nature of streaming data, automatic changes may be very disruptive to a user's flow, if they are focusing on data that is in view.  Although this functionality can be provided for slow-changing browsers as well, it's of reduced value to users.

When the content is "frozen", there is no need to keep track/display any changes, but show how long it's been frozen (e.g. "for last 12 minutes").  However, the fact that it is now a static view must be unambiguously indicated to the user.  

<span style="color: rgb(255,0,255);">VD req'd.</span>

 

Contextual actions
------------------

Object browsers follow a basic *object select + action* workflow.  Upon selection of a row in an object browser, relevant actions for that object will appear in an actions panel at the bottom of the list.

 

**Actions are visually differentiated based on their expected importance in the user's workflow.**<span>  The visual language supports the concept of primary, secondary and tertiary actions.  </span>

<span>
</span>

**Some action buttons can be launched into new web browser tabs/windows.**  For example, button-styled web-links replace the current page by default, but always offer the ability to open into a new web browser tab or window.  Visual affordance distinguishes these actions (see [Web links (aka hyperlinks) - IP](https://confluence.ciena.com/display/blueplanet/Web+links+%28aka+hyperlinks%29+-+IP)).<span style="color: rgb(255,0,255);"> </span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167231067/176939996.png" class="confluence-embedded-image" width="850" /></span>

**
**

<span style="color: rgb(0,0,0);">**Users may select multiple objects in the list.**  In this case, the available actions in the actions panel will be limited to actions that can be performed on multiple objects at a time.  In addition, the set of actions will be limited to only those that apply to all selected actions.</span>

<span style="color: rgb(0,0,0);">Viewing/comparing specific object details for a small set of objects will be accommodated with special purpose actions optimized for the user scenario.</span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">**The number of selected items is reflected in the action bar** to reinforce how many will be affected by the chosen action.<span style="color: rgb(255,0,255);"> </span></span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">**Double-click to open the selected object's details page.**  This is the primary action of the object browser.</span>

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [table\_list\_generic table.png](attachments/167231067/167231996.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [table\_list\_generic table.png](attachments/167231067/167231997.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [table\_list\_generic table.png](attachments/167231067/167231991.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-11 9:45:53.png](attachments/167231067/171226249.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-11 9:54:20.png](attachments/167231067/171226263.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-11 13:14:39.png](attachments/167231067/171226651.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-11 13:44:4.png](attachments/167231067/171226772.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-14 at 11.27.22 AM.png](attachments/167231067/175019548.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-15 at 8.13.49 AM.png](attachments/167231067/175020228.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-1 13:13:30.png](attachments/167231067/176927128.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-3 14:6:21.png](attachments/167231067/176931182.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-3 14:8:21.png](attachments/167231067/176931193.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-3 14:8:45.png](attachments/167231067/176931196.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-10 16:56:56.png](attachments/167231067/176939996.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-16 10:8:48.png](attachments/167231067/176944348.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-19 12:41:27.png](attachments/167231067/181078431.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-19 13:7:4.png](attachments/167231067/181078477.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-19 13:10:15.png](attachments/167231067/181078482.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-2-19 13:35:25.png](attachments/167231067/181078528.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


