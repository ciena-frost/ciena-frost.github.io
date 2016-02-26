1.  <span>[Blue Planet](index.html)</span>

<span id="title-text"> Blue Planet : Confirmation Dialog (RR) </span>
=====================================================================

Created by <span class="author"> Katherine Parmeson</span>, last modified on Feb 23, 2016

<span style="font-size: 24.0px;">When to use</span>

**Whenever a user is performing a potentially destructive action or when the action is time consuming to reverse.** Different levels of confirmation are available for delete and edit functions based on the results of the action. For example, anytime the user action will cause a service to be reprovisioned, or deleted.

5 levels of delete, each requiring a different form of confirmation.
--------------------------------------------------------------------

1.  **Simple delete - **no confirmation necessary
    -   non-destructive
    -   easy to replace
    -   example - deleting a zoom level bookmark in a network topology

2.  **Minimal validation - **simple confirmation necessary
    -   destructive, but non-traffic affecting
    -   example - deleting a user account

3.  **Multiple object delete - ** will not be available for end users
    -   maybe something to consider for QA or NOC

4.  **Strong validation - **force user to think before they commit to the action
    -   highly destructive
    -   unable to recover - no undo
    -   example - deleting a domain - deletes all resources in that domain

5.  **2 Stage delete - **object information is archived instead of deleted
    -   silent archive... when a user deletes an network element they are not notified of the archival, but upon recreation the historical data is re-instated. A network element is the only object we will perform a silent archive. All other objects will be deleted completely.

3 levels of <span class="inline-comment-marker" data-ref="283e7462-28bd-4523-b97e-2a09cc7c4836">edit</span>, each requiring a different form of confirmation.
-------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  **Simple edit - ** no confirmation necessary
    -   non-destructive
    -   easy to change
    -   example - updating the description, owner or customer for a service

2.  **Minimal validation - ** simple confirmation necessary
    -   potential of being destructive, traffic affecting
    -   examples
        -   changing certain provisioning parameters requiring user to reprovision the service
        -   regrooming
        -   setting a manual switch
        -   resetting PM counters
        -   reseating cards
        -   setting equipment to "out-of-service"

3.  **Multiple edit - **simple confirmation necessary
    -   example - admin state, owner, customer, provisioning state

UI/UX components
================

1.  **Confirmation dialog:** 550px wide and appear at a fixed position (80px) from the top of the browser's visible area, centered horizontally
2.  **Title: **brief but specific text informing the user exactly what will happen
3.  **Verification (as required): **extra information a user may be required to enter to continue with the potentially destructive action
4.  **Call to action buttons: **primary action to the right with cancel button to the left. Since the action can be destructive, the focus will be on the cancel button.
5.  **Multiple object summary: **list the objects that are 
6.  To see visual design, [click here.](https://confluence.ciena.com/display/blueplanet/Dialog+-+IP)

<span class="confluence-embedded-file-wrapper"><img src="assets/images/175016437/181081828.png" class="confluence-embedded-image" /></span>
-----------------------------------------------------------------------------------------------------------------------------------------

UX Interaction
==============

When a user has initiated an action that requires confirmation to continue they will be presented with a confirmation dialog set to the appropriate level of validation based on the action they have initiated. Once the dialog has opened, the user will have two options. Cancel the action, or proceed.  Because of the possible destructive nature of these changes the "Cancel" button will have focus. This will guard against the user automatically hitting the enter key without reading the dialog to prevent accidental confirmation.

 

 

 

Attachments:
------------

<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [ux-conf-ex-confirmation.png](attachments/175016437/175016430.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [ux-conf-ex-simple-delete.png](attachments/175016437/175017233.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [Screen Shot 2016-01-25 at 11.47.37 AM.png](attachments/175016437/176918810.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [conf-dialog-strength.png](attachments/175016437/181081847.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [conf-dialog-strength.png](attachments/175016437/181081928.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [conf-dialog-strength.png](attachments/175016437/181081935.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [conf-dialog-strength.png](attachments/175016437/181081937.png) (image/png)
<img src="assets/images/icons/bullet_blue.gif" width="8" height="8" /> [conf-dialog-strength.png](attachments/175016437/181081828.png) (image/png)

Document generated by Confluence on Feb 25, 2016 11:36

[Atlassian](http://www.atlassian.com/)


