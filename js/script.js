let hour = 14;

if (hour < 12){
    console.log("Good Morning");
} else if (hour <16) {
    console.log("Good Afternoon")
}

let numbers = [6, 4, 87, 90, 43, 67, 32, 12, 67, 89, 94, 58, 35, 69]
let even = []; 
let odd = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] %2 !=1){
        even.push(numbers[i]);
    }else{
        odd.push(numbers[i])
    }
}

console.log(even);
console.log(odd);
let total = 0;

for (let i = 0; i < odd.length; i++){
    total += odd[i];
}

console.log(total);

function tester(){
    if (bool == true){
        document.getElementById('display').innerHTML = "True";

    } else {
        document.getElementById('display').innerHTML = "False";
    }
}