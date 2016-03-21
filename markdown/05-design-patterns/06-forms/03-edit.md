# When to use

<span>Use this basic form pattern to change an object's editable attributes (e.g. service's name & customer) or to input system or user settings (e.g. security settings, preferences).</span>

<span style="line-height: 1.42857;">If already viewing an object details screen, a separate form is not required.  The object can be placed in an "edit" mode such that the user can edit the fields directly.  See inline editing described in the <span style="color: rgb(0,0,255);">Object Details</span> pattern.</span>

# Interaction design

**The object edit form only displays the editable attributes of the selected object or objects.**<span>  Generally, this means that the form is quite short by comparison with creation forms.  Also, </span>a smaller subset of attributes make sense to edit on multiple objects at a time.  For example, it does not make sense to allow "Name" to be edited on multiple services at once, but it may make sense to edit the "Customer" field on several at a time.

 

**Provide indeterminate progress indication and completion notification asynchronously to users.**  In addition, asynchronous transient notifications let the user know the outcome of the operation in a non-modal way.  For more on progress indication, see the <span style="color: rgb(0,0,255);">User feedback</span> pattern description.

 

**Place progress indicators in proximity to selected objects to allow users to easily monitor task completion. **

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171233649/171234905.png" class="confluence-embedded-image" width="800"/></span>