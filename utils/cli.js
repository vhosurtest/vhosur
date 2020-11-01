const meow = require('meow');
const helpText = `
Usage
      vhosur [options] <commands>
 
Options
      --bio, -b     Include bio (Default: true)
      --ad,  -a     Include ad (Default: true)
      --debug, -d   Show debug information (Default: false)
      --version, -v Show vhosur version information (Default: false)
      --clear       Clear cmd window before displaying false (Default: false)

Commands
help                Show CLI Help information
 
Examples
      vhosur --no-bio
`;
const options = {
    inferType: true,
    flags: {
        bio: {
            type: 'boolean',
            default: true,
            alias: 'b'
        },
        ad: {
            type: 'boolean',
            default: true,
            alias: 'a'
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd'
        },
        version: {
            alias: 'v'
        },
        clear: {
            type: 'boolean',
            default: false
        }
    }
}

module.exports = meow(helpText, options);