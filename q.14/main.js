"use strict";
let guestList = ["Tuba", "Namra", "Jaweriya", "Mahrukh"];
//guestList.forEach(guestList => console.log(`assalam o alaikum ${guestList}, i m invited to you for today Dinner with us`));
// map() method
let invitation = guestList.map(guest => `assalam o alaikum ${guestList}, i m invited to you for today Dinner with us`);
console.log(invitation);
