# When to use

Creation forms are used to input parameters for new objects in the system.  They can be **simple** or **complex**, depending on the object type.  An example of a simple creation form would be one to create a new user in the system, or a drawn NE.  Significantly more involved forms are required to specify the necessary attributes for network services.

 

# Interaction design

**Users invoke a creation form from a web-link in the UI** (e.g. from the application bar menu, or a button link).  By default, it opens "on top" of the current page (i.e. within current route/URL).  

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171233647/171236070.png" class="confluence-embedded-image" width="850" /></span>

 

**The user can choose to use the web browser's capability to open the create link into a new tab.**  As this is intended for expert web users, this option is discoverable via the web browser's menu system off the Create web link.  If opened into a new web browser tab, the dialog is placed over a new object browser instance (with keyword search open).  Therefore, if the user cancels (or closes the progress dialog), the user is left in the object browser, as though they'd opened it from the application-bar menu. <span style="color: rgb(255,0,255);"> </span>

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171233647/171236072.png" class="confluence-embedded-image" width="850" /></span>**

**
**

**The form completion button name should match the verb in the link used to invoke the form itself** (e.g. "Create user", "Provision service").

 

**Users can clear all their inputs with the "Clear" button.**  This clears all their inputs in the form and resets it back to the way it was when first opened, with appropriate defaults in place.

 

**<span>When creating more complex objects, a semi-modal progress indication dialog replaces the form upon completion. </span>** It serves two purposes:

-   to indicate progress/applicable error messages, and
-   to provide follow-up navigation options (immediately available, even if the creation action has not yet completed): 

1.  1.  open the details of the newly created object,
    2.  view a list of the user's recently created/modified objects including this one (e.g. most recent 25 objects), 
    3.  open a fresh form to create another object instance, or 
    4.  close the progress dialog

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/171233647/171236073.png" class="confluence-embedded-image" width="850" /></span>

**
**

**A detailed activity log is accessible to the user from the progress indicator dialog. ** It should contain sufficient information to be useful in troubleshooting when an error is encountered while applying the creation/edit.
