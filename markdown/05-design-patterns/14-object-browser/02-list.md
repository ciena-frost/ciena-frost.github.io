1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : List object browser (RR) </span>
=====================================================================

Created by <span class="author"> Christiane Campbell</span>, last modified by <span class="editor"> Sonya Thornley</span> on Feb 18, 2016

When to use
===========

Use a List View Object Browser when:

-   when the **instances do not all have the same attribute data OR the attributes vary**, and 
-   when the object instances are of a similar general type but have various subtypes. 

For example, the alarm browser contains alarms with different attributes depending on their type (e.g. NE alarms, EMS/NMS alarms, TCA alarms).  The services browser contains services of different types that each may have some distinct relevant attributes.

 

UX / UI components
==================

1.  **Info Bar:** includes title, list context description, list counts, and optional summary information for the objects in the list
2.  **Keyword search box:** sets the initial context of the browser based on supplied keyword(s)
3.  **App-level actions (optional):** non-contextual actions the user can take related to this object type
4.  **Filter pane:** displays all available filters to further refine the set. Collapsible by the user.
5.  **Sort controls**: multiple-attribute sort on attributes of objects in the list**
    **
6.  **Retrieved results**:  list of results displayed in list cards where primary, secondary, tertiary attributes organized into "swim lanes" within each row.  Most important information is highlighted and located in leftmost & rightmost "swim lanes" to facilitate scanning in the list.  Accommodates differences between displayed data for different rows in the table.
7.  **View controls (small, medium, large): ** toggle between different views to balance between displaying more object detail per row vs. more objects in the visible area
8.  **Action controls**:  applicable actions bar shifts up into the view upon selection of one or more rows in the list.  Actions determined and enabled/disabled based on selections.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167240510/171226810.png" class="confluence-embedded-image" width="900" /></span>

Interaction design
==================

<span style="line-height: 1.5;">The list browser inherits all behaviours described in the generic [Object browser overview (RR)](167231067.html) pattern.</span>

Changing views
--------------

Users can change the level of detail displayed in the object browser by selecting **small/terse or large/full views of the objects.**  These options are located to the top-right, above the result list.  These views show increasing amounts of data about the objects in the list, while trading off the number of rows that can be displayed at one time. 

<span style="line-height: 1.5;"> </span>

The **small view focuses on primary information to view more rows in the visible area.  **See [list cards](https://confluence.ciena.com/pages/viewpage.action?pageId=176927319).

<span style="line-height: 1.42857;">
</span>

<span style="line-height: 1.42857;">The l</span>**arge view expands to show primary, secondary and tertiary information**<span style="line-height: 1.42857;"> about an object that users may need when performing more detailed tasks with a set of objects in the list, again without having to open individual object details (pogo-sticking). See [list cards](https://confluence.ciena.com/pages/viewpage.action?pageId=176927319).</span>

 

<span>Note: all two views may not apply to all object types, such that there maybe only be 1 size of view.  The applicability of each view should be determined on a case by case basis.</span>

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Generic object browser.png](attachments/167240510/169217631.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2015-11-10 at 9.36.48 AM.png](attachments/167240510/169220664.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [OB\_Generic list.png](attachments/167240510/169220669.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2015-11-17 at 12.41.23 PM.png](attachments/167240510/169228955.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-11 13:56:30.png](attachments/167240510/171226810.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-28 16:49:36.png](attachments/167240510/176923905.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-28 16:50:33.png](attachments/167240510/176923908.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2016-1-28 16:52:21.png](attachments/167240510/176923914.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


