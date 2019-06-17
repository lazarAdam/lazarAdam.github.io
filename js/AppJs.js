/**
 *
 * @author oussama el aallali
 */

var inputScreen = document.getElementById("screen");

var cookieValue = "";// cookie input value

setInterval(logCookies,300);// keep updating the input log by calling logCookies

function calcFunction(elm){

    var inputString = elm.innerHTML;// User input holder

    //condition to check if the user clicked = button
    if(inputString == '=') {


        cookieValue = inputScreen.innerHTML + "="+ eval(inputScreen.innerHTML);// save  user and the result input for the value of the cookie


        inputScreen.innerHTML = eval(inputScreen.innerHTML);// display the result on the screen

        cookieMaker(cookieValue); // call the cookieMaker to create a cookie
    }

    //condition to handle clearing the screen
    else if(inputString == 'C'){


        inputScreen.innerHTML='0';//display 0 if C is pressed


    }

    else{

        //get the left hand operand
        if(inputScreen.innerHTML == '0'){inputScreen.innerHTML = inputString


        }
        //get the left operand
        else{
            inputScreen.innerHTML += inputString;//concatenated input with left, right operands and the operator
        }


    }


}

// cookie creating method
function cookieMaker(value){

    var d = new Date();// get date object

    d.setTime(d.getTime() + (365*24*60*60*1000)); //set the time to a year form the current date

    var expr= d.toUTCString();//assign date value to variables as the expiration date

    document.cookie = value+ ";" + expr +";path=/";// create the cookie
}


// get the cookie stored values
function logCookies() {
    var output ="";// cookie value holder
    var ck = document.cookie;//reference to the cookie DOM
    var ckArray = ck.split(";");// list of values in the cookie

    ckArray.reverse();// reverse the order of the array this handy since we need only the 10 most recent values

    for (var i = 0 ; i< ckArray.length;i++){// loop through the cookie values array

        if(i==10){break;}// break if we reached 10 most recent values
        output+= ckArray[i]+"<br>";//concatenate  the values to be outputted to the HTML tag


        document.getElementById("p1").innerHTML = output; //display the values on the HTML tag

    }

}

