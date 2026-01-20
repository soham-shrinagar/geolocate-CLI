# Traceroute Path Visualization on World Map

## Overview
This project performs a network traceroute to multiple destination domains or IP addresses, extracts all intermediate hop IPs, converts those IPs into geographical coordinates using an IP geolocation API, and generates a static `index.html` file that visualizes the entire traceroute paths on an interactive world map.

Each destination is displayed in a unique color, and a legend on the map clearly indicates which color corresponds to which destination.

---

## Features
- Runs traceroute for multiple destinations
- Extracts intermediate hop IP addresses
- Converts IPs to geographic locations
- Generates an interactive world map
- Color-coded traceroute paths
- Legend explaining color to destination mapping
- Fully static HTML output (no server needed to view results)


## Prerequisites
- Linux or macOS (required for `traceroute` command)

---

## Setup and Execution

### Step 1: Install dependencies
```bash
npm install
````

---

### Step 2: Add IPInfo API Key

I have also pushed the .env file which contains the API Token for my api key

```env
IPINFO_TOKEN=787061591bf544
```

---

### Step 3: Add destinations

Edit `destination_list.txt` and add one destination per line. For example:

```
google.com
leetcode.com
artcenter.edu
```

---

### Step 4: Run the program

```bash
node index.js
```

---

### Step 5: View the output

Open the generated file:

```
backend/index.html
```

in any modern web browser.

---

## Output Description

* Each traceroute hop is shown as a marker on the world map
* Lines connect hops in traceroute order
* Each destination is represented using a unique color
* Clicking a marker displays the IP address and country information

---

