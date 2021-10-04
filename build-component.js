const fs = require('fs-extra');
const concat = require('concat');


build = async () =>{
    const files = [
        './dist/angular-web-component/runtime.js',
        './dist/angular-web-component/polyfills.js',
        './dist/angular-web-component/es2015-polyfills.js',
        './dist/angular-web-component/scripts.js',
        './dist/angular-web-component/main.js'
      ];
    
      await fs.ensureDir('web-components');
      await concat(files, 'web-components/news-wc.js');
      await concat(files, 'web-components/button-wc.js');
      await concat(files, 'web-components/page-title-wc.js');
      await concat(files, 'web-components/accordion-wc.js');
}

build();

