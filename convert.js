const fs = require("fs");
var toRead = "./index.hyl";

var read = fs.readFileSync(toRead).toString();
var s = read.split('\r\n')

console.log(s);
var font;

const dothis = string => { 
    if (string.startsWith('h1')) {
        return `<h1>${string.slice(3)}</h1>`;
    } else if(string.startsWith('pre')) {
        return `<pre>${string.slice(4)}</pre>`;
    } else if(string.startsWith('p')) {
        return `<p>${string.slice(2)}</p>`;
    } else if(string.startsWith('h2')) {
        return `<h2>${string.slice(3)}</h2>`;
    } else if(string.startsWith('h3')) {
        return `<h3>${string.slice(3)}</h3>`;
    } else if(string.startsWith('h4')) {
        return `<h4>${string.slice(3)}</h4>`;
    } else if(string.startsWith('h5')) {
        return `<h5>${string.slice(3)}</h5>`;
    } else if(string.startsWith('h6')) {
        return `<h6>${string.slice(3)}</h6>`;
    } else if(string.startsWith('image')) {
        return `<img src=${string.slice(6)}>`;
    } else if(string.startsWith('sub')) {
        return `<sub>${string.slice(4)}</sub>`;
    } else if(string.startsWith('sup')) {
        return `<sup>${string.slice(4)}</sup>`;
    } else if(string.startsWith("br") || string.startsWith("break")) {
        return `<br />`;
    } 
};

fs.writeFileSync("index.html", `<html>\n<body>\n` + s.map(dothis).join('\n') + "\n</body>\n</html>");
dothis(s[0])