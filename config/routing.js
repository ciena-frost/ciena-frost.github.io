module.exports = [ 
{id: 'overview', alias: 'Overview', type: 'category', route: 'overview', items: [ 
	{id: 'vision', alias: 'vision', type: 'route', route: 'overview.vision'},
	{id: 'roadmap', alias: 'roadmap', type: 'route', route: 'overview.roadmap'},
	{id: 'defects', alias: 'defects', type: 'route', route: 'overview.defects'},
	{id: 'changelog', alias: 'changelog', type: 'route', route: 'overview.changelog'},

]}, // 01-overview
{id: 'development', alias: 'Development', type: 'category', route: 'development', items: [ 
	{id: 'environment', alias: 'environment', type: 'route', route: 'development.environment'},
	{id: 'app', alias: 'app', type: 'route', route: 'development.app'},
	{id: 'addon', alias: 'addon', type: 'route', route: 'development.addon'},
	{id: 'learning', alias: 'learning', type: 'route', route: 'development.learning'},
	{id: 'notes', alias: 'notes', type: 'route', route: 'development.notes'},

]}, // 02-development
{id: 'design-strategy', alias: 'Design Strategy', type: 'category', route: 'design-strategy', items: [ 
	{id: 'design-principles', alias: 'design principles', type: 'route', route: 'design-strategy.design-principles'},
	{id: 'personas', alias: 'personas', type: 'route', route: 'design-strategy.personas'},
	{id: 'usability-myths', alias: 'usability myths', type: 'route', route: 'design-strategy.usability-myths'},
	{id: 'design-philosophy', alias: 'design philosophy', type: 'route', route: 'design-strategy.design-philosophy'},
	{id: 'branding', alias: 'branding', type: 'route', route: 'design-strategy.branding'},

]}, // 03-design-strategy
{id: 'design-conventions', alias: 'Design Conventions', type: 'category', route: 'design-conventions', items: [ 
	{id: 'icons', alias: 'icons', type: 'route', route: 'design-conventions.icons'},
	{id: 'spacing', alias: 'spacing', type: 'route', route: 'design-conventions.spacing'},
	{id: 'color', alias: 'color', type: 'route', route: 'design-conventions.color'},
	{id: 'typography', alias: 'typography', type: 'route', route: 'design-conventions.typography'},
	{id: 'selection-indication', alias: 'selection indication', type: 'route', route: 'design-conventions.selection-indication'},
	{id: 'animation', alias: 'animation', type: 'route', route: 'design-conventions.animation'},

]}, // 04-design-conventions
{id: 'design-patterns', alias: 'Design Patterns', type: 'category', route: 'design-patterns', items: [ 
	{id: 'about', alias: 'about', type: 'route', route: 'design-patterns.about'},
	{id: 'screen-architecture', alias: 'screen architecture', type: 'route', route: 'design-patterns.screen-architecture'},
	{id: 'application-bar', alias: 'application bar', type: 'route', route: 'design-patterns.application-bar'},
	{id: 'error-page', alias: 'error page', type: 'route', route: 'design-patterns.error-page'},
	{id: 'filtering', alias: 'filtering', type: 'route', route: 'design-patterns.filtering'},
	{id: 'forms', alias: 'forms', type: 'route', route: 'design-patterns.forms'},
	{id: 'global-search', alias: 'global search', type: 'route', route: 'design-patterns.global-search'},
	{id: 'info-bar', alias: 'info bar', type: 'route', route: 'design-patterns.info-bar'},
	{id: 'login-logout', alias: 'login logout', type: 'route', route: 'design-patterns.login-logout'},
	{id: 'landing-page', alias: 'landing page', type: 'route', route: 'design-patterns.landing-page'},
	{id: 'map-data-pods', alias: 'map data pods', type: 'route', route: 'design-patterns.map-data-pods'},
	{id: 'navigation', alias: 'navigation', type: 'route', route: 'design-patterns.navigation'},
	{id: 'notifications', alias: 'notifications', type: 'route', route: 'design-patterns.notifications'},
{id: 'object-browser', alias: 'Object Browser', type: 'category', route: 'design-patterns.object-browser', items: [ 
	{id: 'overview', alias: 'overview', type: 'route', route: 'design-patterns.object-browser.overview'},
	{id: 'list', alias: 'list', type: 'route', route: 'design-patterns.object-browser.list'},
	{id: 'list-samples', alias: 'list samples', type: 'route', route: 'design-patterns.object-browser.list-samples'},
	{id: 'table', alias: 'table', type: 'route', route: 'design-patterns.object-browser.table'},

]}, // 14-object-browser
	{id: 'object-details', alias: 'object details', type: 'route', route: 'design-patterns.object-details'},

]}, // 05-design-patterns
{id: 'ui-components', alias: 'Ui Components', type: 'category', route: 'ui-components', items: [ 
{id: 'button-controls', alias: 'Button Controls', type: 'category', route: 'ui-components.button-controls', items: [ 
	{id: 'button', alias: 'button', type: 'route', route: 'ui-components.button-controls.button'},
	{id: 'link', alias: 'link', type: 'route', route: 'ui-components.button-controls.link'},
	{id: 'checkbox', alias: 'checkbox', type: 'route', route: 'ui-components.button-controls.checkbox'},
	{id: 'checkbox-group', alias: 'checkbox group', type: 'route', route: 'ui-components.button-controls.checkbox-group'},
	{id: 'help-button', alias: 'help button', type: 'route', route: 'ui-components.button-controls.help-button'},
	{id: 'radio-button', alias: 'radio button', type: 'route', route: 'ui-components.button-controls.radio-button'},
	{id: 'radio-button-group', alias: 'radio button group', type: 'route', route: 'ui-components.button-controls.radio-button-group'},
	{id: 'toggle', alias: 'toggle', type: 'route', route: 'ui-components.button-controls.toggle'},

]}, // 01-button-controls
{id: 'menu-controls', alias: 'Menu Controls', type: 'category', route: 'ui-components.menu-controls', items: [ 
	{id: 'command-menu', alias: 'command menu', type: 'route', route: 'ui-components.menu-controls.command-menu'},
	{id: 'context-menu', alias: 'context menu', type: 'route', route: 'ui-components.menu-controls.context-menu'},
	{id: 'disclosure-tab', alias: 'disclosure tab', type: 'route', route: 'ui-components.menu-controls.disclosure-tab'},

]}, // 02-menu-controls
{id: 'indicator-controls', alias: 'Indicator Controls', type: 'category', route: 'ui-components.indicator-controls', items: [ 
	{id: 'notifications', alias: 'notifications', type: 'route', route: 'ui-components.indicator-controls.notifications'},
	{id: 'progress-indicators', alias: 'progress indicators', type: 'route', route: 'ui-components.indicator-controls.progress-indicators'},

]}, // 03-indicator-controls
{id: 'input-controls', alias: 'Input Controls', type: 'category', route: 'ui-components.input-controls', items: [ 
	{id: 'text', alias: 'text', type: 'route', route: 'ui-components.input-controls.text'},
	{id: 'text-area', alias: 'text area', type: 'route', route: 'ui-components.input-controls.text-area'},
	{id: 'password', alias: 'password', type: 'route', route: 'ui-components.input-controls.password'},
	{id: 'file-chooser', alias: 'file chooser', type: 'route', route: 'ui-components.input-controls.file-chooser'},
	{id: 'select', alias: 'select', type: 'route', route: 'ui-components.input-controls.select'},
	{id: 'slider', alias: 'slider', type: 'route', route: 'ui-components.input-controls.slider'},

]}, // 04-input-controls
{id: 'text', alias: 'Text', type: 'category', route: 'ui-components.text', items: [ 
	{id: 'tone', alias: 'tone', type: 'route', route: 'ui-components.text.tone'},
	{id: 'capitalization', alias: 'capitalization', type: 'route', route: 'ui-components.text.capitalization'},
	{id: 'titles', alias: 'titles', type: 'route', route: 'ui-components.text.titles'},
	{id: 'labels', alias: 'labels', type: 'route', route: 'ui-components.text.labels'},
	{id: 'units', alias: 'units', type: 'route', route: 'ui-components.text.units'},
	{id: 'truncation', alias: 'truncation', type: 'route', route: 'ui-components.text.truncation'},

]}, // 05-text
{id: 'content-views', alias: 'Content Views', type: 'category', route: 'ui-components.content-views', items: [ 
	{id: 'accordion', alias: 'accordion', type: 'route', route: 'ui-components.content-views.accordion'},
	{id: 'collapsible-section', alias: 'collapsible section', type: 'route', route: 'ui-components.content-views.collapsible-section'},
	{id: 'info-pods', alias: 'info pods', type: 'route', route: 'ui-components.content-views.info-pods'},
	{id: 'list', alias: 'list', type: 'route', route: 'ui-components.content-views.list'},
	{id: 'modal-dialog', alias: 'modal dialog', type: 'route', route: 'ui-components.content-views.modal-dialog'},
	{id: 'scrollbar', alias: 'scrollbar', type: 'route', route: 'ui-components.content-views.scrollbar'},
	{id: 'table', alias: 'table', type: 'route', route: 'ui-components.content-views.table'},
	{id: 'tabs', alias: 'tabs', type: 'route', route: 'ui-components.content-views.tabs'},

]}, // 06-content-views

]}, // 06-ui-components
{id: 'data-visualization', alias: 'Data Visualization', type: 'category', route: 'data-visualization', items: [ 
	{id: 'defender-view', alias: 'defender view', type: 'route', route: 'data-visualization.defender-view'},
	{id: 'charts', alias: 'charts', type: 'route', route: 'data-visualization.charts'},
	{id: 'geographic-topology', alias: 'geographic topology', type: 'route', route: 'data-visualization.geographic-topology'},
	{id: 'network-objects', alias: 'network objects', type: 'route', route: 'data-visualization.network-objects'},
	{id: 'physical-equipment', alias: 'physical equipment', type: 'route', route: 'data-visualization.physical-equipment'},
	{id: 'subway-map', alias: 'subway map', type: 'route', route: 'data-visualization.subway-map'},
	{id: 'subway-line', alias: 'subway line', type: 'route', route: 'data-visualization.subway-line'},
	{id: 'trail-analyzer', alias: 'trail analyzer', type: 'route', route: 'data-visualization.trail-analyzer'},

]}, // 07-data-visualization
	{id: 'terminology', alias: 'terminology', type: 'route', route: 'terminology'},
];