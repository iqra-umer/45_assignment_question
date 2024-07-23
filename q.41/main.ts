/*Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array.*/

let magicians: string[] = ['Criss Angel','David Blaine','Ricky Jay','David Copperfield'];

function show_magicians(magicians: string[]){
for (let magician of magicians)
    console.log(magician);
}

show_magicians(magicians)