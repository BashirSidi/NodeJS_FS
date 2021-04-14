const fetch = require('node-fetch');
const fs = require('fs');

//fetch json data
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(jsonData => {
        //write data gotten from an API to file ./result/posts.json 
        let data = JSON.stringify(jsonData);
        fs.writeFileSync('./result/posts.json', data);
    });

// display the data saved in the posts.json file 
// on console to ensure everything works
// as expected
let fileData = fs.readFileSync('./result/posts.json');
let jsonFileData = JSON.parse(fileData);
console.log(jsonFileData); 