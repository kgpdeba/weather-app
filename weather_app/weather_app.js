// console.log("hello");
function getWeatherData(location){
    const weatherData=[
        {
            location:'kolkata',
            lat:'22',
            lng:'12',
            condition:{
                data:"hello"
                //data
            },
        }, {
            location:'mumbai',
            lat:'28',
            lng:'32',
            condition:{
                data:"hi",
                cloud:'yes',
                //data
            },
        }

    ]
    const result=weatherData.find((Element) => Element.location == location);
    return result
}
console.log(getWeatherData("mumbai"));
