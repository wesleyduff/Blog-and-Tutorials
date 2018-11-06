const   Window = require('./Window'),
        WindowBorder = require('./WindowBorderDecorator');

const window = new Window();
const windowWithBorder = new WindowBorder(window);

console.log(`window : ${window.toString()}`);
console.log(`window with boarder : ${windowWithBorder.toString()}`);