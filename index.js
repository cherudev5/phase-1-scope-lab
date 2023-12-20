// Write your solution in this file!
var customerName='bob'
function upperCaseCustomerName(){
    console.log(customerName.toUpperCase());
}

function setBestCustomer(){
    bestCustomer='not bob';
}
function overwriteBestCustomer(){
    return `${bestCustomer='maybe bob'}`
}
const leastFavoriteCustomer='jane';

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer='jude';
}