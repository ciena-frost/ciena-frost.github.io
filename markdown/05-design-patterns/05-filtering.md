# When to use

When users need to narrow an inventory of objects to a subset, available filters are displayed in a filter pane and dynamically applied to the list of objects.  This pattern is prominently available in the object browser, in the global search results, and may also be applied to other types of inventories. For example, the network map is a visual inventory of NEs and links.  

# UX/UI Components

1.  **Filter section:** collapsible section containing the filterable attribute name and filter inputs
2.  **Filtered count:** the number of results that match the currently-set filter out of the total
3.  **Applied filters badges:**
    -   global badge indicates the number of filters currently applied to the result set.  Click on the icon to view the specifics, remove individual filters, or clear them all.
    -   filter-specific badges *for collapsed filters only*.  Appears when there is as filter applied. &lt;VD tbd. use of badge indicator may change&gt;

4.  **Scroll bar:** if contents are too long for the visible area

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/183345125.png" class="confluence-embedded-image" width="850" /></span>

For detailed visual design, see [Filter pane](https://confluence.ciena.com/display/blueplanet/Filter+pane+-+IP).

# Interaction design

## Filters reflect the result set

**The filter pane only contains filters that pertain to the initial result set.** This means that the available filters are attributes of the objects in the initial result set.  For example, if the result set only contains alarms, then only alarm attributes will be available as possible filters.  Further, if these alarms only contain alarms on 6500 & 8700 NEs, then the "Device type" filter will only have 2 checkboxes: 6500 and 8700.

 

**If the result set contains different object categories, <span class="inline-comment-marker" data-ref="2517f3a6-ef33-462c-aaf7-31d1fbd3c84c">these</span> categories will appear as filterable attributes at the top of the filter pane.**  Initially, all are shown in the result set until the user chooses to narrow down their <span class="inline-comment-marker" data-ref="cad9dde1-d416-46cb-8369-ee360fe14dd3">set</span>.

Note: If there is logical grouping of categories based on commonality of filters, display the hierarchy amongst the categories.  For example, if links are grouped in the "Infrastructure" browser, then "Links" may be a grouping for all different types of links (LLDP, OTU, OSRP, LAGs, etc.).

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181079929.png" class="confluence-embedded-image" width="850" /></span>

**If the result set contains multiple categories, the set of displayed filters initially shows only filterable attributes that are common to all categories.**  For example, if a list of services contains both EVPL and OTN services, then only their common attributes (e.g. type, state, protection) are displayed.  Specialized attributes are only displayed once the user has selected a specific <span class="inline-comment-marker" data-ref="158d3f84-2c4b-42d5-9b5c-f58b3c943e84">category</span>.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181086237.png" class="confluence-embedded-image" width="850" /></span>

**Common filters for the scope of the browser are visually grouped and displayed first, followed by category-specific ones (if drilled into a category).**

-   Selecting a specific category extends the filter pane to show that category's specific filters as well.  
-   I<span class="inline-comment-marker" data-ref="67f456c5-7c3d-4fe6-9d46-241400a6ca23">f the user selects a filter value that maps only to a specific category</span>, all non-applicable categories are automatically removed from the category section.  For example, if "Dynamic MPLS-TP" is selected for the "Protection" filter, this would remove any non-applicable category (e.g. "Direct wavelength access" and "Ethernet (OTN mapped)").

**Within a given filter, selected filter values are logically OR'ed together.**  For example, if a user filters on State="Down" and State="Troubled" in a services browser, that would filter the results set to all services that are *either* Down *or* Troubled.

**Selected filters between multiple filter types are logically AND'ed together.**  For example, if the user filters on State="Down" and Rate="10GE", that would filter the result set to all 10GE services that are Down.

**<span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">Apply filters immediately upon selection </span><span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">if results can be returned almost immediately to the user</span><span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">.</span>**<span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">  If applying the filter will take some time, it is better to let the user batch their filter requests and offer an explicit button for them to perform the filter on the list  (see </span><a href="https://www.nngroup.com/articles/applying-filters/" class="external-link"><span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">comparison of batch filtering vs. interactive filters</span></a><span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">).</span>

<span class="inline-comment-marker" data-ref="5cb33a87-f26c-41bb-85a1-1d7779a080b2">&lt;note: this requires feedback from architecture/development to determine which way we need to go.  if there is a need for batch filtering, we'll have to adjust the visuals to incorporate the ability to apply filters&gt;</span>

## Facet & non-faceted filters

There are two major types of filters in a filter pane:  

-   **Facet filters** are filterable attributes of the result set that are *broken down into discrete options based on **values** of the result set*.  For example, if an NE list only contains 6500 and 5430 NEs, then you can only filter on "6500" and "5430" values for the facet filter called "NE type" (and not 8700).
-   **<span class="inline-comment-marker" data-ref="fd263a22-13e0-469a-8bb7-20b0393c498f">Non-faceted</span> filters** are filterable attributes of the result set, but do not describe the actual values of the result set

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181087127.png" class="confluence-embedded-image" width="700" /></span>


**If an object attribute can be "faceted", it should be.**  Facet filtering on large datasets helps users understand what they can filter on to quickly refine their results appropriately (since the filters describe only what's in the result set).  It also prevents dead-end filtering (empty lists), then backing away only to try again with a different filtering approach.

**Filters work independently of each other.**  They can be added/removed in arbitrary order.

**Users can clear all selections for a specific filter.**  When the user selects a filter value, a "Clear" button appears to clear selections for a filter.

**Filter sections that are longer than one line of vertical space can be manually collapsed.  </span>**By default, all filter sections are expanded and the filter pane scrolls independently.

**<span class="inline-comment-marker" data-ref="df82908e-f16c-4c1f-b997-1d5bdf5c0d19">Filters are displayed in order of priority within the filter pane.</span>**  A filter's priority is determined based on how likely users will want to use it for refining their result set.  This way users should be able to find the filter they're most likely to use in the top section of filters, avoiding having to scroll within the panel except in less common scenarios.

## Facet filters

<span style="color: rgb(0,0,0);">**Facet filters are accompanied by facet counts for the number of matches for each value – called**</span>** information scent.  T**he facet counts give the user an indication on how many <span class="inline-comment-marker" data-ref="833eb492-e512-4ed1-a037-e92ec66e2756">objects</span> in the result set would be shown/hidden by toggling any particular facet value.  This helps the user understand how they can most effectively narrow the results. 

<span class="s1">Note: sometimes objects can be tagged with multiple values for a given filter.  Counts must reflect this accurately. For example, </span><span class="s1" style="line-height: 1.42857;">if filtering NEs by technology layer, a given 6500 NE may be both a photonic ROADM </span><span class="s2" style="line-height: 1.42857;">and</span><span class="s1" style="line-height: 1.42857;"> an OTN switch.  Selecting ROADMs, may leave OTN switches in the filtered result set.</span>

<span class="s1" style="line-height: 1.42857;">
</span>

**Facet counts for a facet value are related and influenced by the shown counts from other facet values.**  For example, consider these<span style="line-height: 1.42857;"> two facet filters for a data set of alarms:</span>

-   Severity: {Critical, Major, minor, warning, indeterminate}
-   Alarm Type: {Communications, Equipment, Processing, Performance, etc.}

These filters act separately but are **NOT** mutually exclusive.

If the user filters on Severity = (Critical, Major), the facet counts in the Alarm type filter adjust downwards to indicate the number that are also either Critical or Major.  Some may even go to zero/nil (as shown here).

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181081603.png" class="confluence-embedded-image" width="650" /></span>

 

<span style="color: rgb(0,0,0);">**<span class="inline-comment-marker" data-ref="f14f24dd-0712-4ade-8d75-e7e1ac22361e">Facet values and counts update to reflect dynamic changes in the result set.</span>**  Most result sets can update dynamically –  new objects match the specified filters and previously matching objects no longer do.  For example, if an initial search only matches major & minor severity alarms, and later a Critical is raised that matches the search, the filter will dynamically update to include "Critical" as a visible facet value with the appropriate count.</span>

 

**When facet filters are initially displayed (after setting the search context), they appear unselected.**  However, since the filter values are derived from the result set, they are all in scope.  Selecting a filter indicates that you want to filter to that specific value.

**
**

****Use checkboxes w**hen a facet filter has less than <span class="inline-comment-marker" data-ref="95c6e878-cdeb-41c1-9c0a-db5c21345d7e">X</span> possible values.**  <span style="color: rgb(51,102,255);">[Checkboxes](Checkbox---RR_171214701.html)</span> are checked *upon user selection*<span style="color: rgb(0,0,0);">.  Values are ordered in their default sort order (see </span><span style="color: rgb(51,102,255);">Sorting</span><span style="color: rgb(0,0,0);">).</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181081820.png" class="confluence-embedded-image confluence-thumbnail" width="220" /></span>

 

**Use a simple <span style="color: rgb(51,102,255);">[drop-down](https://confluence.ciena.com/pages/viewpage.action?pageId=171214727)</span> when a facet filter has between <span class="inline-comment-marker" data-ref="5b87357c-565f-476a-94e5-d137624ffa75">X-Y possible values</span>.**  <span style="color: rgb(0,0,0);">Values are ordered in their default sort order (see </span><span style="color: rgb(51,102,255);">Sorting</span><span style="color: rgb(0,0,0);">).</span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181081822.png" class="confluence-embedded-image confluence-thumbnail" width="220" /></span>

 

**Use an <span style="color: rgb(51,102,255);">[auto-complete text field](https://confluence.ciena.com/display/blueplanet/Auto-complete+text+field+-RR)</span> when a facet filter <span class="inline-comment-marker" data-ref="7483f260-d484-47e4-b284-fed1136564e8">has more than </span><span class="inline-comment-marker" data-ref="24a27f44-fa03-4838-93d4-66f5d1fd6299"><span class="inline-comment-marker" data-ref="7483f260-d484-47e4-b284-fed1136564e8">Y possible values</span></span>.  **Users first type directly into the text field to scope the values to the characters they've entered and then can select a value from a drop-down of matches.  An example where this might be used is for a filter on NE Name.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181081833.png" class="confluence-embedded-image" width="850" /></span>

## Non-faceted filters

**Filter panes may also include attributes that are useful to narrow down the result set, even if they cannot be presented as discrete, selectable values with associated counts.  **For example, a matching substring for an NE name, wavelengths with Q values bigger/smaller/between X & Y, or events that occurred before/after/between times.  In all cases, these filters are not expressed on discrete values, and thus cannot be counted ahead of time.

Some possible examples of these types of filters are shown below.  These are for illustration only - visual design of these input types are described in separate design patterns/UI components such as [Date/time input (RR)](https://confluence.ciena.com/pages/viewpage.action?pageId=176923515) and [Slider - IP](https://confluence.ciena.com/display/blueplanet/Slider+-+IP).

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171214768/181087149.png" class="confluence-embedded-image" width="800" /></span>
