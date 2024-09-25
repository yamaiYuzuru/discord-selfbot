# Discord Selfbot

Discord Selfbot written in TypeScript using Discord.js-Selfbot-v13
Use it on own risk.
If you used it and your account get suspended I don't take responsibility.

## Installation

Clone the repository
Install the dependencies using `npm i`, `yarn i` or `pnpm i` or `bun i`;
Compile the code using `tsc` if `tsc` won't works install typescript globaly `npm i -g typescript` or `yarn add -g typescript` or `pnpm add -g typescript` or `bun add -g typescript`;
Create a file named .env and add a Value TOKEN in it and set your user token in it.

## Get User token?

`Open discord console using Ctrl+Shift+I`

````js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    if (!req.c) return;
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');```
````
