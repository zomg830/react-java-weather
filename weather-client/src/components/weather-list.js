import React from 'react';
import WeatherCard from './weather-card';
import Box from '@material-ui/core/Box';

const WeatherList = (props) => {
    return (
        <div>
            <Box 
                display="flex" 
                justifyContent="center">
                {
                    props.weather.daily && props.weather.daily.map(weather => {
                    return (
                        <WeatherCard 
                            key={weather.dt} 
                            className='weather-card' 
                            weather={weather}
                            units={props.units}
                        />
                    )
                    })
                }
            </Box>
        </div>
    )
};

export default WeatherList;