/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  isCategoryOpen
} from 'frost-guide/helpers/is-category-open';

describe('IsCategoryOpenHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = isCategoryOpen(42);
    expect(result).to.be.ok;
  });
});
