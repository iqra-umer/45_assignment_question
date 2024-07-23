/*44. Sandwiches:
Write a function that accepts an array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a different
number of arguments each time. */
import chalk from "chalk";
function make_sandwich(...item) {
    console.log(chalk.bgBlueBright.italic("\nMake A Sandwich:\n"));
    item.forEach(singleItem => {
        console.log(singleItem);
    });
    console.log(chalk.bgGreen.italic("\nEnjoy Your Own Make Sandwich\n"));
}
make_sandwich('Ham', 'Cheese', 'Tomato');
make_sandwich('Bread', 'Chicken', 'Ketch up', 'Mayoiness');
make_sandwich('Bread', 'Cheese', 'Chicken', 'Mayoiness', 'Coliflower', 'Ketch up');
