// declaring the variables

var day;
var hourOfParking;
var hourOfArrival;
var hourToLeaveTheCar;
var frequentNum;
var totalPrice;
var total = [];
var sum = 0;

var input = prompt("enter 1 to add new parking or enter 0 to end process");

while(input === "1"){

//enter the day
day = prompt("enter the day you want to park the car");

// checking the total price with respect to the day
if(day === "sunday"){
    hourOfArrival = prompt("enter the time  your car arrived");
    hourToLeaveTheCar = prompt("enter the time for car's departure");
    hourOfParking = hourToLeaveTheCar - hourOfArrival;

    // finding out the cost in between 8 and 16
  if(hourOfArrival > 8 && hourToLeaveTheCar <=16){
    while(hourOfParking >8){
      console.log("you have entered a time which exceeds the maximum parking time");
      hourOfArrival = prompt("enter the time  your car arrived");
      hourToLeaveTheCar = prompt("enter the time for car's departure");
      hourOfParking = hourToLeaveTheCar - hourOfArrival;
      totalPrice = hourOfParking * 2;
  }
  }

  if(hourOfArrival > 16 && hourToLeaveTheCar <24){
    hourOfParking = hourToLeaveTheCar - hourOfArrival;
    totalPrice = hourOfParking * 2;
  }
    frequentNum = prompt("enter your frequent parking number");
    checkDigitCalculator(frequentNum);
}

if(day === "monday" || day ==="tuesday" || day ==="wednesday" || day === "thurday" || day ==="friday"){
    hourOfArrival = prompt("enter the time  your car arrived");
    hourToLeaveTheCar = prompt("enter the time for car's departure");
    hourOfParking = hourToLeaveTheCar - hourOfArrival;

    // calculating the cost for time in between 8 and 16
    if(hourOfArrival >8 && hourToLeaveTheCar <=16){
      while(hourOfParking >2){
        console.log("you have entered a time which exceeds the maximum parking time");
        hourOfArrival = prompt("enter the time  your car arrived");
        hourToLeaveTheCar = prompt("enter the time for car's departure");
        hourOfParking = hourToLeaveTheCar - hourOfArrival;
        totalPrice = hourOfParking * 10;
    }
    }

    if(hourOfArrival >16 && hourToLeaveTheCar < 24){
      hourOfParking = hourToLeaveTheCar - hourOfArrival;
      totalPrice = hourOfParking * 2;
    }
    frequentNum = prompt("enter your frequent parking number");
    checkDigitCalculator(frequentNum);
}

if(day === "saturday"){
    hourOfArrival = prompt("enter the time  your car arrived");
    hourToLeaveTheCar = prompt("enter the time for car's departure");
    hourOfParking = hourToLeaveTheCar - hourOfArrival;
    
    if(hourOfArrival >8 && hourToLeaveTheCar < 16){
      while(hourOfParking >4){
        console.log("you have entered a time which exceeds the maximum parking time");
        hourOfArrival = prompt("enter the time  your car arrived");
        hourToLeaveTheCar = prompt("enter the time for car's departure");
        hourOfParking = hourToLeaveTheCar - hourOfArrival;
        totalPrice = hourOfParking * 3;
    }
    }
// calculating for the midnight
    if(hourOfArrival >16 && hourToLeaveTheCar<24){
      hourOfParking = hourToLeaveTheCar - hourOfArrival;
      totalPrice = hourOfParking * 2;
  }else{
    console.log("the entered time is incorrect please enter again");
  }
    frequentNum = prompt("enter your frequent parking number");
    checkDigitCalculator(frequentNum);

}

input = prompt("enter 1 to add new parking or 0 end parking for today");
}


// writing a function to calculate the check digit and also calculate the total price of the game
function checkDigitCalculator(num){
  // finding out the place value so that i can run modulo 11 checkdigit calculation
 var thousand = Math.floor(num / 1000);
 var hundred = Math.floor((num - thousand*1000)/100);
 var ten = Math.floor((num- thousand*1000 - hundred*100)/10);
 var unit = num - thousand*1000 - hundred*100 - ten*10;



 var weightedUnit = ten * 2;
 var weightedTen = hundred * 3;
 var weightedHundred = thousand * 4;

 var weightedTotal = weightedHundred + weightedTen + weightedUnit;
 var checkdigit = weightedTotal % 11;
 if(checkdigit === unit){
     console.log("you are applicable for discount");
     totalDiscount = totalPrice * 0.1;
     totalDiscountedPrice = totalPrice * 0.9;
     console.log("the discount applied is :" + " $ " + totalDiscount);
     console.log("the total cost of the parking is " + totalDiscountedPrice);
     totalCalculator(totalDiscountedPrice);
 }else{
     console.log("the frequent id entered doesnot match");
     console.log("the total cost of the parking is " + totalPrice);
     totalCalculator(totalPrice);
 }
}

function totalCalculator(num){
   total.push(num);
   counter = 0;
   var length = total.length;
   while(length >0){
    sum = sum + total[counter]; 
    counter++;
    length--;
   }
}