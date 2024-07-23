let guestList = ["Tuba", "Mahrukh", "Jaweriya"];
console.log(`great news, ${guestList} we found a bigger table`);
guestList.unshift("maheen");
console.log(guestList);
guestList.splice(Math.floor(guestList.length/2),0, "Laiba");
console.log(guestList);
guestList.push("Alina");
console.log(guestList);
guestList.forEach(guestList => {
    console.log(`assalam o alaikum ${guestList}, you are invited for dinner`)});