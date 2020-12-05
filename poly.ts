//method overloading
function disp(string):void;
function disp(number):void;
function disp(number,string):void;
function disp(x:any,y?:any){
if(typeof x=="string"){
    console.log(x+"world")
}
if(x=="number"){
    let sum=x+10
    console.log(sum)
}
if(x!="undefined"){
    console.log("inside",x)
    console.log("inside",y)
}
}
disp("helloo")
disp(123)
disp(1,"hello")