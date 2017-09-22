/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.__store = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.__store[key] = val;
  return null;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  const store = this.__store;
  let result = 0;
  for (let attr in store) {
    if (store.hasOwnProperty(attr) && attr.indexOf(prefix) === 0) {
      result += +store[attr];
    }
  }
  return result;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

module.exports = MapSum;
