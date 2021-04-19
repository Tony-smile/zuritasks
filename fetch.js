//importing node modules
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path')
//fetching json data from a placeholder
const getApi =fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json()
})
.then(function (data){
    let DataToString = '';
    //console.log(data)

    //Stringify the fetched data
    DataToString += JSON.stringify(data, null, "\t");
    
fs.mkdir(path.join(__dirname, 'Result'),{ recursive: true }, (err) => { 
        if (err) { 
           return console.error(err); 
}
});

    //writing to a file post.json inside a Result folder
    fs.writeFile('Result/Posts.json', DataToString, err=>{
        if(err){
        console.log("Error encountered while writing file", err)
    } else{
    console.log('New file successfully written to Post.json in Result folder');
 }
});


}).catch(function(err){
    console.log(err)
})
