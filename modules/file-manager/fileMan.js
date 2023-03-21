//File Manager updated in synchronous way

const fs=require('fs');
const path=require('path');

//user-input install
//npm i prompt-sync (in terminal)
//shift+option+down-arrow (for duplicate)

//user-input
const prompt=require('prompt-sync')();
let flag=1;
while(flag)
{
    console.log('\n CHOOSE OPTIONS ');
    console.log('----------------------------'); 
    console.log('1 -> READ FILE');
    console.log('2 -> CREATE FILE');
    console.log('3 -> UPDATE FILE');
    console.log('4 -> APPEND FILE');
    console.log('5 -> RENAME FILE');
    console.log('6 -> DELETE FILE');
    console.log('7 -> CREATE FOLDER');
    console.log('8 -> READ FOLDER');
    console.log('9 -> RENAME FOLDER');
    console.log('10 -> DELETE FOLDER');
    console.log('0 -> EXIT');
    console.log('----------------------------\n'); 

    const choiceNumber=prompt("Enter your Choice : ");
     
    if(choiceNumber==1){
        const filePath=prompt("Please Provode the file name : ");
        const outputData=fs.readFileSync(path.join(__dirname,`${filePath}`),'utf-8');
        console.log("Read File done Succesfully. ");
        console.log(outputData);
    }

    else if(choiceNumber==2){
        const filePath=prompt("Please Provide the file name : ");
        const fileData=prompt("Enter the Data Content : ");
        fs.writeFileSync(path.join(__dirname,`${filePath}`),fileData);
        console.log("File Created Succesfully. ");
    }

    else if(choiceNumber==3){
        const filePath=prompt("Please Provide the file name : ");
        const fileData=prompt("Enter the Modified Data Content : ");
        fs.writeFileSync(path.join(__dirname,`${filePath}`),fileData);
        console.log("File Updated Succesfully. ");
    }

    else if(choiceNumber==4){
        const filePath=prompt("Please Provide the file name : ");
        const fileData=prompt("Enter the Data Content : ");
        fs.appendFileSync(path.join(__dirname,`${filePath}`),fileData);
        console.log("File Appended Succesfully. ");
    }

    else if(choiceNumber==5){
        const oldFile=prompt("Please Provide the Current file name : ");
        const newFile=prompt("Please Provide the New file name : ");
        fs.renameSync(path.join(__dirname,`${oldFile}`),path.join(__dirname,`${newFile}`));
        console.log("File Renamed Succesfully. ");
    }

    else if(choiceNumber==6){
        const filePath=prompt("Please Provide the file name : ");
        fs.unlinkSync(path.join(__dirname,`${filePath}`));
        console.log("File Deleted Succesfully. ");
    }

    //folder
    else if(choiceNumber==7){
        const folderPath=prompt("Please Provide the folder name : ");
        fs.mkdirSync(path.join(__dirname,`${folderPath}`));
        console.log("Folder Created Succesfully. ");
    }

    else if(choiceNumber==8){
        const folderPath=prompt("Please Provide the folder name : ");
        const files= fs.readdirSync(path.join(__dirname,`${folderPath}`));
        console.log(files);
        console.log("Folder files Read Succesfully. ");
    }

    else if(choiceNumber==9){
        const oldFolder=prompt("Please Provide the Current Folder name : ");
        const newFolder=prompt("Please Provide the New Folder name : ");
        fs.renameSync(path.join(__dirname,`${oldFolder}`),path.join(__dirname,`${newFolder}`));
        console.log("Folder Renamed Succesfully. ");
    }

    else if(choiceNumber==10){
        const folderPath=prompt("Please Provide the folder name : ");
        fs.rmdirSync(path.join(__dirname,`${folderPath}`));
        console.log("folder Deleted Succesfully. ");
    }

    else if(choiceNumber==0){
        flag=0;
    }
}

