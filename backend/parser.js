/**
 * Extract IPv4 addresses from traceroute output
 * @param {string} tracerouteOutput
 * @returns {string[]}
 */
function extractIPs(tracerouteOutput) {
  const ipRegex = /\b\d{1,3}(\.\d{1,3}){3}\b/g;
  const matches = tracerouteOutput.match(ipRegex);
  return matches ? [...new Set(matches)] : [];
}

module.exports = { extractIPs };
