//
let petNames = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam'];
let withMarmaduke = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam','Marmaduke'];
console.log(petNames[5]);
console.log(withMarmaduke);

//> remove "Vinny" from the array. 
let removeVinny = petNames.splice(5,1);
console.log(petNames);

//> remove "Marty" from the array.
let removeMarty = petNames.splice(3,1);
console.log(petNames);

//> add "Nancy" to the front of the array.
let addNancy = petNames.unshift("Nancy");
console.log(petNames);

//> add their name to the end of the array.
let addSam = petNames.push("Sam");
console.log(petNames);

//> tell the user the array index where "Riley" is located in the array.
alert(petNames.indexOf("Riley"));
console.log(petNames.indexOf("Riley"));

//> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array
alert(petNames.indexOf("Cindy"));
console.log(petNames.indexOf("Cindy"));

//> show the 'withMarmaduke' array data.
console.log(withMarmaduke);