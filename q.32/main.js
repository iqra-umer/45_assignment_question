let current_users = ['Arham', 'Zohan', 'Abdullah', 'AbdulHadi', 'AbdulRehman'];
let new_users = ['Umer', 'Usman', 'Arham', 'AbdulRehman', 'mustufa'];
new_users.forEach(new_users1 => {
    let condition = current_users.some(current_users1 => current_users1.toLowerCase() === new_users1.toLowerCase());
    if (condition) {
        console.log(`sorry ${new_users1} Name Is Already Taken`);
    }
    else {
        console.log(`This userName ${new_users1} Is Available`);
    }
});
export {};
