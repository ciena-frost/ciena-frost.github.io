# When to use

Use a Table View Object Browser when:

-   the instances all share the same attributes (no blank columns), 
-   the columns can be accommodated in a single screen width, and
-   comparison of data between rows is a primary use-case (closer visual proximity of comparable data such as numbers down a list)

 

# UI/UX Components

1.  **Info Bar:** includes title, list counts, and optional summary information for the objects in the list
2.  **Keyword search box:** sets the initial context of the browser based on supplied keyword(s)
3.  **App-level actions button (optional):** location of non-contextual actions the user can take related to this object type
4.  **Filter pane:** describes the list's context and displays all available filters to further refine the set. Collapsible by the user.
5.  **Sort controls**: multiple-attribute sort on attributes of objects in the list**
    **
6.  **Retrieved results**:  list of results with each attribute displayed in a separate column.  The user should be able to re-order, adjust the width, and show/hide columns.
7.  **Action controls**:  Applicable actions bar shifts up into the view upon selection of one or more rows in the list.  Actions determined and enabled/disabled based on selections.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167240513/171226814.png" class="confluence-embedded-image" width="900" /></span>

# Interaction design

<span>All behaviours described in the generic [Object browser overview (RR)](167231067.html) pattern apply to the Table version. </span>

<span style="color: rgb(0,0,0);">**
**</span>

<span style="color: rgb(0,0,0);">**Column headers can also be used to apply multi-attribute sorting on the list.**  The applied sort should be reflected via the sort control above the list as well as in the table columns.  Multi-column sort is applicable by applying a modifier key when clicking on the next column (Ctrl).  <span style="color: rgb(255,0,255);">Add visual to help ex</span></span><span style="line-height: 1.42857;color: rgb(255,0,255);">plain, including numbering of sort and order indication.</span>
