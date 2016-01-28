/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  routeBreadcrumb
} from 'frost-guide/helpers/route-breadcrumb';

describe('RouteBreadcrumbHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = routeBreadcrumb(42);
    expect(result).to.be.ok;
  });
});
