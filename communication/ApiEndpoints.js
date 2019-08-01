
const axios = require('axios');

export const getWeatherData = (lat, lon) => {
    // console.log(lat, lon);
    return new Promise( resolve => {
        axios.get('https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude='+lat+'&longitude='+lon+'&&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg')
        .then(respon => {
            delete respon.headers;
            delete respon.request;
            delete respon.statusText;
            delete respon.config;
            const data = respon.data.observations;
            if(Object.keys(data.location).length > 0){
                resolve(data.location[0]);
            }    
        })
    })
}

// module.exports = {
//     getWeatherData
// }