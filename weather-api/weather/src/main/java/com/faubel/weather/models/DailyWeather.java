package com.faubel.weather.models;

import java.util.Date;

//Daily weather object passed into the front-end
public class DailyWeather {
	private long dt;
	private DailyTemps temp;
	private String dateString;
	private Date date;
	private int dayOfWeek;

	public long getDt() {
		return dt;
	}

	public DailyTemps getTemp() {
		return temp;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public String getDateString() {
		return dateString;
	}

	public void setDateString(String dateString) {
		this.dateString = dateString;
	}

	public int getDayOfWeek() {
		return dayOfWeek;
	}

	public void setDayOfWeek(int dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}

}
