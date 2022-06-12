import React from "react";

import WeatherCard from "./components/WeatherCard";
import { getWeatherByCountryID } from "./api";

import "./index.css";
function App() {
  const [countryWeatherList, setCountryWeatherList] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchInitialList = () => {
      Promise.all(
        CountriesID.map((item: CountryIDProps) => {
          return getWeatherByCountryID(item.id);
        })
      ).then((result) => {
        setCountryWeatherList(result);
      });
    };
    function onLoadComponent(){
      console.log(`Actualizado a las ${new Date().toTimeString()}`)
      fetchInitialList();
      setInterval(onLoadComponent,100000);
    }

    onLoadComponent();

      }, []);

  return (
    <>
      <h1>Mi clima</h1>
      <div className="flex-container">
        {countryWeatherList.map((item: any, i: number) => {
          return <WeatherCard key={i} {...item} getCountryImage={getCountryImage} />;
        })}
      </div>
    </>
  );
}
export default App;


interface CountryIDProps {
  id: number;
  name: string;
  picture?: string;
}

const CountriesID: CountryIDProps[] = [
  {
    id: 3601783,
    name: "San Pedro Sula",
    picture:
      "https://www.cideu.org/wp-content/uploads/2019/12/sanpedrosula3.jpg",
  },
  {
    id: 2643743,
    name: "Londres",
    picture:
      "https://i0.wp.com/hotbook.mx/wp-content/uploads/2022/02/london-jpeg-header-148518.jpg?fit=1200%2C630&ssl=1",
  },
  {
    id: 2968815,
    name: "Paris",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
  },
  {
    id: 5128638,
    name: "Nueva York",
    picture:
      "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/99.jpg",
  },
  {
    id: 1850147,
    name: "Tokyo",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
  },
];

const getCountryImage = (countryID: number,countriesID:CountryIDProps) =>
  CountriesID.find((el: CountryIDProps) => el.id === countryID)?.picture || 0;
