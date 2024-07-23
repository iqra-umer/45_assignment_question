"use strict";
/*Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message. */
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I Love Typescript") {
    console.log(`creating a ${size} size shirt with a message ${message}, print on shirt`);
}
//invoke function with by defualt value
make_shirt();
//invoke function with medium size shirt with by default message
make_shirt("Medium");
//invoke function with small size shirt with different message
make_shirt("Small", "Programmer To Be");
