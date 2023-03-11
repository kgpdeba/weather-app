import { weatherData as weatherdb } from "./weather-db.mjs";
import * as fs from 'fs'; // 'fs' is the default module

//write data to file
//only once we have to run this.
// fs.writeFile('db.txt', JSON.stringify(weatherdb) , 'utf8',
 
//     // Callback function
//     function(err) {
//         if (err) throw err;
 
//         //  If no error
//         console.log("Data is appended to file successfully.")
// });


//read data from a file

fs.readFile('db.txt','utf-8',function (err, data) {
    if (err) {
       return console.error(err);
    }
    // console.log(data.toString());
    let WeatherDatabase =   JSON.parse(data); //output stored in an array format
    console.log(WeatherDatabase);


 });

