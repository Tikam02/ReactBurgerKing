window.onload = function(){
 
    const  pi = 3.142;
    console.log(pi);


var x = 100;

if(x>5){
    let x=5;
    console.log("inside_locally:"+x);
}
    console.log("outside_globally_locked:"+x);
}