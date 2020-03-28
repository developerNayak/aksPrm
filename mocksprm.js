


// declaring the variables

var day;
var startTimeHour;
var startTimeMin;
var endTimeHour;
var endTimeMin;
var morningHours;
var eveningHours;
var totalTime;
var priviledgeAccessNumber;
var discountMorningHours;
var discountEveningHours;
var totalDiscount;
var totalCost;
var discountedCost;
var flag;
var amountPaid;
var totalAmount = [];




//task 1

var input = prompt("enter 1 to start internet access or enter 0 to end the process");

while(input === "1"){
   day = prompt("enter the day when you want to access the internet");
   startTimeHour = prompt("enter the start time (HOURS in 24 hr format)");
   if(startTimeHour<8 && startTimeHour >0 ){
     var wrongTimeHour = console.log("the time entered is wrong (HOURS in 24 hr format)");
     var startTimeHour = prompt("enter the start time again (HOURS in 24 hr format)");
   }
   startTimeMin = prompt("enter the minutes when you want to start");
   if(startTimeMin<0 || startTimeMin >60){
     var wrontTimeMin = console.log("the mins entered is incorrect");
     var startTimeMin = prompt("enter the minutes when you want to start the access");
   }

   endTimeHour = prompt("enter the end time (HOURS in 24 hr format)");
   if(endTimeHour<8 && endTimeHour >0 ){
     var wrongTimeHour = console.log("the time entered is wrong (HOURS in 24 hr format)");
     var endTimeHour = prompt("enter the end time again (HOURS in 24 hr format)");
   }
   endTimeMin = prompt("enter the minutes when you want to end");
   if(endTimeMin<0 || endTimeMin >60){
     var wrongTimeMin = console.log("the mins entered is incorrect");
     var endTimeMin = prompt("enter the minutes when you want to end the access");
   }

   if(endTimeMin > 0){
     endTimeHour++;
   }

   totalTime = endTimeHour - startTimeHour;

   console.log(totalTime);

   if(endTimeHour > 16){
     morningHours = 16- startTimeHour;
     eveningHours = endTimeHour - 16;
   }
   else{
     morningHours = totalTime;
     eveningHours = 0;
   }



   if(day ==="sunday" && totalTime <=8){
        totalCost = morningHours*2 + 2;
        priviledgeAccessNumber = prompt("enter the previledge access number or 0 if none");
        if(priviledgeAccessNumber === "0"){
          console.log("you are available for no discount");
        }else{
          checkDigitCalculator(priviledgeAccessNumber);
          if(flag ===1){
            discountMorningHours = 0.1*2*morningHours;
            discountEveningHours = 0.5*2*eveningHours;
            totalDiscount = discountMorningHours + discountEveningHours;
          }else{
            totalDiscount = 0;
          }
        }
    }

    if((day ==="monday" || day ==="tuesday" || day==="wednesday" || day==="thursday" || day==="friday") && totalTime<=3 ){
      totalCost = morningHours*8 + 2;

      priviledgeAccessNumber = prompt("enter the previledge access number or 0 if none");
      if(priviledgeAccessNumber === "0"){
        console.log("you are available for no discount");
      }else{
        checkDigitCalculator(priviledgeAccessNumber);
        if(flag ===1){
          discountMorningHours = 0.1*8*morningHours;
          discountEveningHours = 0.5*2*eveningHours;
          totalDiscount = discountMorningHours + discountEveningHours;
        }else{
          totalDiscount = 0;
        }
      }
      
    }

    if(day === "saturday" && totalTime <=4){
      totalCost = morningHours*3 + 2;

      priviledgeAccessNumber = prompt("enter the previledge access number or 0 if none");
        if(priviledgeAccessNumber === "0"){
          console.log("you are available for no discount");
        }else{
          checkDigitCalculator(priviledgeAccessNumber);
          if(flag === 1){
            discountMorningHours = 0.1*3*morningHours;
            discountEveningHours = 0.5*2*eveningHours;
            totalDiscount = discountMorningHours + discountEveningHours;
          }else{
            totalDiscount = 0;
          }
        }
    }

    discountedCost = totalCost - totalDiscount;
    console.log("the total cost to access :  $ " + totalCost);
    console.log("the total hours of internet access :  " + totalTime);
    console.log("the total discount available : $ " + totalDiscount);
    console.log("the total discounted price : $ " + discountedCost);
   
   // task 2 part1 starts here
    amountPaid = prompt("enter the amount paid");
    while(amountPaid < discountedCost){
      amountPaid = prompt("the amount paid is less than the discounted cost please enter the correct amount");
    }
    console.log("the amount paid is : $ " + amountPaid);

    totalAmount.push(parseInt(amountPaid));
// task 2 part1 ends here


   input = prompt("enter 1 to restart or 0 to end");
}

// task 2 part 2 starts here
 var sum = 0;

for(var i=0; i<totalAmount.length; i++){
  sum = sum + totalAmount[i];
}

console.log("the total amount collected at the end of the day is : $ " + sum);

// task 2 part 2 ends here

/*

// task 3 starts here
 



var morningHours;
var eveningHours;

morningHours = 16-startTimeHour;
eveningHours = endTimeHour -16;

if(day==="sunday"){
  totalCost = morningHours*2 + 2;
  priviledgeAccessNumber = prompt("enter the previledge access number or 0 if none");
  if(priviledgeAccessNumber === "0"){
    console.log("you are available for no discount");
  }else{
    checkDigitCalculator(priviledgeAccessNumber);
    if(flag ===1){
      discountMorningHours = 0.1*2*morningHours;
      discountEveningHours = 0.5*2*eveningHours;
      totalDiscount = discountMorningHours + discountEveningHours;
    }else{
      totalDiscount = 0;
    }
  
}


if(day ==="monday" || day ==="tuesday" || day==="wednesday" || day==="thursday" || day==="friday"){
  totalCost = morningHours*8 + 2;
  priviledgeAccessNumber = prompt("enter the previledge access number or 0 if none");
  if(priviledgeAccessNumber === "0"){
    console.log("you are available for no discount");
  }else{
    checkDigitCalculator(priviledgeAccessNumber);
    if(flag ===1){
      discountMorningHours = 0.1*2*morningHours;
      discountEveningHours = 0.5*2*eveningHours;
      totalDiscount = discountMorningHours + discountEveningHours;
    }else{
      totalDiscount = 0;
    } 
}

if(day ==="saturday"){
  totalCost = morningHours*3 + 2;
  priviledgeAccessNumber = prompt("enter the previledge access number or 0 if none");
  if(priviledgeAccessNumber === "0"){
    console.log("you are available for no discount");
  }else{
    checkDigitCalculator(priviledgeAccessNumber);
    if(flag ===1){
      discountMorningHours = 0.1*2*morningHours;
      discountEveningHours = 0.5*2*eveningHours;
      totalDiscount = discountMorningHours + discountEveningHours;
    }else{
      totalDiscount = 0;
    }
    
}


    
    discountedCost = totalCost - totalDiscount;
    console.log("the total cost to access :  $ " + totalCost);
    console.log("the total hours of internet access :  " + totalTime);
    console.log("the total discount available : $ " + totalDiscount);
    console.log("the total discounted price : $ " + discountedCost);
   
// task 3 ends here

*/

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
     flag = 1;
 }else{
     console.log("the frequent id entered doesnot match");
     flag = 0;
 }
}
