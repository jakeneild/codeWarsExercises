/*function spinWords(string){
    let wordArray = [];
    let placeholder = 0;
    for(let i = 0; i < string.length; i++){
      if(string.charAt(i) == " "){
        wordArray.push(string.slice(placeholder, i));
        placeholder = i+1;
      }
      if(i==string.length-1){
          wordArray.push(string.slice(placeholder, string.length));
      }
    }
      
      for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > 4){
          let newWord = "";
          for(let j = wordArray[i].length-1; j > -1; j--){
            newWord += wordArray[i].charAt(j);
         }
         wordArray[i] = newWord;
        } 
      }
      console.log(wordArray);

      let newString = "";
      for(let i = 0; i < wordArray.length; i++){
          if(i < wordArray.length-1){
              newString += wordArray[i] + " ";
              console.log(newString);
        } else {
            newString += wordArray[i];
        }
      }
      return newString;
    }
  


console.log(spinWords("Happy happy one two extracurricular"));

function spinWords(string){
    string.split(" ").map(function(word){
        return (word.length > 4) ? word.split("").reverse().join("") : word;
    }).join(" ");
}*/

/*In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
 increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
  How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or
 equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: 
if the parameter percent is 2 you have to convert it to 0.02.*/

/*function nbYear(p0, percent, aug, p) {
    for(let i = 1; i < 99999; i ++){
        p0 += p0 * (percent/100);
        p0 += aug;
        if (p <= p0){
            return i;
        }
    }
}*/

/*function validatePIN(pin){
    console.log("function runs");
    if(pin.length != 4 && pin.length != 6){ 
      return false;
    }
    console.log("function passes first if");
    let x = true;
    let a = pin.split('').forEach(function(char){
     if (isNaN(char)){
       x=false;     
       console.log(x, "is not a number")
     }
    });
    if(x == false){
      return false;
    }
    return true;
  }

  validatePIN("6006", "5005", "2001");*/

/*function digital_root(n){
    while(n>9){
        n = n.toString().split("").reduce(function(acc, val) {
                return parseInt(acc)+parseInt(val)
            })
    }
    return n;
}


x = 16;
y = 123;
z = 1148;

digital_root(x);*/
  

/*You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the 
integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) 
and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) 
and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. 
If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
An empty array should be treated like a 0 in this problem.*/

/*function findEvenIndex(arr){
    for(i=1; i < arr.length-1; i++){
        let sum1 = 0;
        let sum2 = 0;
        for(let j=0; j<i; j++){sum1 += arr[j]};
        for(let k=arr.length-1; k>i; k--){sum2 += arr[k]};
        if(sum1 == sum2){return i};
    }
    return -1;
}*/

/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number*/

 /*function persistence(num) {
    for(let i = 0;i >= 0; i++){
       if(num.toString().length == 1){return i};
       num = num.toString().split('').reduce(function(t,n){return parseInt(t) * parseInt(n)});
    }
}

console.log(persistence(15))*/

/*function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}*/

/*function findOutlier(integers){
    let arr = integers.map(function(num){return (num % 2 === 0 ? true : false)});
    if(arr.filter(function(bol){return bol==true}).length > 1){
        return integers[arr.indexOf(false)]} else {
        return integers[arr.indexOf(true)]
    }
}*/

//console.log(findOutlier([4, 6, 8, 10, 9, 12]))

//console.log([1, 2, 3, 4].filter(function(num){return num > 2}))
//console.log([true, false, false, true].filter(function(num){return num == true}).length)

/*Your goal in this kata is to implement a difference function, which subtracts one 
list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]*/

/*function array_diff(a, b) {
    return a.filter(function(num){
        console.log(a);
        let x = false;  
        for(let i = 0; i < b.length; i++){
            if(num == b[i]){
                x = true;
                console.log("match found")
            }
        }
        if(x == false){return num};
    }
    )
    
}
  
x = [1, 2, 2]
y = []

console.log(array_diff(x, y));*/

/*var myArray = [1, 2, "cow"];

for(item in myArray){
    console.log(myArray[item]);
}*/


/*function isPrime(num) {
    console.log("start")
    let num2 = Math.abs(num);
    let counter = 0;
    for(let i = num2-1; i > 1; i--){
        console.log(i);
        console.log(num);
        if(num2 % i ==0){console.log("not prime");counter++}
    }
    return (counter==0 && num <1){return true}
}

console.log(isPrime(0));
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))*/

/*My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried
 because each month a list with the weights of members is published and each month
  he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will
 modify the order of the list". It was decided to attribute a "weight" to numbers. 
 The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will
 come before 99. Given a string with the weights of FFC members in normal order can you
  give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and 
not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9)
 and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a
 unique whitespace between two consecutive numbers
Don't modify the input
For C: The result is freed.*/





function orderWeight(string) {
    let arr = string.split(' '); //splits input
    let arr2 = [];
    for(let i=0; i < arr.length; i++){ //iterates through numbers
        let w = 0;
        for(let j=0; j < arr[i].length; j++){ //iterates through digits
            w += parseInt(arr[i].charAt(j));
        }
        arr2.push(w); //maps to new array
    }
    let sorted = false;
    while(sorted == false){ //sorts array
        console.log("While loop runs");
        console.log("Array 1: ", arr);
        console.log("Array 2: ", arr2)
        sorted = true;
        for(i = 0; i < arr.length-1; i++){
            if(arr2[i] > arr2[i+1]){
                let h = arr2[i];
                let k = arr[i];
                arr2[i] = arr2[i+1];
                arr[i] = arr[i+1];
                arr2[i+1] = h;
                arr[i+1] = k;
                sorted = false;
            } else if (arr2[i] == arr2[i+1]){
                console.log("else if hit")
                console.log("value 1: ", arr2[i], " value 2: ", arr2[i+1])
                if(arr[i].toString().localeCompare(arr[i+1].toString()) > 0){
                    console.log("locale compare hit")
                    let h = arr2[i];
                    let k = arr[i];
                    arr2[i] = arr2[i+1];
                    arr[i] = arr[i+1];
                    arr2[i+1] = h;
                    arr[i+1] = k;
                    sorted = false;
                }
            }
        }
    }
    return arr.join(' ');
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

let a = 2000;
let b = 10000;

console.log("test: ", a.toString().localeCompare(b.toString()));