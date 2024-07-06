document.write("<br>");
document.write("<h3>Question no 01</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques1() ">Click Me</button>');
document.write("<br>");
document.write("<br>");
function ques1() {
    var output = 'Sat April 15 2024 22:23:21 GMT+0500 (PKR)'
    document.getElementById("out").innerHTML = output;
}
document.write(`<h4 id="out"></h4><br>`)
// question no 2

document.write("<h3>Question no 02</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques2();">Click Me</button>');
function ques2() {
    var use1 = prompt('Please! Put Your FIrst Name.')
    var use2 = prompt('Please! Put Your Second Name.')
    alert(use1 + ' ' + use2)
    document.getElementById("outn").innerHTML = use1 + ' ' + use2;
}
document.write(`<br><br><h4 id="outn"></h4>`)
document.write("<br>");
document.write("<br>");

//question no 3

document.write("<h3>Question no 03</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques3()">Click Me</button>');
function ques3() {
    var num1 = parseInt(prompt('Please! Put Your FIrst Number.'))
    var num2 = parseInt(prompt('Please! Put Your Second Nunber.'))
    alert(num1 + num2)
    document.getElementById("outu").innerHTML = num1 + num2;
}
document.write(`<br><br><h4 id="outu"></h4>`)
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    var firstnum = parseInt(prompt("Enter a first number:"));
    var secondnum = parseInt(prompt("Enter a second number:"));
    var thirednum = prompt("Enter a Operation (+, -, *, /, %):");
    if (thirednum === "+") {
        console.log(firstnum + secondnum);
        alert(firstnum + secondnum);
    } else if (thirednum === "-") {
        console.log(firstnum - secondnum);
        alert(firstnum - secondnum);
    } else if (thirednum === "/") {
        console.log(firstnum / secondnum);
        alert(firstnum / secondnum);
    } else if (thirednum === "*") {
        console.log(firstnum * secondnum);
        alert(firstnum * secondnum);
    } else if (thirednum === "%") {
        console.log(firstnum % secondnum);
        alert(firstnum % secondnum);
    } else {
        console.log(thirednum + " is not  a define.");
        alert(thirednum + " is not a define.");
    }
};
document.write("<br>");
document.write("<br>");
//question no 5
document.write("<h3>Question no 05</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
function ques5() {
    var squre = prompt("please give a squre number!");
    document.getElementById('pere').innerHTML = '<br>' + squre * squre;
}

document.write('<h3 id="pere"></h3>')
document.write("<br>");
document.write("<br>");

//question no 6

document.write("<h3>Question no 06</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques6()"">Click Me</button>');
function ques6() {
    var factorial = prompt("please give a factorial number!");
    let result = 1;
    for (let i = 2; i <= factorial; i++) {
        result *= i;
    }
    document.getElementById('factorial').innerHTML = '<br>' + result;
}
document.write('<h3 id="factorial"></h3>')
document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    var contnum = prompt('conunt number !');
    var cotnum = contnum.length;
    // for (var i = 1; i < contnum.length; i++) {
    //     console.log(i);
    //     break
    // }
    document.getElementById('count').innerHTML = '<br>' + cotnum;
}
document.write('<h3 id="count"></h3>')
document.write("<br>");
document.write("<br>");


//question no 8

document.write("<h3>Question no 08</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques8()">Click Me</button>');
function ques8() {
    var Perpendicular = prompt('put the Perpendicular number!');
    var Base = prompt('put the Base number!');
    var perpenqure = Perpendicular * Perpendicular;
    var basequre = Base * Base;
    var calHypotenuse = perpenqure + basequre;
    document.getElementById('hypo').innerHTML = `<br>Hypotenuse : ${calHypotenuse}`;
}
document.write('<h3 id="hypo"></h3>');
document.write("<br>");
document.write("<br>");

//question no 9

document.write("<h3>Question no 09</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques9()">Click Me</button>');
function ques9() {
    var withe = prompt('width');
    var hight = prompt('height');
    function nameal(withe, hight) {
        var area = withe * hight;
        document.getElementById('area').innerHTML = `<br>Area : ${area}`;
    }
    nameal(withe, hight);
    // document.getElementById('hypo').innerHTML = `<br>Hypotenuse : ${area}`;
}
document.write('<h3 id="area"></h3>');
document.write("<br>");
document.write("<br>");

//question no 10

document.write("<h3>Question no 10</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques10()">Click Me</button>');
function ques10() {
    function isPalindrome(str) {
        // Remove non-alphanumeric characters and convert to lowercase
        str = str.toLowerCase().replace(/[\W_]/g, '');

        // Initialize two pointers, one starting from the beginning and one from the end
        let left = 0;
        let right = str.length - 1;

        // Compare characters from both pointers moving towards the center
        while (left < right) {
            if (str[left] !== str[right]) {
                return false; // If characters do not match, it's not a palindrome
            }
            left++; // Move the left pointer forward
            right--; // Move the right pointer backward
        }

        return true; // If all characters match, it's a palindrome
    }

    // Example usage:
    console.log(isPalindrome("madam"));  // true
    console.log(isPalindrome("racecar"));  // true
    console.log(isPalindrome("hello"));  // false
    console.log(isPalindrome("A man, a plan, a canal. Panama"));  // true    
}
document.write("<br>");
document.write("<br>");

//question no 11

document.write("<h3>Question no 11</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques11()">Click Me</button>');
function ques11() {
    var str = prompt('please put the sebtences in lower case!');
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    let capitalizedString = words.join(' ');
    console.log(capitalizedString)
    document.getElementById('upper').innerHTML = '<br>' + capitalizedString;
}
document.write('<h3 id="upper"></h3>')
document.write("<br>");
document.write("<br>");

//question no 12

document.write("<h3>Question no 12</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques12()">Click Me</button>');
function ques12() {

}
document.write("<br>");
document.write("<br>");

//question no 13

document.write("<h3>Question no 13</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques13()">Click Me</button>');
function ques13() {

}
document.write("<br>");
document.write("<br>");

//question no 14

document.write("<h3>Question no 14</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques14()">Click Me</button>');
function ques14() {

}
document.write("<br>");
document.write("<br>");

document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075
