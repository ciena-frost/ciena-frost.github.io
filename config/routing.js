module.exports = [ 
{id: 'overview', alias: 'Overview', type: 'category', route: 'overview', items: [ 
	{id: 'vision', alias: 'Vision', type: 'route', route: 'overview.vision'},
	{id: 'roadmap', alias: 'Roadmap', type: 'route', route: 'overview.roadmap'},
	{id: 'defects', alias: 'Defects', type: 'route', route: 'overview.defects'},
	{id: 'changelog', alias: 'Changelog', type: 'route', route: 'overview.changelog'},

]}, // 01-overview
{id: 'development', alias: 'Development', type: 'category', route: 'development', items: [ 
	{id: 'environment', alias: 'Environment', type: 'route', route: 'development.environment'},
	{id: 'app', alias: 'App', type: 'route', route: 'development.app'},
	{id: 'addon', alias: 'Addon', type: 'route', route: 'development.addon'},
	{id: 'learning', alias: 'Learning', type: 'route', route: 'development.learning'},
	{id: 'notes', alias: 'Notes', type: 'route', route: 'development.notes'},

]}, // 02-development
{id: 'design-strategy', alias: 'Design Strategy', type: 'category', route: 'design-strategy', items: [ 
	{id: 'design-principles', alias: 'Design Principles', type: 'route', route: 'design-strategy.design-principles'},
	{id: 'personas', alias: 'Personas', type: 'route', route: 'design-strategy.personas'},
	{id: 'usability-myths', alias: 'Usability Myths', type: 'route', route: 'design-strategy.usability-myths'},
	{id: 'design-philosophy', alias: 'Design Philosophy', type: 'route', route: 'design-strategy.design-philosophy'},
	{id: 'branding', alias: 'Branding', type: 'route', route: 'design-strategy.branding'},

]}, // 03-design-strategy
{id: 'design-conventions', alias: 'Design Conventions', type: 'category', route: 'design-conventions', items: [ 
	{id: 'icons', alias: 'Icons', type: 'route', route: 'design-conventions.icons'},
	{id: 'spacing', alias: 'Spacing', type: 'route', route: 'design-conventions.spacing'},
	{id: 'color', alias: 'Color', type: 'route', route: 'design-conventions.color'},
	{id: 'typography', alias: 'Typography', type: 'route', route: 'design-conventions.typography'},
	{id: 'selection-indication', alias: 'Selection Indication', type: 'route', route: 'design-conventions.selection-indication'},
	{id: 'animation', alias: 'Animation', type: 'route', route: 'design-conventions.animation'},

]}, // 04-design-conventions
{id: 'design-patterns', alias: 'Design Patterns', type: 'category', route: 'design-patterns', items: [ 
	{id: 'about', alias: 'About', type: 'route', route: 'design-patterns.about'},
	{id: 'screen-architecture', alias: 'Screen Architecture', type: 'route', route: 'design-patterns.screen-architecture'},
	{id: 'application-bar', alias: 'Application Bar', type: 'route', route: 'design-patterns.application-bar'},
	{id: 'error-page', alias: 'Error Page', type: 'route', route: 'design-patterns.error-page'},
	{id: 'filtering', alias: 'Filtering', type: 'route', route: 'design-patterns.filtering'},
	{id: 'forms', alias: 'Forms', type: 'route', route: 'design-patterns.forms'},
	{id: 'global-search', alias: 'Global Search', type: 'route', route: 'design-patterns.global-search'},
	{id: 'info-bar', alias: 'Info Bar', type: 'route', route: 'design-patterns.info-bar'},
	{id: 'login-logout', alias: 'Login Logout', type: 'route', route: 'design-patterns.login-logout'},
	{id: 'landing-page', alias: 'Landing Page', type: 'route', route: 'design-patterns.landing-page'},
	{id: 'map-data-pods', alias: 'Map Data Pods', type: 'route', route: 'design-patterns.map-data-pods'},
	{id: 'navigation', alias: 'Navigation', type: 'route', route: 'design-patterns.navigation'},
	{id: 'notifications', alias: 'Notifications', type: 'route', route: 'design-patterns.notifications'},
{id: 'object-browser', alias: 'Object Browser', type: 'category', route: 'design-patterns.object-browser', items: [ 

]}, // 14-object-browser
	{id: 'object-details', alias: 'Object Details', type: 'route', route: 'design-patterns.object-details'},

]}, // 05-design-patterns
{id: 'ui-components', alias: 'Ui Components', type: 'category', route: 'ui-components', items: [ 
{id: 'button-controls', alias: 'Button Controls', type: 'category', route: 'ui-components.button-controls', items: [ 
	{id: 'button', alias: 'Button', type: 'route', route: 'ui-components.button-controls.button'},
	{id: 'link', alias: 'Link', type: 'route', route: 'ui-components.button-controls.link'},
	{id: 'checkbox', alias: 'Checkbox', type: 'route', route: 'ui-components.button-controls.checkbox'},
	{id: 'checkbox-group', alias: 'Checkbox Group', type: 'route', route: 'ui-components.button-controls.checkbox-group'},
	{id: 'help-button', alias: 'Help Button', type: 'route', route: 'ui-components.button-controls.help-button'},
	{id: 'radio-button', alias: 'Radio Button', type: 'route', route: 'ui-components.button-controls.radio-button'},
	{id: 'radio-button-group', alias: 'Radio Button Group', type: 'route', route: 'ui-components.button-controls.radio-button-group'},
	{id: 'toggle', alias: 'Toggle', type: 'route', route: 'ui-components.button-controls.toggle'},

]}, // 01-button-controls
{id: 'menu-controls', alias: 'Menu Controls', type: 'category', route: 'ui-components.menu-controls', items: [ 
	{id: 'command-menu', alias: 'Command Menu', type: 'route', route: 'ui-components.menu-controls.command-menu'},
	{id: 'context-menu', alias: 'Context Menu', type: 'route', route: 'ui-components.menu-controls.context-menu'},
	{id: 'disclosure-tab', alias: 'Disclosure Tab', type: 'route', route: 'ui-components.menu-controls.disclosure-tab'},

]}, // 02-menu-controls
{id: 'indicator-controls', alias: 'Indicator Controls', type: 'category', route: 'ui-components.indicator-controls', items: [ 
	{id: 'notifications', alias: 'Notifications', type: 'route', route: 'ui-components.indicator-controls.notifications'},
	{id: 'progress-indicators', alias: 'Progress Indicators', type: 'route', route: 'ui-components.indicator-controls.progress-indicators'},

]}, // 03-indicator-controls
{id: 'input-controls', alias: 'Input Controls', type: 'category', route: 'ui-components.input-controls', items: [ 
	{id: 'text', alias: 'Text', type: 'route', route: 'ui-components.input-controls.text'},
	{id: 'text-area', alias: 'Text Area', type: 'route', route: 'ui-components.input-controls.text-area'},
	{id: 'password', alias: 'Password', type: 'route', route: 'ui-components.input-controls.password'},
	{id: 'file-chooser', alias: 'File Chooser', type: 'route', route: 'ui-components.input-controls.file-chooser'},
	{id: 'select', alias: 'Select', type: 'route', route: 'ui-components.input-controls.select'},
	{id: 'slider', alias: 'Slider', type: 'route', route: 'ui-components.input-controls.slider'},

]}, // 04-input-controls
{id: 'text', alias: 'Text', type: 'category', route: 'ui-components.text', items: [ 
	{id: 'tone', alias: 'Tone', type: 'route', route: 'ui-components.text.tone'},
	{id: 'capitalization', alias: 'Capitalization', type: 'route', route: 'ui-components.text.capitalization'},
	{id: 'titles', alias: 'Titles', type: 'route', route: 'ui-components.text.titles'},
	{id: 'labels', alias: 'Labels', type: 'route', route: 'ui-components.text.labels'},
	{id: 'units', alias: 'Units', type: 'route', route: 'ui-components.text.units'},
	{id: 'truncation', alias: 'Truncation', type: 'route', route: 'ui-components.text.truncation'},

]}, // 05-text
{id: 'content-views', alias: 'Content Views', type: 'category', route: 'ui-components.content-views', items: [ 
	{id: 'accordion', alias: 'Accordion', type: 'route', route: 'ui-components.content-views.accordion'},
	{id: 'collapsible-section', alias: 'Collapsible Section', type: 'route', route: 'ui-components.content-views.collapsible-section'},
	{id: 'info-pods', alias: 'Info Pods', type: 'route', route: 'ui-components.content-views.info-pods'},
	{id: 'list', alias: 'List', type: 'route', route: 'ui-components.content-views.list'},
	{id: 'modal-dialog', alias: 'Modal Dialog', type: 'route', route: 'ui-components.content-views.modal-dialog'},
	{id: 'scrollbar', alias: 'Scrollbar', type: 'route', route: 'ui-components.content-views.scrollbar'},
	{id: 'table', alias: 'Table', type: 'route', route: 'ui-components.content-views.table'},
	{id: 'tabs', alias: 'Tabs', type: 'route', route: 'ui-components.content-views.tabs'},

]}, // 06-content-views

]}, // 06-ui-components
{id: 'data-visualization', alias: 'Data Visualization', type: 'category', route: 'data-visualization', items: [ 
	{id: 'defender-view', alias: 'Defender View', type: 'route', route: 'data-visualization.defender-view'},
	{id: 'charts', alias: 'Charts', type: 'route', route: 'data-visualization.charts'},
	{id: 'geographic-topology', alias: 'Geographic Topology', type: 'route', route: 'data-visualization.geographic-topology'},
	{id: 'network-objects', alias: 'Network Objects', type: 'route', route: 'data-visualization.network-objects'},
	{id: 'physical-equipment', alias: 'Physical Equipment', type: 'route', route: 'data-visualization.physical-equipment'},
	{id: 'subway-map', alias: 'Subway Map', type: 'route', route: 'data-visualization.subway-map'},
	{id: 'subway-line', alias: 'Subway Line', type: 'route', route: 'data-visualization.subway-line'},
	{id: 'trail-analyzer', alias: 'Trail Analyzer', type: 'route', route: 'data-visualization.trail-analyzer'},

]}, // 07-data-visualization
	{id: 'Tester', alias: 'Tester', type: 'route', route: 'Tester'},
	{id: 'terminology', alias: 'Terminology', type: 'route', route: 'terminology'},
];