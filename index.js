function discountprice(price, discount=10) {
    return price - (price * discount / 100);
}
console.log(discountprice(1000)); 

function studentdetails(name,dept='CSE',year=2){
    return `${name} is in ${dept} and is in year ${year}`;
}
console.log(studentdetails('John'));