/* Start with a copy of your program from Exercise 41. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
show_magicians() to see that the list has actually been modified. */

function show_magicians(magicians: string[]){
    for (let magician of magicians)
        console.log(magician);
    }
 //modify function
    function make_great(magicians: string[]) {
      return  magicians.map(name => `The Great ${name}`)
    }
    
    //difine magicians_name in array
    let magicians: string[] = ['Criss Angel','David Blaine','Ricky Jay','David Copperfield'];

 
    let great_magician = make_great(magicians)


    show_magicians(great_magician)

    