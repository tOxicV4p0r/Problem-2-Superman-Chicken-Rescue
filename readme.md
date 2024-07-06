# Superman's Chicken Rescue

## Description

The program calculates the maximum number of chickens Superman can rescue based on their positions and the length of the roof.

### Complexity
Time complexity of O(n)

Space complexity of O(n)

## Installation

To get started with this project, you need to have Node.js installed on your machine, then follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge.git

2. Install the required dependencies:
   ```bash
   npm install

## Running the Project

   ```bash
   npm start
   ```
or
   ```bash
    node index.js
   ```
## Testing the Project
   ```bash
   npm test
   ```

## Example Usage
You can use this function in a Node.js script as follows:
   ```javascript
    const { rescueChicken } = require('./solution');

    console.log(rescueChicken("5 5", "2 5 10 12 15"));
    console.log(rescueChicken("6 10", "1 11 30 34 35 37"));
