const {readFileSync, writeFileSync} = require ('fs');

const first = readFileSync('./content/first.text', 'utf8');
const second = readFileSync('./content/second.text','utf8');


console.log(first, second)

writeFileSync('./content/result-sync.text', `here is our values ${first}, ${second}`, {flag : 'a'})