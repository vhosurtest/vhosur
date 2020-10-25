#!/usr/bin/env node

const init = require('./utils/init');
const handleError = require('cli-handle-error');

(async () => {
    init();
    const err = new Error('Something went wrong');
    // Syntax: handleError(err_name, err_obj, show_error_obj, exit_node_process);
    handleError('Custom Error', err, true, true);
    console.log(`Hi! I'm vhosur!`);
})();