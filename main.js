
// var simple = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
// var complicated = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
// var double = ["vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
// var triple = "cent";
// var quadruple = "mille";

// function numberToLetter() {
//     let printnumber = document.form1.entree.value;
//     let t = printnumber.split("");
//     let message = "";
//     // let mille = t.slice(2)  

//     if (t.length == 4) {
//         message += simple[t[0] -1] + "-mille";      
//         console.log(message);
//     } else if (t.length == 3) {
//         message += simple[t[0] - 1] + "-cent";
//         console.log(message);
//     } else if (t.length == 2) {
//         message += double[t[0] - 2];
//         console.log(message);
//     } else if (t.length == 1) {
//         message += simple[t[0] - 1];
//         console.log(message);
//     } 


var simple = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
var complicated = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
var double = ["vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
var triple = "cent";
var quadruple = "mille";

function numberToLetter(i) {
    let printnumber = i+"";//document.form1.entree.value;
    //console.log(printnumber);
    let t = printnumber.split("");
    //console.log(t);
    let message = "";

    if (t.length == 4 && t[0] == "1") {
        message += quadruple;
        //console.log(message);
        t = t.splice(1);
        if (t[1] !== "0" && t[2] !== "0" && t[3] !== "0") {
            message += "-";
        }
    } else if (t.length == 4) {
        message += simple[t[0] - 1] + "-" + quadruple;
        //console.log(message);
        t = t.splice(1);
        if (t[1] !== "0" && t[2] !== "0" && t[3] !== "0") {
            message += "-";
        }

    }

    if (t.length == 3 && t[0] == "0") {
        t = t.splice(1);
    } else if (t.length == 3 && t[0] == "1") {
        message += triple;
        //console.log(message);
        t = t.splice(1);
        if (t[1] !== "0" && t[2] !== "0") {
            message += "-";
        }
    } else if (t.length == 3) {
        message += simple[t[0] - 1] + "-" + triple;
        //console.log(message);
        t = t.splice(1);
        if (t[1] !== "0" && t[2] !== "0") {
            message += "-";
        }
    }

    if (t.length == 2 && t[0] == "0") {
        t = t.splice(1);
    } else if (t.length == 2 && t[0] == "1") {
        // var tDouble = t[1];
        message += complicated[t[1]];
        //console.log(message); 
    } else if (t.length == 2 && (t[0] == "7" || t[0] == "9")) {
        message += double[t[0] - 2];
        message += "-";
        // var ttDouble = t[1];
        message += complicated[t[1]];
        //console.log(message);
    } else if (t.length == 2) {
        message += double[t[0] - 2];
        //console.log(message);

        if (t[1] !== "0") {
            message += "-";
        }
        t = t.splice(1);
    }

    if (t.length == 1 && t[0] == "0") {

    } else if (t.length == 1) {
        message += simple[t[0] - 1];
        //console.log(message);
    }
    console.log(message); 
   
}
function allNumber() {
    for (let i = 0; i < 2001; i++) {
        console.log( numberToLetter( i ) );
    }
}
allNumber();
    // if (printnumber.length == 1) {
    //     alert(simple[printnumber-1]);
    // } 
    // while (i < 2001);


