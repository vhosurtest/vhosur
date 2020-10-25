const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const handleUnhandledErrors = require('cli-handle-unhandled');

module.exports = () => {
    //This function call defaults to this implementation.
    // process.on('unhandledRejection', (err) => {
    //     console.log('unhandledRejection', err);
    // })
    handleUnhandledErrors();


    //Goto https://nodejs.org/en/about/releases/ to find the last maintenance version of node supported
    checkNode('10');

    welcome({
        title: pkgJSON.name,
        version: pkgJSON.version,
        description: pkgJSON.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
    })
}
