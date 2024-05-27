//Part 1: Refactoring Old code
// go back and restructure your code using Arrays










//Part 2: Expanding Functionality
// Begin with the following task:

// - Declare a variable that stores the number of columns in each row of data within the CSV.
// - Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// - Store your results in a two-dimensional array.
//    - Each row should be its own array, with individual entries for each column.
//    - Each row should be stored in a parent array, with the heading row located at index 0.
// - Cache this two-dimensional array in a variable for later use.

let games = [
    ["Title", "Genre", "Month", "Developer", "Publisher"]
    ["Trek to Yomi", "Action", "January", "Flying Wild Hog", "Devolver Digital"]
    ["Dead Island 2", "Action", "April", "Dambuster Studios", "Deep Silver"]
    ["Bomb Rush Cyberfunk", "Platformer", "August", "Team Reptile", "Team Reptile"]
    ["Blasphemous 2", "Metroidvania", "August", "The Game Kitchen", "Team 17"]]

console.log(games)

// Part 3: Transforming Data
// Implement the following:
//  - For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
//     -- Convert these keys to all lowercase letters for consistency.
//  - Store these objects in an array, in the order that they were originally listed.
//  - Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.