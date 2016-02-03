import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['selectedTab'],
  selectedTab: 'readme',

  actions: {
    action() {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      });
    },
    tabSelected(tab) {
      this.set('selectedTab', tab);
    }
  },

  text: {
    alias: 'text',
    template: `
      {{#frost-button <a>autofocus disabled</a>=isDisabled class=<c>'primary small'</c> <a>on-click</a>=(<e>action</e> '<ac>closure</ac>')}}
        &lt;div class=<c>'text'</c>&gtText&lt;/div&gt;
      {{/frost-button}}
     `
  },

  icon: {
    alias: 'icon',
    template: `
      {{#frost-button class=<c>'tertiary medium'</c> <a>on-click</a>=(<e>action</e> '<ac>closure</ac>')}}
        &lt;div class=<c>'icon'</c>&gt;
          {{frost-svg path='frost/add'}}
        &lt;/div&gt;
      {{/frost-button}}
     `
  },

  icontext: {
    alias: 'icon-text',
    template: `
      {{#frost-button class=<c>'secondary large'</c> <a>on-click</a>=(<e>action</e> '<ac>closure</ac>')}}
        &lt;div class=<c>'icon-text'</c>&gt;
          {{frost-svg path='frost/add'}}
          &lt;div class=<c>'text'</c>&gtText&lt/div&gt;
        &lt;/div&gt;
      {{/frost-button}}
     `
  },

  info1: {
    alias: 'info',
    template: `
      {{#frost-button class=<c>'primary extra-large'</c> <a>on-click</a>=(<e>action</e> '<ac>closure</ac>')}}
        &lt;div class=<c>'info'</c>&gt;
          {{frost-svg path='frost/add'}}
          &lt;div class=<c>'content'</c>&gt;
            &lt;div class=<c>'alias'</c>&gt;Info alias&lt;/div&gt;
            &lt;div class=<c>'details'</c>&gt;Info details&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      {{/frost-button}}
     `
  }
});
