// Write your solution in this file!
const employee={
    name: "Ashley",
    streetAddress: "150 Browers Ln",
}
function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    const newEmployee={...employee};
    newEmployee["name"]="Sam",
    newEmployee["streetAddress"]="11 Broadway"
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, streetAddress){
    employee["name"]="Sam",
    employee["streetAddress"]="12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey (employee, name){
    const employeeClone={...employee};
    delete employeeClone.name;
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey (employee, name){
    delete employee.name;
    return employee;
}



