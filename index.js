let { parse, stringify } = require('scss-parser');
let  { flipProperty, FLIPPROPERTIES }  =  require('./lib/flipProperty');
const { FLIPVALUES }  = require('./lib/flipValueOf')

function flip(css) {
    if (css.value && Array.isArray(css.value)) {
        css.value.forEach(declaration => {
            if (declaration.type === "declaration") {
                const property = declaration.value[0];
                if(property.type ==="property") {
                  const propertyName = property.value[0].value;
                  // flip property 
                  // ex: margin-left => margin-right
                  if(FLIPPROPERTIES[propertyName]) {
                    property.value[0] = {...property.value[0]}
                    property.value[0].value = flipProperty(property.value[0].value);    
                  }
                  // flip values
                  // 2px 3px 4px 5px => 2px 5px 4px 3px
                  if(FLIPVALUES[propertyName]) {
                    const propertyValue = declaration.value[2];  
                    FLIPVALUES[propertyName](propertyValue);
                  }
               }               
            }
            else {
                flip(declaration)
            }
        });
    }
    return css;
}

function flipSCSS(scss) {
    // Create an AST
  let ast = parse(scss);
  const rtlSCSS =  stringify(flip(ast));
  return rtlSCSS;
}


module.exports = flipSCSS;



