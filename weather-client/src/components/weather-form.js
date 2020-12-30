import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const WeatherForm = (props) => {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [units, setUnits] = useState('imperial');

    const changeUnits = (event, newUnits) => {
        if (newUnits !== null) {
            setUnits(newUnits);
        }
    };

    return (
        <div>
            <h1>Weekday Forecast</h1>
            <form noValidate autoComplete="off">
                <TextField 
                    className="text-input"
                    id="latitude" 
                    label="Latitude" 
                    variant="outlined" 
                    value={lat}
                    onChange={e => setLat(e.target.value)}
                />
                <TextField 
                    className="text-input"
                    id="longitude" 
                    label="Longitude" 
                    variant="outlined" 
                    value={lon}
                    onChange={e => setLon(e.target.value)}
                />
                <br />
                <ToggleButtonGroup 
                    exclusive 
                    aria-label="temperature units" 
                    value={units} 
                    onChange={changeUnits}>
                    <ToggleButton 
                        value="imperial" 
                        aria-label="bold">
                        °F
                    </ToggleButton>
                    <ToggleButton 
                        value="metric" 
                        aria-label="italic">
                        °C
                    </ToggleButton>
                </ToggleButtonGroup>
            </form>
            <Button 
                className="submit-weather"
                onClick={() => props.getWeather(lat, lon, units)} 
                variant="contained">
                Submit
            </Button>
        </div>
    )
}

export default WeatherForm