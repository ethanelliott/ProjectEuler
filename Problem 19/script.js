var WeekEnum = {0: "Sunday",1: "Monday",2: "Tuesday",3: "Wednesday",4: "Thursday",5: "Friday",6: "Saturday"};
var MonthDays = {1: 31,2: 28,3: 31,4: 30,5: 31,6: 30,7: 31,8: 31,9: 30,10: 31,11: 30,12: 31};

function isLeapYear(x) {
	if((x % 4) === 0) {
        if ((x % 100 === 0) && (x % 400 !== 0)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function countingSundays() {
	var year = 1900;
	var month = 1;
	var day = 1;
	var weekDay = 1;
	var sundayCount = 0;
	while (year < 2001) {
		if (day === 1 && weekDay === 0 && year > 1900) {
			sundayCount++;
		}
		if (month === 12 && day === MonthDays[month]) {
			year++;
			month = 1;
			day = 1;
		} else if (month === 2 && isLeapYear(year) && day === MonthDays[month] + 1) {
			month++;
			day = 1;
		} else if (day === MonthDays[month]) {
			month++;
			day = 1;
		} else {
			day++;
		}
		if (weekDay === 6) {
			weekDay = 0;
		} else {
			weekDay++;
		}
	}
	return sundayCount;
}

console.log(countingSundays());
