var personName = ["Tuba", "Namra", "Jaweriya", "Mahrukh"];
//personName.forEach(personName => console.log(`assalam o alaikum ${personName}, how are u?`));  
personName.forEach(function (personName) {
    console.log("assalam o alaikum ".concat(personName, ", how are u?"));
});
