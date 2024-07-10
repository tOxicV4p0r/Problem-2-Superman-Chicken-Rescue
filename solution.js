
/**
 * Calculates the maximum number of chickens Superman can rescue
 * @param {string} value - A string containing the total number of chickens and the length of roof (space-separated)
 * @param {string} position - A string containing the positions of the chickens (space-separated)
 * @returns {number} - The maximum number of chickens Superman can rescue within the roof length
 */
function rescueChicken(value, position) {

    if (!value || !position) {
        throw new Error('Missing or incorrect input format: provide both \'value\' and \'position\' as space-separated string');
    }

    // Parse input strings into numbers
    const [totalChickens, roofLength] = value.split(' ').map(e => Number(e));

    // Validate all input values are positive
    if (totalChickens < 1 || totalChickens > 1000000 || roofLength < 1 || roofLength > 1000000) {
        throw new Error('Invalid argument: number of chickens and roof length must be positive number between 1 and 1,000,000');
    }

    if (roofLength === 1) {
        return 1;
    }

    // Convert chicken positions in to an array of number
    const chickenPositions = position.split(' ').map(e => Number(e));
    // Validate the number of positions match the number of chickens
    if (totalChickens !== chickenPositions.length) {
        throw new Error('Mismatch between the number of chickens and postions provided');
    }

    // Set the first chicken distance to 0
    const chickenDistances = [0];
    // Calculate distances between chicken positions
    for (let index = 1; index < chickenPositions.length; index += 1) {
        const nextPosition = chickenPositions[index];
        if (nextPosition < 1 || nextPosition > 1000000000) {
            throw new Error('Position value must be between 1 and 1,000,000,000');
        }

        const distance = nextPosition - chickenPositions[index - 1];
        if (distance < 1) {
            throw new Error('Invalid chicken positions');
        }

        chickenDistances.push(distance);
    }

    // Initialize value
    let isMaxRoofLength = false;
    let leftIndex = 0;
    let rightIndex = 0;
    let maxRescued = 0;
    let sumDistance = 0;
    let numRescued = 1;

    while (true) {

        // Check the right index value is max length of the roof
        if (isMaxRoofLength) {
            // Move left index to the next chicken position
            leftIndex += 1;
            // Subtract the distance from the previous chicken position
            sumDistance -= chickenDistances[leftIndex];
            // Decrease the count from the previous chicken that can't rescue
            numRescued -= 1;
            // Reset flag indicating that the roof still have some space
            isMaxRoofLength = false;
        } else {
            // Move right index to the next chicken position
            rightIndex += 1;
            // If the right index exceeds the last chicken position
            if (rightIndex >= chickenDistances.length) {
                break;
            }

            // Add the distance from the new chicken position
            sumDistance += chickenDistances[rightIndex];
            // Increase the count of rescued chickens
            numRescued += 1;
        }

        // If the current distance from left index to right index exceed maximum roof length.
        // Set flag
        if (sumDistance + 1 > roofLength) {
            isMaxRoofLength = true;
        } else {
            // Update the maximum number of chickens rescued
            if (numRescued > maxRescued) {
                maxRescued = numRescued;
            }

            // If right index has reached the last chicken position
            if (rightIndex >= chickenDistances.length - 1) {
                break;
            }
        }
    }

    // Return the maximum number of chickens Superman can rescue within the roof length
    return maxRescued;
}

module.exports = { rescueChicken }