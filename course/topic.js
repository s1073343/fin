var topic=[
    "今天",
    "考試",
    "放假",
    "放假",
    "放假",
    "放假"
];

var startDate = new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

