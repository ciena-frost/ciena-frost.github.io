/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-scroll',
  'Integration: FrostScrollComponent',
  {
    integration: true
  },
  function () {
    it('renders and triggers action at the end of a scroll window', function () {
      this.set('scroll-end', false);
      this.on('yEndReached', ()=> this.set('scroll-end', true));
      this.render(hbs`
        <div style="width:800px; height:400px; border: 1px grey solid;">
              {{#frost-scroll class='full' on-scroll-y-end=(action 'yEndReached')}}
                {{frost-svg path="frost/add" class="dummy-svg-huge"}}
              {{/frost-scroll}}
            </div>
      `);
      Ember.run(()=> this.$('.frost-scroll').trigger('ps-y-reach-end'));
      expect(this.get('scroll-end')).to.be.true;
    });
  }
);
