/**
 * Flip a `border-radius` value.
 *
 * @param {String} value Value
 * @return {String}
 */

module.exports = function (value) {
  let temp;
  let operatorResult = value.value.find(item => item.type === "operator" && item.value === "/");
  if(operatorResult) {
      // check if operator is on 4th index
      // pattern 2px / 3px 4px => 2px / 4px 3px
      if(value.value[4] && value.value[4].value === "/") {
         temp = value.value[6];
         value.value[6] = value.value[9];
         value.value[9] = temp;
         return value;
      }

       // check if operator is on 7th index
      // pattern 2px 5px / 3px 4px => 5px 2px / 4px 3px
      if(value.value[7] && value.value[7].value === "/") {
        temp = value.value[1];
        value.value[1] = value.value[4];
        value.value[4] = temp;
        return value;
     }


  }

 const elements =  value.value.filter(item => item.type=="number");
  
  if (elements && elements.length == 2) {
    // 1px 2px => 2px 1px
    temp = value.value[4];
    value.value[4] = value.value[1];
    value.value[1] = temp;
  }

  if (elements && elements.length == 4) {
    // 1px 2px 3px 4px => 1px 4px 3px 2px
    temp = value.value[4];
    value.value[4] = value.value[10];
    value.value[10] = temp;
  }

};

