module.exports = [
{id: 'overview', alias: 'Overview', type: 'category', route: 'overview', items: [
	{id: 'vision', alias: 'Vision', type: 'route', route: 'overview.vision'},
	{id: 'roadmap', alias: 'Roadmap', type: 'route', route: 'overview.roadmap'},
	{id: 'defects', alias: 'Defects', type: 'route', route: 'overview.defects'},
	{id: 'changelog', alias: 'Changelog', type: 'route', route: 'overview.changelog'}
]}, // 01-overview
{id: 'development', alias: 'Development', type: 'category', route: 'development', items: [
	{id: 'environment', alias: 'Environment', type: 'route', route: 'development.environment'},
	{id: 'app', alias: 'App', type: 'route', route: 'development.app'},
	{id: 'addon', alias: 'Addon', type: 'route', route: 'development.addon'},
	{id: 'learning', alias: 'Learning', type: 'route', route: 'development.learning'},
	{id: 'notes', alias: 'Notes', type: 'route', route: 'development.notes'}
]}, // 02-development
{id: 'design-strategy', alias: 'Design Strategy', type: 'category', route: 'design-strategy', items: [
	{id: 'usability-myths', alias: 'Usability Myths', type: 'route', route: 'design-strategy.usability-myths'},
	{id: 'branding', alias: 'Branding', type: 'route', route: 'design-strategy.branding'},

]}, // 03-design-strategy
{id: 'design-patterns', alias: 'Design Patterns', type: 'category', route: 'design-patterns', items: [
	{id: 'about', alias: 'About', type: 'route', route: 'design-patterns.about'},
	{id: 'application-bar', alias: 'Application Bar', type: 'route', route: 'design-patterns.application-bar'},
	{id: 'date:time-input', alias: 'Date:time Input', type: 'route', route: 'design-patterns.date:time-input'},
	{id: 'error-page', alias: 'Error Page', type: 'route', route: 'design-patterns.error-page'},
	{id: 'filtering', alias: 'Filtering', type: 'route', route: 'design-patterns.filtering'},
{id: 'forms', alias: 'Forms', type: 'category', route: 'design-patterns.forms', items: [
	{id: 'overview', alias: 'Overview', type: 'route', route: 'design-patterns.forms.overview'},
	{id: 'create', alias: 'Create', type: 'route', route: 'design-patterns.forms.create'},
	{id: 'edit', alias: 'Edit', type: 'route', route: 'design-patterns.forms.edit'}
]}, // 06-forms
	{id: 'global-search', alias: 'Global Search', type: 'route', route: 'design-patterns.global-search'},
	{id: 'info-bar', alias: 'Info Bar', type: 'route', route: 'design-patterns.info-bar'},
	{id: 'login-logout', alias: 'Login Logout', type: 'route', route: 'design-patterns.login-logout'},
	{id: 'notifications', alias: 'Notifications', type: 'route', route: 'design-patterns.notifications'},
{id: 'object-browser', alias: 'Object Browser', type: 'category', route: 'design-patterns.object-browser', items: [
	{id: 'overview', alias: 'Overview', type: 'route', route: 'design-patterns.object-browser.overview'},
	{id: 'list', alias: 'List', type: 'route', route: 'design-patterns.object-browser.list'},
	{id: 'table', alias: 'Table', type: 'route', route: 'design-patterns.object-browser.table'},

]}, // 14-object-browser
	{id: 'object-details', alias: 'Object Details', type: 'route', route: 'design-patterns.object-details'},

]}, // 05-design-patterns
{id: 'UI-components', alias: 'UI Components', type: 'category', route: 'UI-components', items: [
{id: 'button-controls', alias: 'Button Controls', type: 'category', route: 'UI-components.button-controls', items: [
	{id: 'button', alias: 'Button', type: 'route', route: 'UI-components.button-controls.button'},
	{id: 'link', alias: 'Link', type: 'route', route: 'UI-components.button-controls.link'},
	{id: 'checkbox', alias: 'Checkbox', type: 'route', route: 'UI-components.button-controls.checkbox'},
	{id: 'checkbox-group', alias: 'Checkbox Group', type: 'route', route: 'UI-components.button-controls.checkbox-group'},
	{id: 'help-button', alias: 'Help Button', type: 'route', route: 'UI-components.button-controls.help-button'},
	{id: 'radio-button', alias: 'Radio Button', type: 'route', route: 'UI-components.button-controls.radio-button'},
	{id: 'radio-button-group', alias: 'Radio Button Group', type: 'route', route: 'UI-components.button-controls.radio-button-group'},
	{id: 'toggle', alias: 'Toggle', type: 'route', route: 'UI-components.button-controls.toggle'}
]}, // 01-button-controls
{id: 'menu-controls', alias: 'Menu Controls', type: 'category', route: 'UI-components.menu-controls', items: [
	{id: 'command-menu', alias: 'Command Menu', type: 'route', route: 'UI-components.menu-controls.command-menu'},
	{id: 'context-menu', alias: 'Context Menu', type: 'route', route: 'UI-components.menu-controls.context-menu'},
	{id: 'disclosure-tab', alias: 'Disclosure Tab', type: 'route', route: 'UI-components.menu-controls.disclosure-tab'}
]}, // 02-menu-controls
{id: 'indicator-controls', alias: 'Indicator Controls', type: 'category', route: 'UI-components.indicator-controls', items: [
	{id: 'notifications', alias: 'Notifications', type: 'route', route: 'UI-components.indicator-controls.notifications'},
	{id: 'progress-indicators', alias: 'Progress Indicators', type: 'route', route: 'UI-components.indicator-controls.progress-indicators'},
	{id: 'loading', alias: 'Loading', type: 'route', route: 'UI-components.indicator-controls.loading'},
	{id: 'badge', alias: 'Badge', type: 'route', route: 'UI-components.indicator-controls.badge'},

]}, // 03-indicator-controls
{id: 'input-controls', alias: 'Input Controls', type: 'category', route: 'UI-components.input-controls', items: [
	{id: 'text', alias: 'Text', type: 'route', route: 'UI-components.input-controls.text'},
	{id: 'text-area', alias: 'Text Area', type: 'route', route: 'UI-components.input-controls.text-area'},
	{id: 'password', alias: 'Password', type: 'route', route: 'UI-components.input-controls.password'},
	{id: 'file-chooser', alias: 'File Chooser', type: 'route', route: 'UI-components.input-controls.file-chooser'},
	{id: 'login', alias: 'Login', type: 'route', route: 'UI-components.input-controls.login'},
	{id: 'select', alias: 'Select', type: 'route', route: 'UI-components.input-controls.select'},
	{id: 'slider', alias: 'Slider', type: 'route', route: 'UI-components.input-controls.slider'},
	{id: 'date-picker', alias: 'Date Picker', type: 'route', route: 'UI-components.input-controls.date-picker'}
]}, // 04-input-controls
{id: 'text', alias: 'Text', type: 'category', route: 'UI-components.text', items: [
	{id: 'tone', alias: 'Tone', type: 'route', route: 'UI-components.text.tone'},
	{id: 'capitalization', alias: 'Capitalization', type: 'route', route: 'UI-components.text.capitalization'},
	{id: 'titles', alias: 'Titles', type: 'route', route: 'UI-components.text.titles'},
	{id: 'labels', alias: 'Labels', type: 'route', route: 'UI-components.text.labels'},
	{id: 'units', alias: 'Units', type: 'route', route: 'UI-components.text.units'},
	{id: 'truncation', alias: 'Truncation', type: 'route', route: 'UI-components.text.truncation'}
]}, // 05-text
{id: 'content-views', alias: 'Content Views', type: 'category', route: 'UI-components.content-views', items: [
	{id: 'accordion', alias: 'Accordion', type: 'route', route: 'UI-components.content-views.accordion'},
	{id: 'collapsible-section', alias: 'Collapsible Section', type: 'route', route: 'UI-components.content-views.collapsible-section'},
	{id: 'info-pods', alias: 'Info Pods', type: 'route', route: 'UI-components.content-views.info-pods'},
	{id: 'list', alias: 'List', type: 'route', route: 'UI-components.content-views.list'},
	{id: 'modal-dialog', alias: 'Modal Dialog', type: 'route', route: 'UI-components.content-views.modal-dialog'},
	{id: 'scrollbar', alias: 'Scrollbar', type: 'route', route: 'UI-components.content-views.scrollbar'},
	{id: 'table', alias: 'Table', type: 'route', route: 'UI-components.content-views.table'},
	{id: 'tabs', alias: 'Tabs', type: 'route', route: 'UI-components.content-views.tabs'},
	{id: 'info-bar', alias: 'Info Bar', type: 'route', route: 'UI-components.content-views.info-bar'},
	{id: 'application-bar', alias: 'Application Bar', type: 'route', route: 'UI-components.content-views.application-bar'},
	{id: 'about-dialog', alias: 'About Dialog', type: 'route', route: 'UI-components.content-views.about-dialog'}
]}, // 06-content-views

]}, // 06-UI-components
{id: 'contributing', alias: 'Contributing', type: 'category', route: 'contributing', items: [
	{id: 'frost-guide', alias: 'Frost Guide', type: 'route', route: 'contributing.frost-guide'},
	{id: 'contributors', alias: 'Contributors', type: 'route', route: 'contributing.contributors'},
  	{id: 'contributors', alias: 'Contributors', type: 'route', route: 'contributing.contributor'},
]}, // 08-contributing
];