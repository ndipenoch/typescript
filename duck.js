function addition(value) { console.log("Value is: " + value); }
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
var flag = true;
console.log("Value assigned to flag is: " + flag);
var num1 = 6;
console.log("Value assigned to num1 is: " + num1);
//string 
var color = "blue";
console.log("Value assigned to color is: " + color);
//array 
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
}
//tuple 
var x;
x = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is: " + colorName);
console.log("Enum: Value of c is: " + c);
console.log("Enum: Name of c is: " + Color[c]);
//any
var notSure = 4;
notSure = "maybe a string instead";
console.log("Value is a string: " + notSure + ".");
notSure = false;
console.log("Now value is a boolean: " + notSure + ".");
//any array 
var listany = [1, true, "free"];
for (var i = 0; i < listany.length; i++) {
    console.log("Before: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
listany[1] = 100;
for (var i = 0; i < listany.length; i++) {
    console.log("After: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
function str_len(value) {
    var num = value.length;
    return num;
}
function str_len_nospaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log("String length with spaces and all is: " + str_len("test 1"));
console.log("String length with spaces not included in the count: " + str_len_nospaces("test 1"));
function str_len_both(value, spaces) {
    //note ? for optional parameter, 
    //so will default to false due to 
    //code in the function, but I could 
    //change from optional and provide 
    //a default to the parameter by writing
    //the signature as 
    //function str_len_both(value: string, spaces: boolean=false): number{ 
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("Function combined: String length with spaces and all is: " + str_len_both("test 1", false));
console.log("Function combined: String length with spaces not included in the count: " + str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: " + str_len_both("test 1"));
