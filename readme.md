# Superman's Chicken Rescue
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/rescue_chicken.gif?raw=true)

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
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step-02.PNG?raw=true)

2. Use pointers `L` and `R` to indicate if the edge of the roof has been reached. First, move the `R` pointer and count the number of chickens the roof can cover. The roof length used must include the position of the chicken. In the image, the distance between the first and second chicken is 10, adding the position of the first chicken, making it 11 as the roof length needed to cover two chickens. Store the maximum number of chickens that can be covered each time the pointer changes.
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step-03-05.gif?raw=true)

3. If the `R` pointer reaches the maximum roof length, then move pointer `L` and decrease the count of covered chickens by 1 (since the roof has been moved).
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step-06-07.gif?raw=true)

4. Repeat steps `2` and `3` until the last chicken position is reached.
![enter image description here](https://github.com/tOxicV4p0r/Problem-2-Superman-Chicken-Rescue/blob/main/resources/images/step-08.PNG?raw=true)

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