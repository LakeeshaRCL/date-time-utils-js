"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNumberInTwoDigits(number) {
    return number < 10 && number > 0 ? "0" + number.toString() : number.toString();
}
function joinValuesWithSeparator(values, separator) {
    return values.join(separator);
}
function formatDate(date, format) {
    let outputDate = getNumberInTwoDigits(date.getDate());
    let outputMonth = getNumberInTwoDigits(date.getMonth() + 1);
    let outputYear = date.getFullYear().toString();
    let formattedDate;
    if (format === "dd-mm-yyyy") {
        formattedDate = joinValuesWithSeparator([outputDate, outputMonth, outputYear], "-");
        console.log(formattedDate);
    }
    else if (format === "dd/mm/yyyy") {
        formattedDate = joinValuesWithSeparator([outputDate, outputMonth, outputYear], "/");
        console.log(formattedDate);
    }
}
exports.default = formatDate;
