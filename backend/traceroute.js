const { exec } = require("child_process");

/**
 * Runs traceroute for a destination
 * @param {string} destination
 * @returns {Promise<string>}
 */
function runTraceroute(destination) {
  return new Promise((resolve, reject) => {
    exec(`traceroute ${destination}`, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

module.exports = { runTraceroute };
