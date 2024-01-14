function createEmployeeRecord(array) {
    return {
        firstName: array[0] || '',
        familyName: array[1] || '',
        title: array[2] || '',
        payPerHour: array[3] || 0,
        timeInEvents: [],
        timeOutEvents: []
    };
}
const employeeData = ["David", "Mwangi", "Software Developer", 25];
const davidRecord = createEmployeeRecord(employeeData);
console.log(davidRecord);


function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

const employeeDataArray = [
    ["David", "Mwangi", "Software Engineer", 25],
    ["Dan", "Munene", "DevOps Engineer", 20],
    ["Grom", "Smith", "Data analyst", 18]
];

console.log(employeeRecords);


function createTimeInEvent(dateTimeString) {
    if (dateTimeString) {
        const [date, hour] = dateTimeString.split(' ');

        const timeInEvent = {
            type: "TimeIn",
            date: date || '',
            hour: parseInt(hour, 10) || 0
        };

        this.timeInEvents.push(timeInEvent);

        return this;
    } else {
        console.error("dateTimeString is undefined");
        return this;
    }
}

createTimeInEvent.call(davidRecord, "2022-01-15 0900");
console.log(davidRecord.timeInEvents);

function createTimeOutEvent(dateTimeString) {
    if (dateTimeString) {
        const [date, hour] = dateTimeString.split(' ');

        const timeOutEvent = {
            type: "TimeOut",
            date: date || '',
            hour: parseInt(hour, 10) || 0
        };

        this.timeOutEvents.push(timeOutEvent);

        return this;
    } else {
        console.error("dateTimeString is undefined");
        return this;
    }
}

createTimeOutEvent.call(davidRecord, "2022-01-15 1700");
console.log(davidRecord.timeOutEvents);


function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    if (timeInEvent && timeOutEvent) {
        const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
        return hoursWorked;
    }

    return 0;
}

createTimeInEvent.call(davidRecord, "2022-01-15 0900");
createTimeOutEvent.call(davidRecord, "2022-01-15 1700");
const hoursWorked = hoursWorkedOnDate.call(davidRecord, "2022-01-15");
console.log(hoursWorked);


function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const ratePerHour = this.payPerHour;

    return hoursWorked * ratePerHour;
}

createTimeInEvent.call(davidRecord, "2022-01-15 0900");
createTimeOutEvent.call(davidRecord, "2022-01-15 1700");
const wagesEarned = wagesEarnedOnDate.call(davidRecord, "2022-01-15");
console.log(wagesEarned);




const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
}

createTimeInEvent.call(davidRecord, "2022-01-15 0900");
createTimeOutEvent.call(davidRecord, "2022-01-15 1700");
createTimeInEvent.call(davidRecord, "2022-01-16 0800");
createTimeOutEvent.call(davidRecord, "2022-01-16 1700");
const totalWages = allWagesFor.call(davidRecord);
console.log(totalWages);


function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employeeRecord) => total + allWagesFor.call(employeeRecord), 0);
    return totalPayroll;
}



const employeeRecords = createEmployeeRecords(employeeDataArray);

employeeRecords.forEach(employeeRecord => {
    createTimeInEvent.call(employeeRecord, "2022-01-15 0900");
    createTimeOutEvent.call(employeeRecord, "2022-01-15 1100");
    createTimeInEvent.call(employeeRecord, "2022-01-16 0800");
    createTimeOutEvent.call(employeeRecord, "2022-01-16 1700");
    createTimeInEvent.call(employeeRecord, "2022-01-17 1000");
    createTimeOutEvent.call(employeeRecord, "2022-01-17 1500");
});

const totalPayroll = calculatePayroll(employeeRecords);
console.log(totalPayroll);

function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}