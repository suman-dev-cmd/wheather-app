import ReactWeather, { useOpenWeather } from 'react-open-weather';
function App() {
  const long = '72.8777';
  const lati = '19.0760';
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '625661d1363ff03f224fef3a31c63022',
    lat: lati,
    lon: long,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  console.log(data);
  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Mumbai"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;