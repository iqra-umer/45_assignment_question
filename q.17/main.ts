/*17. Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you 
pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/

let guestList: string[] = ["Tuba", "Namra", "Jaweriya"];
console.log("unfortunatly! The new dinner table is not arrived in time so we can invited only two person");
// add guest
guestList.unshift("Maheen", "Mahrukh");
console.log("new guestList", guestList);
//remove guest
while (guestList.length > 2) {
    let removeGuest: string | undefined = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry, ${removeGuest} we can not invited you to dinner`);
    }
}
// Print a message to each of the two people still on your list, letting them know they’re still invited
guestList.forEach(guest => console.log(`Hello, ${guest} you are invited for dinner.`));

//empty guest list
guestList.splice(0, guestList.length);
console.log("empty list", guestList);

    




