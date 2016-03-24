# When to use

When an HTTP error is encountered such that the requested content cannot be displayed, and the page cannot be appropriately redirected to more suitable content, replace with a Blue Planet branded error page.  An example of suitable redirection would be upon receiving an error indicating the user is unauthenticated.  In this case, it would be appropriate to redirect them to the login page. 

# UX/UI Components

1.  **Application bar**
2.  **Problem description:** brief, user-centric problem description
3.  **Next steps:** what the user can do to recover, if anything (e.g. Try again later, Contact your administrator)
4.  **HTTP error code & error title**
5.  **Server-side error message:** provides more context of internal call failure. Written in text a user can understand. (e.g. Failed to retrieve equipment)
6.  **Details link:** allows user to see gory details of any exception handling that the server produces.  Ideally, the text here explains the nature of the problem and possible causes in detail.  Any further troubleshooting information should be provided here.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="assets/images/169240855/176934502.png" class="confluence-embedded-image confluence-content-image-border" width="850" height="637" /></span>

# Interaction design

**Explanatory text should be expressed in terms that are easy to understand for an end-user, and avoid developer jargon.**  Do not assume the user understands the internals of the server-side infrastructure, REST APIs, or HTTP error semantics.

**Error message should use a tone that is consistent with the overall tone used in Blue Planet.**  See recommendations on use of Style & tone under Text.


**Users and support staff can click the "Show details" to view the full details that will help troubleshoot the issue.**  The details will be shown on the same page in a scrollable area with a corresponding tertiary button to "Hide details".  It's OK to express the details in very technical terms since the intended audience is typically a more advanced user and/or Ciena customer support.

**Match the web browser tab's title to the main title of the error page.**  This will help users differentiate it from other browser tabs.