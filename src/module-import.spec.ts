import * as pathToRegexp from 'path-to-regexp';

describe('TEST', () => {
  it('module alias import of "path-to-regexp" should be a function', () => {
    // if this fails it means that pathToRegexp is an object with a "default" property that is the expected function
    expect(typeof pathToRegexp).toEqual('function');
  });
});