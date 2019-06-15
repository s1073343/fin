var topic=[
    "尚未開學",
    "國定假日",
    "還就準備",
    "隨機性",
    "重複性",
    "心理測驗"
];

var startDate = new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

