let guestList = ["Tuba", "Namra", "Jaweriya", "Mahrukh"];

//foreach method
guestList.forEach(guestList => console.log(`assalam o alaikum ${guestList}, i m invited to you for today Dinner with us`));


// map() method
let invitation :string[] = guestList.map(guest =>`assalam o alaikum ${guestList}, i m invited to you for today Dinner with us`)

console.log(invitation);

