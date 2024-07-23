let guestList = ["Tuba", "Namra", "Jaweriya"];
console.log("unfortunatly! The new dinner table is not arrived in time so we can invited only two person");
// add guest
guestList.unshift("Maheen", "Mahrukh");
console.log("new guestList", guestList);
//remove guest
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry, ${removeGuest} we can not invited you to dinner`);
    }
}
// Print a message to each of the two people still on your list, letting them know they’re still invited
guestList.forEach(guest => console.log(`Hello, ${guest} you are invited for dinner.`));
//empty guest list
guestList.splice(0, guestList.length);
console.log("empty list", guestList);
export {};
