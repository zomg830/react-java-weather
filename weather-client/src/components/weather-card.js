import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const WeatherCard = (props) => {
    const [symbol, setSymbol] = useState('');

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        if (props.units === "imperial") {
            setSymbol("°F")
        }
    
        if (props.units === "metric") {
            setSymbol("°C")
        }
    });

    return (
        <Card style={{"margin":"16px"}}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {days[props.weather.dayOfWeek - 1]}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {props.weather.dateString}
            </Typography>
            <Typography variant="h5" component="h2">
              High: {Math.round(props.weather.temp.max)}{symbol}
            </Typography>
            <Typography variant="h5" component="h2">
              Low: {Math.round(props.weather.temp.min)}{symbol}
            </Typography>
          </CardContent>
        </Card>
      );
};

export default WeatherCard;