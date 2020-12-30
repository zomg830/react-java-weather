import React, { useState } from 'react';
import WeatherForm from './components/weather-form';
import WeatherList from './components/weather-list';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { API } from './api-service';

import './App.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {

  const [weather, setWeather] = useState([]);
  const [units, setUnits] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const loadWeather = (lat, lon, units) => {
    if (lat && lon && units) {
      API.getWeather(lat, lon, units)
      .then(resp => API.handleErrors(resp))
      .then(resp => { 
        setWeather(resp);
        setUnits(units);
      })
      .catch(err => {
        setOpen(true);
        setError('Invalid request, please check the input fields and try again.');
      });
    }
    else {
      setOpen(true);
      setError('Please enter both Latitude and Longitude.');
    }

  };

  return (
      <div className="App">
          <WeatherForm 
            getWeather={loadWeather}
          />
          <WeatherList 
            className="weather-list"
            weather={weather}
            units={units}
          />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>
      </div>
    ) 
}

export default App;
