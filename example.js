// for haversineDistanceObj
const distance_1 = haversineDistance(13.03477,80.15615,12.9715987, 77.5945627);
console.log(distance_1);


// for haversineDistanceObj
const distance = haversineDistanceObj({lat:13.03477, lon: 80.15615},{lat:12.9715987, lon:77.5945627});
console.log(distance);

// for find drivers
const drivers = [
    { id: 1, name: "Person A", lat: 12.9715987, lon: 77.5945627, available: true },  // Bangalore
    { id: 2, name: "Person B", lat: 13.0826802, lon: 80.2707184, available: true },  // Chennai
    { id: 3, name: "Person C", lat: 12.2958104, lon: 76.6393805, available: true },  // Mysore
    { id: 4, name: "Person D", lat: 15.3172775, lon: 75.7138884, available: false } // Hubli (Unavailable)
];
const fromLat = 13.03477;
const fromLon = 80.15615;

const closestDriver = findClosestDriver(drivers, fromLat, fromLon);

if (closestDriver) {
    console.log(`Closest driver: ${closestDriver.name}, Distance: ${closestDriver.distance.toFixed(2)} km`);
} else {
    console.log("No drivers available.");
}

// Result object - closestDriver
// {
//     id: 2,
//     name: 'Person B',
//     lat: 13.0826802,
//     lon: 80.2707184,
//     available: true,
//     distance: 13.505118918948908 // in kms
//   }