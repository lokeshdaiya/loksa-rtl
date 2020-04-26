/**
 * Flip a value consisting of 4 parts.
 *
 * @param {String} value Value
 * @return {String}
 */

module.exports = function (value) {
  var elements =  value.value.filter(item => item.type=="number");

  if (elements && elements.length == 4) {
    // 1px 2px 3px 4px => 1px 4px 3px 2px
    const fourthValue = value.value[4];
    value.value[4] = value.value[10];
    value.value[10] = fourthValue;
  }
  return value;
};
