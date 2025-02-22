// why to create a token?
// - To authenticate the user.
// - To authorize the user to access certain routes.
// - To keep the user logged in even after the user closes the browser or refreshes the page.
// - To keep the user logged in even after the server restarts.

const jwt = require("jsonwebtoken");
module.exports.createToken = async (data) => {
  const token = await jwt.sign(data, process.env.SECRET, {
    // - 'jwt.sign()' creates a token.
    expiresIn: "7d", // - 'expiresIn' sets the token's validity period (here, 7 days).
  });
  return token;
};
