
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1,4);
console.log("Output of Array Slice");
console.log(modifiedFood);


const foods1 = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods1.splice(2,0,"noodles", "icecream");
console.log("Output of Array Splice");
console.log(foods1); 

console.log("Output of Filter");
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(v)
{
    return v%2==0;
}
function isPrime(v)
{
    let i=1,count=0;
    while(i<=v)
    {
        if(v%i==0)
        {
            count++;
        }
        i++;
    }
    if(count>2)
    {
        return false;
    }
    return true;
}
let a =numberArray.filter(function(value)
{
    return isEven(value);
});
console.log("Even Numbers Array:")
console.log(a);
console.log("Prime Numbers Array:")
let b =numberArray.filter(function(value)
{
    return isPrime(value);
});
console.log(b);


console.log("Reject");
let a1 =numberArray.filter(function(value)
{
    return !(isEven(value));
});
console.log("Odd Numbers Array:")
console.log(a1);
console.log("Non-Prime Numbers Array:")
let b1 =numberArray.filter(function(value)
{
    return !(isPrime(value));
});
console.log(b1);

 
console.log("Map:");
const myArray = [21, 33, 10, 5, 64, 3];
let arr = myArray.map(function(value)
{
    return value*value;
});
console.log(arr);

console.log("Reduce");
const array1=[2, 4, 5, 5];
function multiply(a,b)
{
    return a*b; 
}
const muloutput = array1.reduce((a,b)=>{return multiply(a,b)},4);
console.log(muloutput);