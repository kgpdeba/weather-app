import { weatherData } from "./weather-db.mjs";
import * as fs from "fs";

let filename='db.txt';
let format='utf-8';



const obj = {
  location: "",
  tempC: "",
  tempF: "",
  condition: {
    text: "",
  },
};

function write(filename,weatherData) {
  fs.writeFile(
    filename,
    JSON.stringify(weatherData),
    format,

    // Callback function
    function (err) {
      if (err) throw err;

      //  If no error
    //   console.log("Data is appended to file successfully.");
    }
  );
}

//we have to modify the read function only  here from fs_module
function read(filename,format) {
  const data=fs.readFileSync(filename,format);
    let WeatherDatabase = JSON.parse(data); //output stored in an array format
    // console.log(WeatherDatabase);
    return WeatherDatabase;
  
}

function add(loc, tempC, tempF, text) {
 let data= read(filename,format);
  obj.location = loc;
  obj.tempC = tempC;
  obj.tempF = tempF;
  obj.condition.text = text;
data.push(obj);
  write(filename,data);
}

function remove(loc) {
    let data= read(filename,format);
   let del = data.findIndex(
    (item) => item.location.toLowerCase() == loc.toLowerCase()
  );
data.splice(del, 1);
  write(filename,data);
}

function update(loc, tempC, tempF, text) {
    let data= read(filename,format);
  let main = data.find(
    (item) => item.location.toLowerCase() == loc.toLowerCase()
  );
  if (main) {
    main.location = loc;
    main.tempC = tempC;
    main.tempF = tempF;
    main.condition.text = text;
    write(filename,data);
  }
}

add("kol", 34, 100, "Wowwww");
// console.log(obj);
// console.log(weatherData);

// remove('kolkata');
// console.log(weatherData);

// update("berlin", 43, 1000, "Happy");
// console.log(weatherData);
