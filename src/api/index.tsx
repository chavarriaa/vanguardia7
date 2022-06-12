import axios, { AxiosInstance } from 'axios';
const key ='1307f3bce90c60bfdf03f80e7ed4491c';

const api:AxiosInstance = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/weather'
});

export async function getWeatherByCoords (lat:number,lon:number){
 try{
    let response = await api.get(`?lat=${lat}&lon=${lon}&appid=${key}`);
    let data = response.data;
    return {
        name:data.name,
        country:data.sys.country,
        weather:{
            temperature:data.main.temp,
            max:data.main.temp_max,
            min:data.main.temp_min,
        },
        iconCloud:data.weather.icon,
    };
 }catch(e){
    console.error(e)
    throw e;
 }
 }
 
export async function getWeatherByCountryID (cityID:number){
    try{
       let response = await api.get(`?id=${cityID}&appid=${key}`);
       let data = response.data;
       return {
        id:data.id,
           name:data.name,
           country:data.sys.country,
           weather:{
               temperature:data.main.temp,
               max:data.main.temp_max,
               min:data.main.temp_min,
           },
           humidity:data.main.humidity,
           clouds:data.clouds.all,
           iconCloud:data.weather[0].icon
       };
    }catch(e){
       throw e;
    }
}


