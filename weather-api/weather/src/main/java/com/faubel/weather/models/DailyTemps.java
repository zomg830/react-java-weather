package com.faubel.weather.models;

//Mapping out only the needed temps (hi/lo) 
public class DailyTemps {
	private double min;
	private double max;

	public double getMin() {
		return min;
	}

	public void setMin(double min) {
		this.min = min;
	}

	public double getMax() {
		return max;
	}

	public void setMax(double max) {
		this.max = max;
	}

}
