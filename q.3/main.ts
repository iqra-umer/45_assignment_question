//store a person name in variable
let personName:string = "iqra"

//printing a person name in lowercase
console.log("Lowercase", personName.toLowerCase());

//printing a person name in uppercase
console.log("Uppercase", personName.toUpperCase());

//printing a person name in titlecase
let personsName:string = "iqra umer";
console.log();


//step1
let words: string[] =  message.split(" ");

//step2
let titlecaseName: string = " ";

//step3
for (let i = 0; i < words.length; i++) {titlecaseName +=words[i].charAt(0).toUpperCase() 
    + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);