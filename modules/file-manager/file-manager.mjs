import process from "process"; //to take input
import fs from "fs";
import path from "path";

var args=process.argv; //arguments will store in args array
// console.log(args);
if(args.length>2){
    run(args[2]);
}

function run(choice){
    switch(choice){
        case '0':
                menu();
                break;
                
        case '1' :  
                createFolder(args[3]);
                break;

        case '2' : 
                deleteFolder(args[3]);
                break;

        case '3' : 
                renameFolder(args[3],args[4]);
                break;

        case '4' : 
                createFile(args[3]);
                break;

        case '5' : 
                deleteFile(args[3]);
                break;

    }
}


function menu(){
    console.log("0: List menu");
    console.log("1: Create Folder");
    console.log("2: Delete folder");
    // console.log("3: List Current Directory");
    console.log("3: Rename Folder");
    console.log("4: Create File");
    console.log("5: Delete File");
}

function createFolder(fname)
{
    fs.mkdir(fname, (err) => { // this commands are used in asynchronous way
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });
}

function deleteFolder(fname){
    fs.rmdir(fname, () => {
        console.log("Folder Deleted!");
      });
}

function renameFolder(fname,newname){
    fs.rename(fname, newname, () => {
    console.log("\nFile Renamed!\n");
   
    });
}

function createFile(fname){
fs.writeFile(fname, "", (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

function deleteFile(fname){
    fs.unlink(fname,function(err){
        if(err) 
            return console.log(err);
        console.log('file deleted successfully');
   }); 


}


