"use strict";
/*18. Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
order has changed. */
//making a Array of contries and print in orignal order 
let contriesToVisit = ["Dubai", "China", "America", "Bolan", "paris"];
console.log("orignal order:", contriesToVisit);
//print the array in alphabetical order without moldifing acctual array
console.log(" Alphabetical order;", contriesToVisit.slice().sort());
// show that the array in still in orignal order
console.log("still in orignal order;", contriesToVisit);
//show that the array in reverse Alphabetical order without changing orignal array
console.log("reverse order;", [...contriesToVisit].reverse());
//show that the array in still in orignal order
console.log("still in orignal order;", contriesToVisit);
//we are changing orignal order in reverse
console.log("reverse order;", contriesToVisit.reverse());
//print the array to show back the orignal array
console.log("back to orignal order,", contriesToVisit.reverse());
//print the array to show that the order has been changed
console.log("sorted the array in alphabetical order;", contriesToVisit.sort());
//we are changing again in orignal order in reverse again
console.log("reverse order;", contriesToVisit.reverse());
