module.exports = [ { id:"overview",
    alias:"Overview",
    type:"category",
    route:"overview",
    items:[ { id:"vision",
        alias:"Vision",
        type:"route",
        route:"overview.vision" },
      { id:"roadmap",
        alias:"Roadmap",
        type:"route",
        route:"overview.roadmap" },
      { id:"defects",
        alias:"Defects",
        type:"route",
        route:"overview.defects" },
      { id:"changelog",
        alias:"Changelog",
        type:"route",
        route:"overview.changelog" } ] },
  { id:"development",
    alias:"Development",
    type:"category",
    route:"development",
    items:[ { id:"environment",
        alias:"Environment",
        type:"route",
        route:"development.environment" },
      { id:"app",
        alias:"App",
        type:"route",
        route:"development.app" },
      { id:"addon",
        alias:"Addon",
        type:"route",
        route:"development.addon" },
      { id:"learning",
        alias:"Learning",
        type:"route",
        route:"development.learning" },
      { id:"notes",
        alias:"Notes",
        type:"route",
        route:"development.notes" } ] },
  { id:"design-strategy",
    alias:"Design Strategy",
    type:"category",
    route:"design-strategy",
    items:[ { id:"usability-myths",
        alias:"Usability Myths",
        type:"route",
        route:"design-strategy.usability-myths" },
      { id:"branding",
        alias:"Branding",
        type:"route",
        route:"design-strategy.branding" } ] },
  { id:"design-conventions",
    alias:"Design Conventions",
    type:"category",
    route:"design-conventions",
    items:[ { id:"typography",
        alias:"Typography",
        type:"route",
        route:"design-conventions.typography" },
      { id:"layout",
        alias:"Layout",
        type:"route",
        route:"design-conventions.layout" },
      { id:"colors",
        alias:"Colors",
        type:"route",
        route:"design-conventions.colors" } ] },
  { id:"design-patterns",
    alias:"Design Patterns",
    type:"category",
    route:"design-patterns",
    items:[ { id:"about",
        alias:"About",
        type:"route",
        route:"design-patterns.about" },
      { id:"application-bar",
        alias:"Application Bar",
        type:"route",
        route:"design-patterns.application-bar" },
      { id:"date:time-input",
        alias:"Date:time Input",
        type:"route",
        route:"design-patterns.date:time-input" },
      { id:"error-page",
        alias:"Error Page",
        type:"route",
        route:"design-patterns.error-page" },
      { id:"filtering",
        alias:"Filtering",
        type:"route",
        route:"design-patterns.filtering" },
      { id:"forms",
        alias:"Forms",
        type:"category",
        route:"design-patterns.forms",
        items:[ { id:"overview",
            alias:"Overview",
            type:"route",
            route:"design-patterns.forms.overview",
            items:[ { id:"detail",
                alias:"Detail",
                type:"route",
                route:"design-patterns.forms.overview.detail" },
              { id:"form",
                alias:"Form",
                type:"route",
                route:"design-patterns.forms.overview.form" },
              { id:"detail-update",
                alias:"Detail Update",
                type:"route",
                route:"design-patterns.forms.overview.detail-update" } ] },
          { id:"create",
            alias:"Create",
            type:"route",
            route:"design-patterns.forms.create" },
          { id:"edit",
            alias:"Edit",
            type:"route",
            route:"design-patterns.forms.edit" } ] },
      { id:"global-search",
        alias:"Global Search",
        type:"route",
        route:"design-patterns.global-search" },
      { id:"home-page",
        alias:"Home Page",
        type:"category",
        route:"design-patterns.home-page",
        items:[ { id:"sample-layouts",
            alias:"Sample Layouts",
            type:"route",
            route:"design-patterns.home-page.sample-layouts" } ] },
      { id:"info-bar",
        alias:"Info Bar",
        type:"route",
        route:"design-patterns.info-bar" },
      { id:"login-logout",
        alias:"Login Logout",
        type:"route",
        route:"design-patterns.login-logout" },
      { id:"notifications",
        alias:"Notifications",
        type:"route",
        route:"design-patterns.notifications" },
      { id:"object-browser",
        alias:"Object Browser",
        type:"category",
        route:"design-patterns.object-browser",
        items:[ { id:"overview",
            alias:"Overview",
            type:"route",
            route:"design-patterns.object-browser.overview" },
          { id:"list",
            alias:"List",
            type:"route",
            route:"design-patterns.object-browser.list" },
          { id:"table",
            alias:"Table",
            type:"route",
            route:"design-patterns.object-browser.table" } ] },
      { id:"object-details",
        alias:"Object Details",
        type:"route",
        route:"design-patterns.object-details" },
      { id:"user-feedback",
        alias:"User Feedback",
        type:"category",
        route:"design-patterns.user-feedback",
        items:[ { id:"confirmation-dialog",
            alias:"Confirmation Dialog",
            type:"route",
            route:"design-patterns.user-feedback.confirmation-dialog" },
          { id:"notifications",
            alias:"Notifications",
            type:"route",
            route:"design-patterns.user-feedback.notifications" } ] } ] },
  { id:"ui-components",
    alias:"UI Components",
    type:"category",
    route:"ui-components",
    items:[ { id:"button-controls",
        alias:"Button Controls",
        type:"category",
        route:"ui-components.button-controls",
        items:[ { id:"button",
            alias:"Button",
            type:"route",
            route:"ui-components.button-controls.button" },
          { id:"link",
            alias:"Link",
            type:"route",
            route:"ui-components.button-controls.link",
            items:[ { id:"min",
                alias:"First",
                type:"route",
                route:"ui-components.button-controls.link.min" },
              { id:"first",
                alias:"First",
                type:"route",
                route:"ui-components.button-controls.link.min",
                path:{ path:"ui-components/button-controls/link/first/:first_id" },
                items:[ { id:"second",
                    alias:"Second",
                    type:"route",
                    path:{ path:"ui-components/button-controls/link/second/:second_id" },
                    route:"ui-components.button-controls.link.first.second" } ] } ] },
          { id:"checkbox",
            alias:"Checkbox",
            type:"route",
            route:"ui-components.button-controls.checkbox" },
          { id:"checkbox-group",
            alias:"Checkbox Group",
            type:"route",
            route:"ui-components.button-controls.checkbox-group" },
          { id:"help-button",
            alias:"Help Button",
            type:"route",
            route:"ui-components.button-controls.help-button" },
          { id:"radio-button",
            alias:"Radio Button",
            type:"route",
            route:"ui-components.button-controls.radio-button" },
          { id:"radio-button-group",
            alias:"Radio Button Group",
            type:"route",
            route:"ui-components.button-controls.radio-button-group" },
          { id:"toggle",
            alias:"Toggle",
            type:"route",
            route:"ui-components.button-controls.toggle" } ] },
      { id:"menu-controls",
        alias:"Menu Controls",
        type:"category",
        route:"ui-components.menu-controls",
        items:[ { id:"navigation",
            alias:"Navigation",
            type:"route",
            route:"ui-components.menu-controls.navigation",
            items:[ { id:"resource",
                alias:"Resource",
                type:"route",
                route:"ui-components.menu-controls.navigation.resource" },
              { id:"dashboard",
                alias:"Dashboard",
                type:"route",
                route:"ui-components.menu-controls.navigation.dashboard" } ] },
          { id:"command-menu",
            alias:"Command Menu",
            type:"route",
            route:"ui-components.menu-controls.command-menu" },
          { id:"context-menu",
            alias:"Context Menu",
            type:"route",
            route:"ui-components.menu-controls.context-menu" },
          { id:"disclosure-tab",
            alias:"Disclosure Tab",
            type:"route",
            route:"ui-components.menu-controls.disclosure-tab" } ] },
      { id:"indicator-controls",
        alias:"Indicator Controls",
        type:"category",
        route:"ui-components.indicator-controls",
        items:[ { id:"notifications",
            alias:"Notifications",
            type:"route",
            route:"ui-components.indicator-controls.notifications" },
          { id:"badges",
            alias:"Badges",
            type:"route",
            route:"ui-components.indicator-controls.badges" },
          { id:"progress-indicators",
            alias:"Progress Indicators",
            type:"route",
            route:"ui-components.indicator-controls.progress-indicators" },
          { id:"transient-messages",
            alias:"Transient Messages",
            type:"route",
            route:"ui-components.indicator-controls.transient-messages" } ] },
      { id:"input-controls",
        alias:"Input Controls",
        type:"category",
        route:"ui-components.input-controls",
        items:[ { id:"text",
            alias:"Text",
            type:"route",
            route:"ui-components.input-controls.text" },
          { id:"text-area",
            alias:"Text Area",
            type:"route",
            route:"ui-components.input-controls.text-area" },
          { id:"password",
            alias:"Password",
            type:"route",
            route:"ui-components.input-controls.password" },
          { id:"file-chooser",
            alias:"File Chooser",
            type:"route",
            route:"ui-components.input-controls.file-chooser" },
          { id:"select",
            alias:"Select",
            type:"route",
            route:"ui-components.input-controls.select" },
          { id:"slider",
            alias:"Slider",
            type:"route",
            route:"ui-components.input-controls.slider" },
          { id:"modal-dialog-input",
            alias:"Modal Dialog Input",
            type:"route",
            route:"ui-components.input-controls.modal-dialog-input",
            modalName:"frost-create-form",
            modal:{ withParams:"showModalForm",
              dialogClass:"frost-bunsen-form-dialog",
              actions:{ save:"save" } } } ] },
      { id:"text",
        alias:"Text",
        type:"category",
        route:"ui-components.text",
        items:[ { id:"tone",
            alias:"Tone",
            type:"route",
            route:"ui-components.text.tone" },
          { id:"capitalization",
            alias:"Capitalization",
            type:"route",
            route:"ui-components.text.capitalization" },
          { id:"titles",
            alias:"Titles",
            type:"route",
            route:"ui-components.text.titles" },
          { id:"labels",
            alias:"Labels",
            type:"route",
            route:"ui-components.text.labels" },
          { id:"units",
            alias:"Units",
            type:"route",
            route:"ui-components.text.units" },
          { id:"truncation",
            alias:"Truncation",
            type:"route",
            route:"ui-components.text.truncation" } ] },
      { id:"content-views",
        alias:"Content Views",
        type:"category",
        route:"ui-components.content-views",
        items:[ { id:"about-dialog",
            alias:"About Dialog",
            type:"route",
            route:"ui-components.content-views.about-dialog",
            modalName:"frost-about-dialog",
            modal:{ withParams:"isAboutVisible",
              dialogClass:"frost-bunsen-form-dialog",
              otherParams:[ { dialogType:"company" },
                { dialogTitle:"title" },
                { dialogMessage:"message" },
                { dialogServerMessage:"serverMessage" },
                { dialogCopyrightText:"copyrightText" },
                { dialogLicenseText:"licenseText" } ],
              actions:{ save:"dialogConfirmed" } } },
          { id:"accordion",
            alias:"Accordion",
            type:"route",
            route:"ui-components.content-views.accordion" },
          { id:"collapsible-section",
            alias:"Collapsible Section",
            type:"route",
            route:"ui-components.content-views.collapsible-section" },
          { id:"info-pods",
            alias:"Info Pods",
            type:"route",
            route:"ui-components.content-views.info-pods" },
          { id:"list",
            alias:"List",
            type:"route",
            route:"ui-components.content-views.list" },
          { id:"modal-dialog",
            alias:"Modal Dialog",
            type:"route",
            route:"ui-components.content-views.modal-dialog" },
          { id:"scrollbar",
            alias:"Scrollbar",
            type:"route",
            route:"ui-components.content-views.scrollbar" },
          { id:"table",
            alias:"Table",
            type:"route",
            route:"ui-components.content-views.table" },
          { id:"tabs",
            alias:"Tabs",
            type:"route",
            route:"ui-components.content-views.tabs" },
          { id:"info-bar",
            alias:"Info Bar",
            type:"route",
            route:"ui-components.content-views.info-bar" },
          { id:"sort",
            alias:"Sort",
            type:"route",
            route:"ui-components.content-views.sort" } ] },
      { id:"icons",
        alias:"Icons",
        type:"route",
        route:"ui-components.icons" } ] },
  { id:"contributing",
    alias:"Contributing",
    type:"category",
    route:"contributing",
    items:[ { id:"frost-guide",
        alias:"Frost Guide",
        type:"route",
        route:"contributing.frost-guide" },
      { id:"contributors",
        alias:"Contributors",
        type:"route",
        route:"contributing.contributors" },
      { id:"contributor",
        alias:"Contributor",
        type:"route",
        route:"contributing.contributor" } ] } ]
