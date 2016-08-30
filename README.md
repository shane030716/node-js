# Tutorial 4
### Node Package Manager (npm)

1. It should come with the Node.js installables. Check if it's installed. `npm --version`
2. Install modules using `npm`. Installing module `express` in this example.

	`npm install express` (This will only install the module locally, where your current directory is.)

	Then you can use the `express` module in your js file in the same folder where the module is installed.

	`var express = require('express');`

3. Install modules globally. Use the `-g` flag.

	`npm install express -g`

4. Check what modules are installed locally

	`npm ls`

	or globally

	`npm ls -g`

5. Check the `package.json` in the folder where the module is installed.
6. Uninstalling a module

   `npm uninstall express`

7. Updating a module
   `npm update express`

8. Search a module
   `npm search express`

9. Create a module

   `npm init`

   `npm adduser`

   `npm publish`

 

[Tutorial 3](https://github.com/shane030716/node-js/tree/tutorial-3)
