async function geolocateIP(ip) {
  try {
    const token = process.env.IPINFO_TOKEN;

    const response = await fetch(
      `https://ipinfo.io/${ip}/json?token=${token}`
    );

    const data = await response.json();

    if (!data.loc) return null;

    const [lat, lon] = data.loc.split(",");

    return {
      ip,
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
      country: data.country
    };
  } catch {
    return null;
  }
}

module.exports = { geolocateIP };
