const one = [34,54,23,243,542,234];

const two = one.filter(keshav);

function keshav(value){
    return value % 2 ;
}

console.log(two);