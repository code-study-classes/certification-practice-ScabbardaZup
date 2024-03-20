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
    let dayName;
  
    if (dayNumber === 1) {
        dayName = "Monday";
    } else if (dayNumber === 2) {
        dayName = "Tuesday";
    } else if (dayNumber === 3) {
        dayName = "Wednesday";
    } else if (dayNumber === 4) {
        dayName = "Thursday";
    } else if (dayNumber === 5) {
        dayName = "Friday";
    } else if (dayNumber === 6) {
        dayName = "Saturday";
    } else if (dayNumber === 7) {
        dayName = "Sunday";
    } else {
        if(dayNumber >= 1 && dayNumber <= 7) {
            dayName = "Invalid day number.";
        }
    }
    
    return dayName;
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

function describeAge(age) {
    let description;

    if (age < 20 || age > 69) {
        return "Возраст должен быть в диапазоне от 20 до 69";
    }

    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    switch (lastDigit) {
        case 1:
            description = "год";
            break;
        case 2:
        case 3:
        case 4:
            description = "года";
            break;
        default:
            description = "лет";
            break;
    }

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        description = "лет";
    }

    return `${age} ${description}`;
}

console.log(describeAge(20)); 
console.log(describeAge(32)); 
console.log(describeAge(41)); 

function describeNumber2(number) {
    if (number < 100 || number > 999) {
        return "Число должно быть в диапазоне от 100 до 999";
    }

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;

    let description = "";

    switch (hundreds) {
        case 1:
            description += "сто ";
            break;
        case 2:
            description += "двести ";
            break;
        case 3:
            description += "триста ";
            break;
        case 4:
            description += "четыреста ";
            break;
        case 5:
            description += "пятьсот ";
            break;
        case 6:
            description += "шестьсот ";
            break;
        case 7:
            description += "семьсот ";
            break;
        case 8:
            description += "восемьсот ";
            break;
        case 9:
            description += "девятьсот ";
            break;
    }

    if (tens === 1) {
        switch (ones) {
            case 0:
                description += "десять";
                break;
            case 1:
                description += "одиннадцать";
                break;
            case 2:
                description += "двенадцать";
                break;
            case 3:
                description += "тринадцать";
                break;
            case 4:
                description += "четырнадцать";
                break;
            case 5:
                description += "пятнадцать";
                break;
            case 6:
                description += "шестнадцать";
                break;
            case 7:
                description += "семнадцать";
                break;
            case 8:
                description += "восемнадцать";
                break;
            case 9:
                description += "девятнадцать";
                break;
        }
    } else {
        switch (tens) {
            case 2:
                description += "двадцать ";
                break;
            case 3:
                description += "тридцать ";
                break;
            case 4:
                description += "сорок ";
                break;
            case 5:
                description += "пятьдесят ";
                break;
            case 6:
                description += "шестьдесят ";
                break;
            case 7:
                description += "семьдесят ";
                break;
            case 8:
                description += "восемьдесят ";
                break;
            case 9:
                description += "девяносто ";
                break;
        }

        switch (ones) {
            case 1:
                description += "один";
                break;
            case 2:
                description += "два";
                break;
            case 3:
                description += "три";
                break;
            case 4:
                description += "четыре";
                break;
            case 5:
                description += "пять";
                break;
            case 6:
                description += "шесть";
                break;
            case 7:
                description += "семь";
                break;
            case 8:
                description += "восемь";
                break;
            case 9:
                description += "девять";
                break;
        }
    }

    return description.trim();
}

console.log(describeNumber2(256)); 
console.log(describeNumber2(814));

export {
    incrementIfPositive, getIndexOfSmallerNumber, findMiddleNumber, findUniqueNumber, calculateF, describeNumber, getDayName,  convertToMeters, describeAge, describeNumber2
}
