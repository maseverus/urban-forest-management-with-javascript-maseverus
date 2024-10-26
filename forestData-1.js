let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];


// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
// Your code here 
parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";
// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
// Your code here
const centralPark = parks.find(park => park.name === "Central Park");
const mapleTree = centralPark.trees.find(tree => tree.species === "Maple");
if (mapleTree) mapleTree.species = "Sugar Maple";
// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
// Your code here
centralPark.trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });
// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
// Your code here
const centralParkTrees = centralPark.trees.map(tree => tree.species);
// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
// Your code here
const totalAge = parks.reduce((sum, park) => {
    return sum + park.trees.reduce((treeSum, tree) => treeSum + tree.age, 0);
}, 0);
const totalTrees = parks.reduce((count, park) => count + park.trees.length, 0);
const averageTreeAge = totalAge / totalTrees;
// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
// Your code here
const tallestTree = parks.flatMap(park => park.trees)
     .reduce((tallest, tree) => tree.height > tallest.height ? tree : tallest, {height: 0});
// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
// Your code here
const playgroundIndex = centralPark.facilities.indexOf("playground");
if (playgroundIndex !== -1) centralPark.facilities.splice(playgroundIndex, 1);
// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
// Your code here
const parksJSON = JSON.stringify(parks);
// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
// Your code here
console.log(`Name: ${parks[0].name}, Facilities: ${parks[0].facilities}`);
// Task 10: Using console.log, display the species of the third item in the parks array.
// Your code here
console.log(parks[2].trees.map(tree => tree.species));