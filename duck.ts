function addition(value: string) { console.log("Value is: " + value); }
let firstVal: number = 42; let secondVal: number = 1; let sumOfVals: string = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);

let flag: boolean = true; console.log("Value assigned to flag is: "+flag);


let num1: number = 6; 
console.log("Value assigned to num1 is: "+num1);

//string 
let color: string = "blue"; console.log("Value assigned to color is: "+color);
//array 
let list: number[] = [1, 2, 3]; for(let i = 0; i < list.length;i++){ console.log("Number "+(i+1)+" is: "+list[i]+"."); }
//tuple 
let x: [string, number]; x = ["hello", 10]; console.log("Tuple example: "+x[0].substr(1));
//enum
 enum Color {Red = 1, Green, Blue} let colorName: string = Color[2]; let c: Color = Color.Green; console.log("Enum: Value of colorName is: "+colorName); console.log("Enum: Value of c is: "+c); console.log("Enum: Name of c is: " + Color[c]);
//any
 let notSure: any = 4; notSure = "maybe a string instead"; console.log("Value is a string: "+notSure+"."); notSure = false; console.log("Now value is a boolean: "+notSure+".");
//any array 
let listany: any[] = [1, true, "free"]; 
 for(let i = 0; i < listany.length;i++)
 { console.log("Before: Entry "+(i+1)+" is: "+listany[i]+"."); 
}

listany[1] = 100; 
for(let i = 0; i < listany.length;i++){ console.log("After: Entry "+(i+1)+" is: "+listany[i]+".");
}


function str_len(value: string): number{ let num: number = value.length; return num;
 }

function str_len_nospaces(value: string): number{ let num: number = value.replace(/\s+/, "").length;
 return num;
 }

console.log("String length with spaces and all is: "+str_len("test 1"));
console.log("String length with spaces not included in the count: " +str_len_nospaces("test 1"));

function str_len_both(value: string, spaces?: boolean): number{
     //note ? for optional parameter, 
     //so will default to false due to 
     //code in the function, but I could 
     //change from optional and provide 
     //a default to the parameter by writing
     //the signature as 
     //function str_len_both(value: string, spaces: boolean=false): number{ 
         let num: number; if(spaces){ num = value.replace(/\s+/, "").length; }else{ num = value.length; } return num; }
console.log("Function combined: String length with spaces and all is: "+str_len_both("test 1",false)); console.log("Function combined: String length with spaces not included in the count: "+str_len_both("test 1", true)); console.log("Function combined: String length with spaces and all is, not setting spaces parameter so will default to false: "+str_len_both("test 1"));

