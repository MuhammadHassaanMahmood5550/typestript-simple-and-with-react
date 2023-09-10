// basics
let variable = "hello"
variable = "h"
let age = 21;
age = 1;

//won types
let vari1: number = 22;
vari1 = 2;
let vari2: boolean = false;
vari2 = true;

//Any type
let anyvariable;
anyvariable = 2;
anyvariable = "2";
anyvariable = true;
anyvariable = [];
//--or
let anyarr: any[];
anyarr = [1, 23];
anyarr = ["w", "3", 550, true];



// Union types
let vari3: string | number;
vari3 = 2;

//array
let arr: string[] = ["1", '2', '3'];
arr.push(3);

let arrr: string[];
arrr = ["e", "r", "s", 8];

let arr1: (string | number | boolean)[] = ["1", '2', '3'];
arr1.push(3);
arr1.push(false);

//objects
let obj1: {
    name: string,
    age: 21 | 22,
    job: boolean,
}
obj1 = {
    name: "asad",
    age: 21,
    job: true
}
obj1.name = 21;
type objj = {
    name: string,
    age: 21,
    job: boolean,
}
let obj: objj = {
    name: "asad",
    age: 21,
    job: true
}


//another object
let userObj: {
    userName: string,
    userAge: number,
    userAddress?: string
}
userObj = {
    userName: "azan",
    userAge: 21,
}
userObj.userAddress = '021321820393';

//functions
let msg = () => {
    console.log("my msg");
}

let funReturnString = (value: string): string => {
    return value;
}
funReturnString("fsddfdsdsf");

let multipleParameter = (num1: number, num2: number, another?: number): number => {
    return num1 + num2;
}
multipleParameter(2, 4);

//type Alices
type userType = {
    name: string,
    age: number,
    job: boolean,
    exprience: string[]
}

let multipleParameterFun = (user: userType): void => {
    console.log("dj");
}
multipleParameterFun({ name: "jsj", age: 200, job: true, exprience: ["developer", "designer", "frelancer"] });

//functon 
type funcType = (num: number, str: string) => string;

let msgFun: funcType = (numm, str) => {
    return str;
}
msgFun(22, 'ss');

//iterfaces
//--no = sign
interface Iuser {
    name: string,
    email: string,
    age: number
}

interface Employee extends Iuser {
    employeeCode: number
}

const employee: Employee = {
    name: 'string',
    email: 'string',
    age: 2,
    employeeCode: 2223
}

//GENERICS basics
function printData(data: number | string | boolean) {
    console.log("data: ", data);
}

printData(2);
printData("hello");
printData(true);
printData([2]);
// what if in the future, you might want to print an array of numbers using the same function.
function printData2<T>(data: T) {
    console.log("data: ", data);
}
printData2([2]);

function printData3<x, y>(data1: x, data2: y) {
    console.log("data: ", data1, data2);
}
printData3([2], { name: "d" });
// How to Use Generics with Interfaces, it also increase reuseability
interface UserData<X, Y> {
    name: X;
    rollNo: Y;
}

const user: UserData<string, number> = {
    name: "Ram",
    rollNo: 1
}

const teacher: UserData<object, boolean> = {
    name: { dsds: "sd" },
    rollNo: true
}
//GENERICS
interface aboutAuthors {
    name: string,
    rating: number
}

interface Posts {
    id: number,
    date: string,
    details: { name: string, rating: number }[]
    // or
    // details: aboutAuthors[] 
}

const test: Posts = {
    id: 222,
    date: 'string',
    details: [{ name: "dd", rating: 33 }, { name: "dd", rating: 33 }]
}
//what if details have other fields added in funture so generics
interface postsBetterr<anythig> {
    id: number,
    date: string,
    details: anythig;
}

const testMee: postsBetter<String | number | object> = {
    id: 222,
    date: 'string',
    details: [{ name: "dd", rating: 33, lslfdj: "dsf" }, { name: "dd", rating: 33 }]
}
//---or
interface postsBetter<anythig> {
    id: number,
    date: string,
    details: anythig
}

const testMe: postsBetter<String | number | object> = {
    id: 222,
    date: 'string',
    details: ['anythig', "dsf", 22, { name: "dd", age: 33 }, true]
}
//to add limitations
interface postsEvenBetter<anythig extends object> {
    id: number,
    date: string,
    details: anythig[];
}

const testMe2: postsEvenBetter<aboutAuthors> = {
    id: 222,
    date: 'string',
    details: [{ name: "dd", rating: 33 }]
}

//  Narrowing
function padLeft(padding: number | string, input: string) {
    return " ".repeat(padding) + input;
}
//to correct this we have Narrowing
function padLeft1(padding: number | string, input: string) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }
    return " ";
}
//what if null or undefined
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}
//check undefined and null
function printAll1(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}

//Tuples =
//   What are tuples in TypeScript?
// A tuple is a typed array with a pre-defined length and types for each index. 
let myTuple: [string, number] = ["hello", 20];




