function incrementIfPositive(number) {
    if (number > 0) {
        return number + 1;
    } else {
        return number;
    }
}

console.log(incrementIfPositive(5));

function getIndexOfSmallerNumber(number1, number2) {
    if (number1 < number2) {
        return 1;
    } else if (number1 === number2) {
        return 1; 
    } else {
        return 2;
    }
}

console.log(getIndexOfSmallerNumber(5, 8));

function findMiddleNumber(num1, num2, num3) {
    if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
        return num1;
    }
    if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
        return num2;
    }
        return num3;
}
console.log(findMiddleNumber(5, 8, 3));

function findUniqueNumber(number1, number2, number3, number4) {
    if(number1 === number2 && number2 === number3) {
        return 4;
    } else if(number2 === number3 && number3 === number4) {
        return 1;
    } else if(number1 === number3 && number3 === number4){
        return 2;
    } else{
        return 3;
    }

}    
console.log(findUniqueNumber(5, 5, 5, 8));


function calculateF(x) {
    if (x < 0) {
        return 0;
    } else if ((x % 2 >= 0) && (x % 2 < 1)) {
        return 1;
    } else if ((x % 2 >= 1) && (x % 2 < 2)) {
        return -1;
    }
}
console.log(calculateF(-1));

function describeNumber(n) {
    if (n % 2 === 0) {
      if (n.toString().length === 2) {
        return "четное двузначное число";
      } else if (n.toString().length === 3) {
        return "четное трехзначное число";
      } else {
        return "четное число";
      }
    } else {
      if (n.toString().length === 2) {
        return "нечетное двузначное число";
      } else if (n.toString().length === 3) {
        return "нечетное трехзначное число";
      } else {
        return "нечетное число";
      }
    }
}
console.log(describeNumber(24));

function getDayName(dayNumber) {
    let getDayName;
  
    if (dayNumber === 1) {
        getDayName = "monday";
    } else if (dayNumber === 2) {
        getDayName = "tuesday";
    } else if (dayNumber === 3) {
        getDayName = "wednesday";
    } else if (dayNumber === 4) {
        getDayName = "thursday";
    } else if (dayNumber === 5) {
        getDayName = "friday";
    } else if (dayNumber === 6) {
        getDayName = "saturday";
    } else if (dayNumber === 7) {
        getDayName = "sunday";
    } else {
        if(dayNumber >= 1 && dayNumber <= 7) {
            getDayName = "Invalid day number.";
        }
    }
    
    return getDayName;
}
console.log(getDayName(1));


function convertToMeters(unitNumber, lengthInUnits) {
    let lengthInMeters;

    if (unitNumber === 1) {
        lengthInMeters = lengthInUnits / 10; 
    } else if (unitNumber === 2) {
        lengthInMeters = lengthInUnits * 1000; 
    } else if (unitNumber === 3) {
        lengthInMeters = lengthInUnits; 
    } else if (unitNumber === 4) {
        lengthInMeters = lengthInUnits / 1000; 
    } else if (unitNumber === 5) {
        lengthInMeters = lengthInUnits / 100; 
    } else {
        lengthInMeters = 'Invalid unitNumber';
    }

    return lengthInMeters;
}
console.log(convertToMeters(3, 10));


export {
    incrementIfPositive, getIndexOfSmallerNumber, findMiddleNumber, findUniqueNumber, calculateF, describeNumber, getDayName,  convertToMeters
}