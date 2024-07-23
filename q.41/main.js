/*Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.*/
function show_magicians(magicians) {
    for (let magician of magicians)
        console.log(magician);
}
let magicians = ['Criss Angel', 'David Blaine', 'Ricky Jay', 'David Copperfield'];
show_magicians(magicians);
export {};
