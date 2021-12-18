function login_form()
{
  var c=0;
 var usr=document.getElementById("username").value;
 var pass=document.getElementById("password").value;

     if(usr=="ahmed" && pass==123 )
     {

       //document.getElementById("message").innerHTML= "Success";
       alert("Success");

     }
   else {
    //  document.getElementById("message").innerHTML= "Error" ;
        c++;
        alert("Error");
        }
        return(c);
}





 // if (x== "ahmed")
 // {
 //   alert("welcome Ahmed")
 // }




// *************OR AND NOT ************ //
// x=3; y=5;
//
// if(x < 4)
// {
//   alert("yes");
// }
// else {
//   alert("no");
// }

// *************switch************ //
// x=9;
//  switch (x) {
//  case 9 : alert(9);
//      break;
//  case 8 : alert(8);
//     break;
//  default : alert("no")
//  }

// *************for loop************ //
// for (x=0 ; x<10; x=x+2)
// {
//   document.getElementById("simply").innerHTML+="<br/>"+x;
//
// }

// *************while loop************ //
//  k=0;
// while(k<10)
// {
//     document.getElementById("simply").innerHTML += k + "<br/>";
//     k++;
// }

// *************do while  loop************ //
// a=0;
//
// do {
//       document.getElementById("simply").innerHTML += a;
//       a++;
//     } while (a<10);

// *************string************ //

// var x = "ahmed";
// alert(x.length);
// y = x.slice(0,4);
// alert(y);
// z= x.toUpperCase();
// alert(z);
// alert(z.toLowerCase());
// prompt("name");

// *************Funcation************ //
function test()
{
  var name = "Ahmed"
  alert("Welcome : " + name)
}
// test();

// function grade (x, y)
// {
//   if(x==y)
//   {
//     alert("equal")
//   }
//   else {
//     alert("not equal")
//   }
//
// }



// *************array************ //
// var car=['red','x4',50000,10000];
// alert(car[1]);
// alert(car.length);
// alert(car.indexOf('red'));
//
// var ob = {model:"bmw", color:"red" , price:50000};
// alert(ob.model+"  " +ob.price);



// document.getElementById("simply").innerHTML=x+y;


// var arr = [];
// arr[0]="ahmed";
// arr[1]="ali";
 //var ob={name:"ahmed", age:25 , weight:"large"}

//ob.x=30;
//document.getElementById('test').innerHTML = arr[3] + 5;
//alert(ob.x)
// alert(arr.indexOf("ali"));

// *************if ************ //
// var price=2500;
//
// if(price>=5000)
// {
//   alert("you can buy oppo F20 ");
// }
//
// else if (price >= 4000)
// {
//   alert("you can buy nova 3i");
// }
//
// else if (price >= 3000)
// {
//   alert("you can buy samsung note 10");
// }
//
// else if (price >= 2000)
// {
//   alert("you can buy samsung S2 ");
// }
//
// else
// {
//   alert("sorry");
//
// }
