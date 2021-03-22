const fs = require('fs');
const replace = require('gulp-replace');
const slash = require('slash');
const {dest, series, src, watch} = require('gulp');
const { buildDocfx } = require('igniteui-docfx-template');
const path = require('path');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;


const LANG = argv.lang === undefined ? "en" : argv.lang;
const DOCFX_BASE = {
    en: './en',
    jp: './jp'
};

const DOCFX_PATH =`${DOCFX_BASE[LANG]}`;
const DOCFX_TEMPLATE_GLOBAL = slash(path.join(__dirname, 'node_modules', 'igniteui-docfx-template', 'template', 'bundling.global.json'));
const DOCFX_SITE = `${DOCFX_PATH}/_site`;

const buildSite = () => {
  return buildDocfx({
    siteDir: DOCFX_SITE,
    projectDir: DOCFX_PATH,
    environment: process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null
  });
}

const removeHTMLExtensionFromSiteMap = () => {
  return src([DOCFX_SITE + '/sitemap.xml'])
      .pipe(replace(/\.html/g, ''))
      .pipe(dest(DOCFX_SITE));
};

const watchFiles = (done) => {

    watch([
      `${DOCFX_TEMPLATE_GLOBAL}`,
      `${DOCFX_PATH}/**/*.md`, 
      `${DOCFX_PATH}/codegen/**/*`,
      `${DOCFX_PATH}/components/**/*`, 
      `${DOCFX_PATH}/patterns/**/*`, 
      `${DOCFX_PATH}/style/**/*`],
      {delay: 3000},
      series(build, browserSyncReload));
    done();
}

const init = (done) => {
    browserSync.init({
        server: {
            baseDir: `${DOCFX_SITE}`
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                margin: '0px',
                padding: '5px',
                position: 'fixed',
                fontSize: '10px',
                zIndex: '9999',
                borderRadius: '5px 0px 0px',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                backgroundColor: 'rgba(60, 197, 31, 0.498039)'
            }
        }
    });
    done();
};

const  browserSyncReload = (done) => {
    browserSync.reload();
    done();
};

const build = series(
  buildSite,
  removeHTMLExtensionFromSiteMap);

exports.build = build;
exports.serve = series(build, init, watchFiles);
