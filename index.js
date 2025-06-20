// Write your solution in this file!
let employee = {
    name:"Alice Smith",
    streetAddess:"123 Maple St",
}
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
        ...employeeObj,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
}
function deleteFromEmployeeByKey(employeeObj, keyToDelete) {
    const {[keyToDelete]:
    omitted, ...rest } = employeeObj;
    return rest;
}
function destructivelyDeleteFromEmployeeByKey(employeeObj, keyToDelete) {
    delete employeeObj[keyToDelete];
    return employeeObj;
}