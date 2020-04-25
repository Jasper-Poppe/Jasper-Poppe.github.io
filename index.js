const pug = require('pug');
const fs = require('fs');
const dataLocation = "data/"
fs.readFile(dataLocation + "data.json", (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data);
    fs.writeFile('index.html', pug.renderFile(dataLocation + 'pugs/index.pug', json), (err) => {
        if (err) throw err;
    });
})