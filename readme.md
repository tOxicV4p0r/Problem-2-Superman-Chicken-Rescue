# Superman's Chicken Rescue
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step00.gif?raw=true)

## Description
`Story`

Superman needs to protect chickens from a heavy rainstorm using a roof of limited
length. Find the maximum number of chickens Superman can protect

`Program`

The program calculates the maximum number of chickens Superman can rescue based on their positions and the length of the roof.

## Algorithm Explanation
**Complexity**
- Time complexity of `O(n)`
- Space complexity of `O(n)`

**Algorithm**
1. Calculate the distances between each chicken based on their positions.
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step01.png?raw=true)

2. Use pointers `L` and `R` to determine if the distance is within the roof length. The roof length used must include the position of the chicken. In the image, the distance between the first and second chicken is 3, adding the position of the first chicken, making it 4 as the roof length needed to cover two chickens.
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step02.png?raw=true)

3. Loop
   - If the distance between `L` and `R` is **within** the roof length, move pointer `R` and **increase** the `Cover` count by 1. After moving `R`, if it is still within the roof length, compare the `Cover` with `Max Cover` to find the maximum value.
   ![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step031.gif?raw=true)

   - If the distance between `L` and `R` **exceeds** the roof length, move pointer `L` and **decrease** the `Cover` count by 1. Repeat this step until the distance is **within** the roof length.
   ![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step032.gif?raw=true)

4. Condition to end the program.
   - If the roof length is equal to 1, which is the minimum value the roof can cover.
   - If `Max Cover` equals the roof length, it indicates that the maximum number of chickens the roof can cover has been reached (1 unit per chicken)
   - If pointer R reaches the last chicken position while still under the roof.
   - If pointer R exceeds the last chicken position.
   ![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step04.gif?raw=true)

## Installation

#### Prerequisite
- Node.js

To get started with this project, you need to have `Node.js` installed on your machine, then follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue.git

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
## Usage
### Syntax
#### rescueChicken(value,position)
```
 `value` -  A string containing the total number of chickens and the length of roof (space-separated)
 // example: '5 10'  - 5 is number chickens and 10 is length of the roof
 `position` - A string containing where the chickens are, from lowest to highest. (space-separated)
 // example '2 5 10 12 15' - location of each chicken
```
#### Output
```javascript
// return the maximum number of chickens Superman can rescue within the roof length
`0` ... `N`
```
### Example
```javascript
// Load the functions from the module.
// CommonJS
const { rescueChicken } = require('./solution');

const result = rescueChicken("5 5", "2 5 10 12 15");
console.log(result);
// output : 2

console.log(rescueChicken("6 10", "1 11 30 34 35 37"));
// output : 4
```