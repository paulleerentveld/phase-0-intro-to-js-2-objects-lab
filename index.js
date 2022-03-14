// Write your solution in this file!
const employee = {name: 'Bob', streetAddress: '123 street'}



function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee,{[key]:value});

}

function deleteFromEmployeeByKey(employee, key) {
    let result = {...employee};
    delete result[key];
    return result;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}

