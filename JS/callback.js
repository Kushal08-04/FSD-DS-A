/*//define a function that takes another function as an argument
function greet(name, callback) {
   console.log('Hi ' + name);
   callback();
}
// Define the callback function
function callMe() {
   console.log('I am a callback function');
}
// Call the greet function with the callback
greet('Peter', callMe);*/
function add(a, b, callback) {
    console.log(`the sum of ${a} and ${b} is : ${callback(a, b)}`);
}
function sum(a, b) {
    return a + b;
}
add(5, 6, sum);
function sumWithMsg(clb,msg){
    const result=clb(5,6);
    const fresult = "Hi "+msg+" your result is:"+result;
    console.log(fresult);
}
sumWithMsg(sum,"Peter");


//User verification using callback function
const data=[
    {
        username:"Peter",
        password:"1224"
    },
    {
        username:"John",
        password:"1334"
    },
    {
        username:"Mike",
        password:"1444"
    },
    {
        username:"David",
        password:"1554"
    }
]
function validateUser(u,p){
    for(let i=0;i<data.length;i++){
        if(data[i].username===u && data[i].password===p){
            return true;
        }
    }
    return false;
}
const u="Mike";
const p="1444";
function checkUser(u,p,callback){
    const result=callback(u,p);
    if(result){
        console.log("Login successful");
    }
    else{           
        console.log("Login failed");
    }
}
checkUser(u,p,validateUser);