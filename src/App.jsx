import TopButtons from "./components/TopButtons"
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";
import { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const App = () => {
  const [query,setQuery]=useState("Bangalore");
  const [units,setUnits]=useState("metric");
  const [weather,setWeather]=useState(null);
  const [threshold,setThreshold]=useState(35);



  const getWeather = async () => {
   
    try {
        await getFormattedWeatherData( { ...query,units }).then((data) =>{
          toast.info(`Fetching weather data for ${data.name}, ${data.country}`)
          setWeather(data);
        });  
        console.log(data);  
    } catch (error) {
        console.error("Error fetching weather data:", error);  
    }
};
useEffect(() => {
  getWeather();
  const intervalId = setInterval(() => {
    getWeather();
  }, 300000);
}, [query, units]);
const formatBackground = () => {
  if (!weather) return "from-cyan-600 to-blue-700";
  const threshold2 = units === "metric" ? 20 : 60;
  
  if((weather.temp > threshold))toast.warn(`Temperature exceeded threshold! in ${cityName}`);
  if (weather.temp <= threshold2) return "from-cyan-600 to-blue-700";
  return "from-yellow-600 to-orange-700";
};
 

  return (
    <div
    className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
  >
    <TopButtons setQuery={setQuery} />
    <Input setQuery={setQuery} setUnits={setUnits} setThreshold={setThreshold} />
    {weather && (
      <>
    <TimeAndLocation weather={weather} />
    <TempAndDetails weather={weather} />
    <Forecast title='3 hour step forecast' data={weather.hourly} />
    <Forecast  title='Daily Forecast Data' data={weather.daily} />
    </>
    )}
    <ToastContainer autoClose={2500} theme="colored" hideProgressBar={true} />
    </div>
  )
}

export default App;
