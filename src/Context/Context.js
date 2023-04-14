import React, { useReducer, useContext } from "react";

import { WeatherReducer } from "./Reducer";

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      id: 1,
      city: "Adana",
      lat: "37.0000",
      lng: "35.3213",
      population: "2183167",
      admin_name: "Akdeniz",
      country: "Turkey",
    },
    current: "",
    daily: "",
  });

  return (
    <WeatherAPPContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherAPPContext.Provider>
  );
};

export default WeatherAPPProvider;

export const UseWeatherAppContext = () => {
  return useContext(WeatherAPPContext);
};
