/**
 * Haversine formula to calculate the distance between two points (latitudes and longitudes) on Earth.
 * @param {number} fromLat - Latitude of the starting point.
 * @param {number} fromLon - Longitude of the starting point.
 * @param {number} toLat - Latitude of the destination point.
 * @param {number} toLon - Longitude of the destination point.
 * @returns {number} - The distance between the two points in kilometers.
 */
const haversineDistance = (fromLat, fromLon, toLat, toLon) => {
    const R = 6371; // Earth's radius in kilometers.
    const toRadians = (degrees) => degrees * (Math.PI / 180); // convert degrees to radians.

    const dLat = toRadians(toLat - fromLat);
    const dLon = toRadians(toLon - fromLon);

    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(fromLat)) * Math.cos(toRadians(toLat)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Returns distance in kilometers.
};

/**
 * Haversine formula to calculate the distance between two points (latitudes and longitudes) on Earth.
 * @param {Object} from - Object containing the latitude and longitude of the starting point (e.g., { lat, lon }).
 * @param {Object} to - Object containing the latitude and longitude of the destination point (e.g., { lat, lon }).
 * @returns {number} - The distance between the two points in kilometers.
 */
const haversineDistanceObj = (from, to) => {
    const R = 6371; // Earth's radius in kilometers.
    const toRadians = (degrees) => degrees * (Math.PI / 180); // Helper function to convert degrees to radians.

    const dLat = toRadians(to.lat - from.lat);
    const dLon = toRadians(to.lon - from.lon);

    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(from.lat)) * Math.cos(toRadians(to.lat)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Returns distance in kilometers.
};


/**
 * Finds the closest driver to a given location from a list of available drivers.
 * @param {Array} drivers - List of driver objects, each containing {id, name, lat, lon, available}.
 * @param {number} fromLat - Latitude of the starting location.
 * @param {number} fromLon - Longitude of the starting location.
 * @returns {Object|null} - The closest driver object or null if no drivers are available.
 */
const findClosestDriver = (drivers, fromLat, fromLon) => {
    // Step 1: Filter out unavailable drivers
    const availableDrivers = drivers.filter(driver => driver.available);

    if (availableDrivers.length === 0) {
        return null; // No drivers available
    }

    // Step 2: Calculate distance for each available driver
    availableDrivers.forEach(driver => {
        driver.distance = haversineDistance(fromLat, fromLon, driver.lat, driver.lon);
    });

    // Step 3: Find the closest driver
    return availableDrivers.reduce((prev, curr) => (prev.distance < curr.distance) ? prev : curr);
};

module.exports = { haversineDistance, haversineDistanceObj, findClosestDriver };
