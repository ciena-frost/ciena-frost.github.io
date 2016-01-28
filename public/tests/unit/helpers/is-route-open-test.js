/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  isRouteOpen
} from 'frost-guide/helpers/is-route-open';

describe('IsRouteOpenHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = isRouteOpen(42);
    expect(result).to.be.ok;
  });
});
