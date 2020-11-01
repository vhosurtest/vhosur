#!/usr/bin/env node

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const handleError = require('cli-handle-error');
const alert = require('cli-alerts');

(async () => {
    init(cli.flags.clear);

    cli.input.includes('help') && cli.showHelp();

    if (cli.flags.bio) {
        console.log(data.bio);
    }

    if (cli.flags.ad) {
        console.log(data.ad)
    }

    //Show debug info if --debug is issued
    debug(cli.flags.debug);

    /*const err = new Error('Something went wrong');
    // Syntax: handleError(err_name, err_obj, show_error_obj, exit_node_process);
    handleError('Custom Error', err, true, true);
    console.log(`Hi! I'm vhosur!`);*/
})();