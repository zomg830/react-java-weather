package com.faubel.weather.util;

import java.util.Calendar;
import java.util.Date;

//A class for some data transformation methods
public class DateTransformations {
	public static Date TimestampToDate(long ts) {
		return new Date(ts * 1000);
	}

	public static int DateToDayOfWeek(Date d) {
		Calendar c = Calendar.getInstance();
		c.setTime(d);
		return c.get(Calendar.DAY_OF_WEEK);
	}
}
