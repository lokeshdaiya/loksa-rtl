const glob = require('glob');
const fs  = require('fs');
const scssfmt = require('scssfmt');
const flipSCSS = require('./index');

glob( `${__dirname}/**/*.{css,scss}`, (error, files) => {
    if(error) throw error;
    for (const filename of files) {
        const content = fs.readFileSync(filename).toString();
        if (content !== null && content !== undefined && content.length > 0) {
            rtlContent = flipSCSS(content);
            rtlContent =
            `
            ${content}


            [dir='rtl'] {
                ${rtlContent}
            }
            `
            fs.writeFileSync(filename, scssfmt(rtlContent));
        }
    }
    
})