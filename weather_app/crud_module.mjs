import { weatherData } from "./weather-db.mjs"; 

const obj={
    location:'',
    tempC:'',
    tempF:'',
    condition:{
        text:'',
    }
}

function add(loc,tempC,tempF,text){
    obj.location=loc;
    obj.tempC=tempC;
    obj.tempF=tempF;
    obj.condition.text=text;
    weatherData.push(obj);
}

function remove(loc){
   let del= weatherData.findIndex((item)=>item.location.toLowerCase()==loc.toLowerCase());
   weatherData.splice(del,1);
    
}

function update(loc,tempC,tempF,text){
    let main =weatherData.find((item)=>item.location.toLowerCase()==loc.toLowerCase());
    if(main){
    main.location=loc;
    main.tempC=tempC;
    main.tempF=tempF;
    main.condition.text=text;
    }
}

add('kol',34,100,"Wow");
// console.log(obj);
console.log(weatherData);

// remove('kolkata');
// console.log(weatherData);

update('berlin',43,1000,"Happy");
console.log(weatherData);


const a= ()=>{
    console.log("1");

}


function a(){
    console.log("2");

}