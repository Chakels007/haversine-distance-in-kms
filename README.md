## haversine-distance-in-kms

**A lightweight Node.js package for calculating the Haversine distance between geographical coordinates and finding the closest driver from a list.**

### Installation

Bash

```
npm install haversine-distance-in-kms

```

Use code [with caution.](/faq#coding)

### Usage

**1. Calculating Haversine Distance**

The package offers two ways to calculate the Haversine distance:

- **`haversineDistance(lat1, lon1, lat2, lon2)` function:** Accepts four parameters representing the latitudes and longitudes of the two points.

JavaScript

```
const distance_1 = haversineDistance(13.03477, 80.15615, 12.9715987, 77.5945627);
console.log(distance_1); // Output in kilometers (km)

```

Use code [with caution.](/faq#coding)

- **`haversineDistanceObj(point1, point2)` function:** Accepts two objects with `lat` and `lon` properties representing the coordinates.

JavaScript

```
const distance = haversineDistanceObj({ lat: 13.03477, lon: 80.15615 }, { lat: 12.9715987, lon: 77.5945627 });
console.log(distance); // Output in kilometers (km)

```

Use code [with caution.](/faq#coding)

**2. Finding the Closest Driver**

The `findClosestDriver(drivers, fromLat, fromLon)` function identifies the closest available driver from a list of drivers with their coordinates and availability status.

JavaScript

```
const drivers = [
  { id: 1, name: "Person A", lat: 12.9715987, lon: 77.5945627, available: true },
  { id: 2, name: "Person B", lat: 13.0826802, lon: 80.2707184, available: true },
  { id: 3, name: "Person C", lat: 12.2958104, lon: 76.6393805, available: true },
  { id: 4, name: "Person D", lat: 15.3172775, lon: 75.7138884, available: false } // Unavailable
];
const fromLat = 13.03477;
const fromLon = 80.15615;

const closestDriver = findClosestDriver(drivers, fromLat, fromLon);

if (closestDriver) {
  console.log(`Closest driver: ${closestDriver.name}, Distance: ${closestDriver.distance.toFixed(2)} km`);
} else {
  console.log("No drivers available.");
}

```

Use code [with caution.](/faq#coding)

**Explanation:**

- The function iterates through the `drivers` array.
- It calculates the Haversine distance between the provided coordinates (`fromLat`, `fromLon`) and each driver's coordinates.
- It keeps track of the driver with the shortest distance and only considers available drivers (`available: true`).
- If a closest driver is found, it returns an object containing the driver's details (ID, name, coordinates, distance).
- If no available drivers are found within the list, it returns `null`.

**Contributing**

We welcome contributions to improve this package. Feel free to submit pull requests for bug fixes or new features!

**License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

**Additional Notes**

- This package provides basic functionality for calculating distances and finding closest drivers. You can customize it further to fit your specific application needs.
