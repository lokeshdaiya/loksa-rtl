/**
 * Flip a `left` or `right` value.
 *
 * @param {String} value Value
 * @return {String}
 */

module.exports = function (value) {
  if(value.value[1] && value.value[1].value) {
    value.value[1] = { ...value.value[1] };
    switch (value.value[1].value) {
      case "left":
          value.value[1].value = "right";
        break;
        case "right":
          value.value[1].value = "left";
        break;
      default:
        break;
    }
  }
  return value;
};
