package com.faubel.weather.models;

import java.util.List;

//Pared down response received from the OpenWeather API
//With the use of an automapper only what is needed is taken from the response
public class WeatherResponse {
	private int status;
	private List<DailyWeather> daily;

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public List<DailyWeather> getDaily() {
		return daily;
	}

	public void setDaily(List<DailyWeather> daily) {
		this.daily = daily;
	}
}
