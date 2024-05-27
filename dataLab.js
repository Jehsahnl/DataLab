// part 1: Refactoring Old Code

const csvFile = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

const rows = csvFile.split(`\n`)

for (let i = 0; i < rows.length; i++) {
    console.log(rows[i])
}


//Part 2: Expanding Functionality
// Begin with the following task:

// - Declare a variable that stores the number of columns in each row of data within the CSV.
// - Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// - Store your results in a two-dimensional array.
//    - Each row should be its own array, with individual entries for each column.
//    - Each row should be stored in a parent array, with the heading row located at index 0.
// - Cache this two-dimensional array in a variable for later use.

let games = [
    ["Title", "Genre", "Month", "Developer", "Publisher"],
    ["Trek to Yomi", "Action", "January", "Flying Wild Hog", "Devolver Digital"],
    ["Dead Island 2", "Action", "April", "Dambuster Studios", "Deep Silver"],
    ["Bomb Rush Cyberfunk", "Platformer", "August", "Team Reptile", "Team Reptile"],
    ["Blasphemous 2", "Metroidvania", "August", "The Game Kitchen", "Team 17"],]
// console.log(games)

// Part 3: Transforming Data
// Implement the following:
//  - For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
//     -- Convert these keys to all lowercase letters for consistency.
//  - Store these objects in an array, in the order that they were originally listed.
//  - Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let gamesof23 = [
    {Title: "Trek to Yomi", Genre: "Action", Month: "January", Developer: "Flying Wild Hog", Publisher: "Devolver Digital"},
    {Title: "Dead Island 2", Genre: "Action", Month: "April", Developer: "Dambuster Studios", Publisher: "Deep Silver"},
    {Title: "Bomb Rush Cyberfunk", Genre: "Platformer", Month: "August", Developer: "Team Reptile", Publisher: "Team Reptile"},
    {Title: "Blasphemous 2", Genre: "Metroidvania", Month: "August", Developer: "The Game Kitchen", Publisher: "Team 17"}
]
// console.log(gamesof23)

// Part 4: Sorting and Manipulating Data
// - Remove the last element from the sorted array.
// - Insert new object at index 1
// - add new object at end of Array

let lastGame = gamesof23.pop()

gamesof23.splice (1, 1, { Title: "Lies of P", Genre: "Soulslike", Month: "September", Developer: "Round8 Studio", Publisher: "Neowiz"})

gamesof23.push({ Title: "Baldur's Gate 3", Genre: "Role-playing", Month: "August", Developer: "Larian Studios", Publisher: "Larian Studios"})

// console.log(gamesof23)

//Part 5: Full Circle

gamesof23.forEach(game => console.log(game.Title,`,`, game.Genre,`,`, game.Month,`,`, game.Developer,`,`, game.Publisher))