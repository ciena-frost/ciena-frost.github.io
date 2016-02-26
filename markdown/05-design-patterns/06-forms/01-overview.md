1.  <span>[Blue Planet](index.html)</span>
2.  <span>[Forms (RP)](167230064.html)</span>

<span id="title-text"> Blue Planet : Form overview (RP) </span>
===============================================================

Created by <span class="author"> Christiane Campbell</span>, last modified by <span class="editor"> Sonya Thornley</span> on Feb 03, 2016

When to use
===========

Forms are used for everything from provisioning new services, creating planned network entities, editing object attributes, and editing system configuration settings.  All forms in Blue Planet follow a consistent layout and interaction pattern.  Specific types of forms require different completion & feedback interaction, as explained in the accompanying pattern descriptions.

 

UI/UX components
================

1.  **Form dialog:** appears at fixed position (80px) from the top of browser's visible area, centered horizontally. Dynamically expands downwards upon appearance of conditional fields, until it hits the bottom edge of the web browser's visible area.
2.  **Title:** brief description of what the form will do
3.  **Sections: **collapsible sections to group related inputs
4.  **Inputs:** Right-aligned labels and input fields. User should be able to tab between fields to facilitate entries for expert users
5.  **Instructions (optional):** include *brief* instruction text only if deemed necessary given the context of the form
6.  **Scrollbar:** appears if form still cannot be fully seen once dialog has expanded to hit bottom of browser's visible area
7.  **Call to action buttons:** primary action to the right with possible secondary actions to the left of it. Cancel button to the left. Focus should be on the primary button, enabled once all required inputs have been selected.

 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167230064/169239417.png" class="confluence-embedded-image" height="400" /></span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">For detailed visual design, see</span><span style="color: rgb(0,0,0);"> </span><span style="color: rgb(0,0,255);">Form</span><span style="color: rgb(0,0,0);">.</span>

Interaction design
==================

****The form dialog is semi-modal because the application bar is still accessible.  ****This allows <span>the user to temporarily interrupt their work in an unfinished form, and open another screen into a new web browser tab.  If the user decides to simply navigate away without completing their form (default behaviour), the system will request confirmation from the user if they want to conserve their unfinished form and navigate to a new tab, or lose their entries.</span>

<span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171233653/171236068.png" class="confluence-embedded-image" width="850" /></span></span>

**
**

**
**

<span style="color: rgb(0,0,0);">**By default, the primary action to apply the form should be in focus** so that the user can directly hit the "Enter" key if desired.  The exception to this rule is when the action is potentially destructive to something in the network or system (e.g. edit a service).  In this case, focus should be given to the Cancel button.</span>

<span style="color: rgb(0,0,0);">
</span>

<span style="color: rgb(0,0,0);">**Standard keyboard "tab" navigation techniques should be available.**  These follow the correct order of inputs all the way to the completion buttons.</span>

**
**

Form layout
-----------

**Related inputs can be grouped into collapsible sections.**  

-   **Guided tutor sections:** some sections group related inputs to illustrate the form's workflow, acting as a guided tutor.  These collapsible sections have titles displayed to the left of the input fields and can be manually collapsed/expanded.  Later sections may be collapsed & disabled if they require the user to first enter earlier inputs.  Once those inputs have been provided, they expand automatically.
-   **Field group sections:** other sections simply group related fields for organization purposes, within a tutor section.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167230064/169240510.png" class="confluence-embedded-image" width="850" /></span> 

 <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167230064/169240509.png" class="confluence-embedded-image" width="850" /></span>

**
**

**Display prompt text in input fields only when there is a possible ambiguity.**  If the field is unambiguous based on the label, no need to include prompt text. See [text](https://confluence.ciena.com/display/blueplanet/Text+-+VI).

 

**Units of measure are displayed after the value to which they apply**.  Note that in a table where data is displayed, they would appear in a column header to avoid unnecessary repetition.  For example:

-   Revert in \_\_\_\_\_\_\_ minutes
-   Excess loss: \_\_\_\_\_\_\_ dB

See [text](https://confluence.ciena.com/display/blueplanet/Text+-+VI).

 

**Some complex forms allow users to add/edit multiple objects within a single form.**  For example, when creating a service, it may be possible to create N endpoints that each require a subform of inputs.  They will appear as collapsible panes with an "add" action button at the bottom for the user to continue to add another.  The pane titles allow for sufficient space to appropriately identify each separately added object.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/167230064/169240533.png" class="confluence-embedded-image" height="400" /></span>

<span style="color: rgb(0,0,0);"> </span>

**Forms are generally laid out in a single column to enforce an unambiguous, linear workflow.**  This has been shown to improve form completion rates in usability studies.  

 

**In specific cases, form input fields make sense to layout side-by-side in a 2-column form.**  For instance, if supplying A and Z endpoint inputs, these attribute groupings may be laid out side-by-side to take advantage of horizontal real estate since they semantically make sense to place that way.  This is expected to be the exception, not the rule. 

<span style="color: rgb(0,0,0);"> </span>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171233653/171235527.png" class="confluence-embedded-image" width="850" /></span>

Validating input
----------------

**Only valid options are available for fields with discrete inputs (e.g. combo-boxes, check-boxes).**  These valid options update according to inputs made earlier in the form to avoid incompatible selections.  For example, if the user has selected a 1GE rate for an endpoint, subsequent selection of ports should only present ports that support the 1GE rate.

 

**For fields which require free-form user input, inline validation should be performed immediately as the user types**.  If an error is detected, the input field is highlighted with a brief explanation appearing beneath the field to help the user correct their mistake.  This will shift the remaining form inputs downwards.  Once they've made the correction, the highlighting disappears and the remaining inputs shift back to their original positions.  

<span class="confluence-embedded-file-wrapper"><img src="assets/images/167230064/169240514.png" class="confluence-embedded-image" /></span>

 

**Required input fields shall be visually marked so that the user knows what the minimum entries are they must provide.**  <span style="color: rgb(0,0,0);">As they are filled in, the "required" indicator is remains.</span>  Call to action buttons are only enabled once all required fields have been entered.  Note that fields that are technically required for an operation but that have default values selected in the form should not be marked as "required".

If there are required fields within a collapsed tutor section, this should be visually marked on the section itself. <span style="color: rgb(0,0,0);"> </span>

<span class="confluence-embedded-file-wrapper"><img src="assets/images/167230064/169240525.png" class="confluence-embedded-image" /></span>

 

<span>
</span>

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-21 10:53:17.png](attachments/171233653/171234707.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-21 13:8:19.png](attachments/171233653/171234887.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [form---double.png](attachments/171233653/171235527.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [image2015-12-22 13:29:5.png](attachments/171233653/171236068.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


