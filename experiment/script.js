window.onload = function(){



//---------------------------Template Strings----------------------
    // function logninja(name,age){
    //     console.log('my name is ${name} and my age is ${age}');
    
    // }
    // logninja("Tikam",21);
    // } 
 

    //------------------------------------___Const----------------------------------------
//     const  pi = 3.142;
//     console.log(pi);

//---------------------------------------------Let---------------------------------------
// var x = 100;

// if(x>5){
//     let x=5;
//     console.log("inside_locally:"+x);
// }
//     console.log("outside_globally_locked:"+x);
// }

// var items = document.getElementsByTagName("li");

// for(let x=0; x<items.length; x++){
//     items[x].onclick = function(){
//         console.log(x);
//     }
// }
// }


//-----------------------------Object Literal enhancement-------------------------------- 

// var name="Ninja";
// var belt="Black";

// var ninja =  {
//     name,belt,
//     chop(x){
//         console.log('you chopped my head ${x} times')
//     }
// }
// console.log(ninja.chop(6));
// }

//-----------------------------------------New String methods---------------------------
// var str="Good";
// console.log(str.repeat(6))
// this.console.log(str.startsWith("Good"))
// this.console.log(str.endsWith("bye"))
// this.console.log(str.includes("Good"))

// }

/*------New String Methods-------
 -repeat
 -startsWith
 -endWith
 -includes
 */

 //------------------------------------__Arrow Function-----------------
//  var greet = ()=>{
//      this.console.log("hello world")
//  }
//  greet();
// }

//------------------------Sets------------------
var names = new Set();
names.add("shaun").add("tikam").add("ryu");
this.console.log(names)
}