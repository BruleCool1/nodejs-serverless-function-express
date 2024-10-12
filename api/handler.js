const { spawn } = require('child_process');

exports.handler = async (req, res) => {
    const shellScript = './your-shell-script.sh';
    const childProcess = spawn(shellScript);

    let output = '';

    childProcess.stdout.on('data', (data) => {
        output += data.toString();
    });

    childProcess.stderr.on('data', (data) => {
        output += data.toString();
    });

    childProcess.on('close', (code) => {
        res.status(200).send(`<html><body>${output}</body></html>`); // Send generated HTML
    });
};
