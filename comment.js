module.exports = average;   // exporting the averagre function from the another file

const average = require("./average.js");      // importing in another file

module.exports.name = "kok";        // exporting only name from the file

console.log(mod.name);             // using name by exporting it from another file

    npm // node pacakage manager

    npm init  // creating our own pacakage manager  json pacakager



    // TO create a file in folder

    const fs = require('fs');

    fs.writeFileSync('index.html',"U now successfully created index html file",(err) =>{
        if(err)
            console.log(err);
        else
            console.log("file created in folder");
            fs.readFile('index.html','utf8',(err,file) =>{    //reads the content in the file
                if (err)
                    console.log(err);
                else
                    console.log(file);
            })
    });



    // TO rename the file in the folder

    fs.rename('index.html','index.js',(err) =>{     // 1st agrument is the file name that u have to change and
                                                    //  2nd argu.... that is the fle name that u have to name it
        if (err)
            console.log(err);
        else
        console.log("your file renamed succesfully");
    });



    //TO add (append) the data into the file

    fs.append('index.html','the data u have to add or append',(err) =>{
        if(err)
            console.log(err);
        else
        console.log("data has been appended to the file succesfully");
    });


    //TO delete the file in te folder

    fs.unlink('index.html',(err) =>{
        if(err)
            console.log(err);
        else
        console.log('file succesfully deleted from the folder');
    });


    //TO create a new folder

    const fs = require('fs');

    fs.mkdir('NODE-PRACTICE',(err) =>{
        if(err)
            console.log(err);
        else
        console.log('folder created succesfully inside your main folder');
    fs.rmdir('NODE-PRACTICE',(err) =>{
        if(err)
            console.log(err);
        else
        console.log('folder deleted succesfully in the main folder');
        });
    });


    //TO check or read the files which are in the folder

    fs.readdir('index.html',(err,files) =>{
        if(err)
            console.log(err);
        else
        console.log(files);
        fs.unlink('area.txt' +file,(err) =>{
            if(err)
                console.log(err)
            else
            console.log('particular file deleted from the folder');
        });
    });


    // to read and write the data of the file

    const fs = require('fs');
    const readStream = fs.readFile('example/txt','utf8');
    const writeStream = fs.writeFile('example2.txt','utf8');

    readStream.on('data',(chunk) =>{
        console.log(chunk);
        writeStream.write(chunk);
    })