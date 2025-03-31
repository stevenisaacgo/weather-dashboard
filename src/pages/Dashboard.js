import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../features/weather/weatherSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.weather);

  useEffect(() => {
    // Solicita datos del clima para una ciudad, por ejemplo, "Madrid"
    dispatch(getWeather("Madrid"));
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Dashboard del Tiempo
      </h1>
      {status === "loading" && (
        <p className="text-center text-blue-500">Cargando datos...</p>
      )}
      {status === "failed" && (
        <p className="text-center text-red-500">Error: {error}</p>
      )}
      {status === "succeeded" && data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Gráfico del Clima</h2>
            <h3 className="text-lg font-semibold mb-2">Ciudad: {data.name}</h3>
            <p className="text-gray-700">Temperatura: {data.main.temp}°C</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Tabla del Clima</h2>
            <h3 className="text-lg font-semibold mb-2">Ciudad: {data.name}</h3>
            <p className="text-gray-700">Temperatura: {data.main.temp}°C</p>
            <p className="text-gray-700">Humedad: {data.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
