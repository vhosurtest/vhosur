const alert = require('cli-alerts');
const cli = require('./cli');

module.exports=(isDebug)=> {
    if(!isDebug) {
        return;
    }

    alert({type: 'warning', msg: 'Debug information is as follows:'});
    console.log('cli input: ');
    console.log(cli.input);
    console.log('cli flags: ');
    console.log(cli.flags);
}