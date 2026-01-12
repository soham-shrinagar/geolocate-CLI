require("dotenv").config();

const fs = require("fs");
const path = require("path");

const { runTraceroute } = require("./traceroute");
const { extractIPs } = require("./parser");
const { geolocateIP } = require("./geo");

async function main() {
  const filePath = path.join(__dirname, "destination_list.txt");

  const destinations = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map(d => d.trim())
    .filter(Boolean);

  const finalResult = [];

  for (const destination of destinations) {
    const tracerouteOutput = await runTraceroute(destination);
    const ips = extractIPs(tracerouteOutput);

    const route = [];

    for (const ip of ips) {
      const location = await geolocateIP(ip);
      if (location) {
        route.push({
          ip: location.ip,
          lat: location.latitude,
          lon: location.longitude,
          country: location.country
        });
      }
    }

    finalResult.push({
      destination,
      route
    });
  }

  console.log(JSON.stringify(finalResult, null, 2));
}

main().catch(err => {
  console.error("Error:", err);
});
