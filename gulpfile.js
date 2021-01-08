const path = require('path');
const del = require('del');
const {dest, series, src, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const replace = require('gulp-replace');
const argv = require('yargs').argv;
const fs = require('fs');
const slash = require('slash');
const environmentVariablesPreConfig = require('./node_modules/igniteui-docfx-template/post-processors/PostProcessors/EnvironmentVariables/preconfig.json');

const { exec } = require('child_process');

const LANG = argv.lang === undefined ? "en" : argv.lang;
const DOCFX_BASE = {
    en: './en',
    jp: './jp'
};
const DOCFX_PATH =`${DOCFX_BASE[LANG]}`;
const DOCFX_CONF = `${DOCFX_PATH}/docfx.json`;
const DOCFX_TEMPLATE = slash(path.join(__dirname, 'node_modules', 'igniteui-docfx-template', 'template'));
const DOCFX_SITE = `${DOCFX_PATH}/_site`;
  
  const cleanup = () => {
    return del(`${DOCFX_SITE}`);
  };
  
  const environmentVariablesConfig = (done) => {
    var environmentVariablesConfig = JSON.parse(JSON.stringify(environmentVariablesPreConfig));
    
    if (process.env.NODE_ENV) {
      environmentVariablesConfig.environment = process.env.NODE_ENV.trim();
    }
    
    environmentVariablesConfig.variables =
    environmentVariablesConfig.variables[LANG.toLowerCase().trim()][
      environmentVariablesConfig.environment
    ];
    
    if (!fs.existsSync(`${DOCFX_SITE}`)) {
      fs.mkdirSync(`${DOCFX_SITE}`);
    }
    
    fs.writeFileSync(
      `${DOCFX_SITE}/${environmentVariablesConfig._configFileName}`,
      JSON.stringify(environmentVariablesConfig)
      );
      done();
    };

const  styles = () => {
  return src(`${DOCFX_TEMPLATE}/styles/sass/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascase: false
            })
        )
        .pipe(dest(`${DOCFX_TEMPLATE}/styles/css`));
};

const buildSite = (done) => {
    exec(`docfx build ${DOCFX_CONF}`, (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      done(err);
    });
};

const removeHTMLExtensionFromSiteMap = () => {
  return src([DOCFX_SITE + '/sitemap.xml'])
      .pipe(replace(/\.html/g, ''))
      .pipe(dest(DOCFX_SITE));
};

const watchFiles = (done) => {

    watch([
      `${DOCFX_TEMPLATE}/**/*`,
      `!${DOCFX_TEMPLATE}/styles/css/main.css`,
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

const postProcessorConfigs = series(cleanup, environmentVariablesConfig);

const build = series(
  styles, 
  postProcessorConfigs, 
  buildSite,
  removeHTMLExtensionFromSiteMap);

exports.build = build;
exports.serve = series(build, init, watchFiles);
exports.cleanup = cleanup
