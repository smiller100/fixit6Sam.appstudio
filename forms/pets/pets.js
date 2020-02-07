//
let petNames = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam'];
let withMarmaduke = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam','Marmaduke'];
console.log(petNames[5]);
console.log(withMarmaduke);

//> remove "Vinny" from the array. 
let removeVinny = petNames.splice(5,1);
console.log(petNames);
console.log(`The action taken was: Remove Vinny\nThe remaining data are:\n${petNames}`);

//> remove "Marty" from the array.
let removeMarty = petNames.splice(3,1);
console.log(petNames);
console.log(`The action taken was: Remove Marty\nThe remaining data are:\n${petNames}`);

//> add "Nancy" to the front of the array.
let addNancy = petNames.unshift("Nancy");
console.log(petNames);
console.log(`The action taken was: Add Nancy to the front\nThe existing data is:\n${petNames}`);

//> add their name to the end of the array.
let addSam = petNames.push("Sam");
console.log(petNames);
console.log(`The action taken was: Add Sam to the end\nThe existing data is:\n${petNames}`);

//> tell the user the array index where "Riley" is located in the array.
alert(petNames.indexOf("Riley"));
console.log(petNames.indexOf("Riley"));
console.log(`The action taken was: Tell us where Riley is located\nThe output is:\n${petNames.indexOf("Riley")}`);

//> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array
alert(petNames.indexOf("Cindy"));
console.log(petNames.indexOf("Cindy"));
console.log(`The action taken was: Tell us where Cindy is located\nThe output is:\n${petNames.indexOf("Cindy")}`);

//> show the 'withMarmaduke' array data.
console.log(withMarmaduke);
console.log(`The action taken was: Show us the withMarmaduke array\nThe output is:\n${withMarmaduke}`);

//Using the original 'pets' array, use the .shift() array method.
let shiftArray = petNames.shift();
console.log(petNames);
console.log(shiftArray);
console.log(`The action taken was: Remove the first element of array\nThe output is:\n${petNames}`);

//Using the .unshift() array method, add the name 'Barney' to the petNames array.
let addBarney = petNames.unshift("Barney");
console.log(addBarney);
console.log(`The action taken was: Add the name "Barney" to the petNames array\nThe output is:\n${petNames}`);

//Using an array method of your choice, add the array below to the end of the petNames array to make a new array that you name allPets. Remember to show the new array in the output. Ted, Fred, Jed, Ned, Ed, Zed
let allPets = petNames.push("Ted","Fred","Jed","Ned","Ed","Zed");
console.log(petNames);
console.log(`The action taken was: Add the names "Ted", "Fred", "Jed", "Ned", "Ed", and "Zed" to the petNames array\nThe output is:\n${petNames}`);

//Using the array method .join(), create a string variable named stringPets that holds all of the pet names separated by commas.So one big long string in this format: "Bob, Sam, Andy"
let newPets = ["Bob","Sam","Andy"];
let stringPets = newPets.join();
console.log(petNames);
console.log(`The action taken was: Show pet name "Bob", "Sam", and "Andy" seperated by commas\nThe output is:\n${petNames}`);

//Using the .unshift() array method, add the name 'Agnes' to the petNames array.
let addAgnes = petNames.unshift("Agnes");
console.log(petNames);
console.log(`The action taken was: Add Agnes to the petNames array\nThe output is:\n${petNames}`);