let axios = require("axios").default;

/**
 * @param {String} invite
 * @param {String} token
 */
module.exports = function (invite, token) {
  let x = new XMLHttpRequest();
  x.open("POST", `https://discord.com/api/v9/invites/${invite}`);
  x.setRequestHeader("Authorization", token);
  x.send();

  return "Ich bin dem Server beigetreten.";
};
