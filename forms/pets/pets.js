let petNames = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam'];
let withMarmaduke = ['Darcy','Jack','Jerry','Marty','Vito','Vinny','Riley','Saddie','Marge','Sam','Marmaduke'];
console.log(petNames[5]);
console.log(withMarmaduke);
/*
> remove "Vinny" from the array.
> remove "Marty" from the array.
> add "Nancy" to the front of the array.
> add their name to the end of the array.
> tell the user the array index where "Riley" is located in the array.
> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array.
> show the 'withMarmaduke' array data.
*/
let removeVinny = petNames.splice(5,1);
let removeMarty = petNames.splice(3,1);
let addNancy = petNames.unshift("Nancy");
let addSam = petNames.push("Sam");
