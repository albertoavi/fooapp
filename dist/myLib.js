"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cDT = exports.cTime = exports.cDate = void 0;
// Defining a reusable function
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
// format as "DD-MM-YYYY"
function cDate() {
    const date = new Date();
    return ([
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear()
    ].join(":"));
}
exports.cDate = cDate;
// format as "hh:mm:ss"
function cTime() {
    const date = new Date();
    return ([
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
    ].join(':'));
}
exports.cTime = cTime;
// format as "DD-MM-YYYY hh:mm:ss"
function cDT() {
    const date = new Date();
    return (cDate() +
        ' ' +
        cTime());
}
exports.cDT = cDT;
