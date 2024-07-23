/* Checking Usernames: 
Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print 
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
accepted. */


let current_users:string[] = ['Arham','Zohan','abdullah','AbdulHadi','abdulRehman'];

let new_users:string[] = ['Umer','Usman','arham','AbdulRehman','mustufa']

new_users.forEach(new_users1 => {
 let condition = current_users.some(current_users1 => current_users1.toLowerCase()===new_users1.toLowerCase())
if (condition) {
    console.log(`sorry ${new_users1} Name Is Already Taken`);
    }else{
    console.log(`The userName ${new_users1} Is Available`);
 }
});
