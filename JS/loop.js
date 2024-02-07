/*function GetResultFun()
{
    var inputValue=document.getElementById("tb_value").value;
    console.log( inputValue);



    inputValue=Number(inputValue);

    while(inputValue<20)
    {
        console.log("input value"+ inputValue + "is smaller than 20");
        inputValue ++;

        for(inputValue;inputValue <30; inputValue++)
        {
            console.log("input value in for loop  "+ inputValue + " is smaller than 20 "); 
        }
        

    }

    do
    { 
        console.log("input value in do while for"+ inputValue + "is smaller than 25");
    inputValue ++;
    }

    while(inputValue<0)

  
}*/



/*
function GetResultFun(){
    var listofnames=["pavithra","ravi","raju","ramu"];
    console.log("length of array listofnames..",listofnames.length);
    console.log(listofnames[0]);
    console.log(listofnames[2]);
    console.log(listofnames);
    for(let a=0;a<listofnames.length;a++)
    {
        console.log(listofnames[a]);

    }
    console.log("output from for OF");
    for (let name of listofnames)
    {
        console.log(name);

    }
    for(let a=0;a<listofnames.length;a++)
    {
        console.log(listofnames[a]);
        if(a==2)
        {break;
        }
    }
    var listofcars={name:"bmw",price:"1c",mdate:"2020"}
    console.log(listofcars);
    console.table(listofcars);
    for(let property in listofcars){
        console.log(property +":"+ listofcars[property]);

    }
}
GetResultFun();



function GetResultFun()
{
    var text=" welcome to welcome javascript program organized by brightskills anf brightskills welcomes you once again";
    var output=text.toUpperCase();
    console.log(output);
    var output=text.toLowerCase();
    console.log(output);

    var output=text.slice(-6);
    console.log(output);

    var output=text.substring(0,6);
    console.log(output);
    var output=text.slice(-10);
    console.log(output);
    var output=text.charAt(0)
}
GetResultFun();
*/
/*
    console.log(text.length);
    console.log(text.indexOf("welocme"));
    console.log(text.indexOf("welocme",10));
    console.log(text.indexOf("welocme"));
    console.log(text.indexOf("welocme"));
    console.log(text.search("welocme"));
    let arr=text.search(/welcome/);
    console.log(arr);
    let arr1=text.match(/welocme/)
    console.log(arr1);
    let arr11=text.match(/welocme/);
    console.log(arr11);
    console.log(text.slice(19,29));



    let today= new Date();

console.log(today);

console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMilliseconds());
console.log(today.getSeconds());

console.log(today.getMonth());

var month=["jan", "feb", "mar", "apr" ];
console.log(month[today.getMonth()]);

let dob=new Date("2004-12-05");
console.log(dob);


let age =today.getFullYear()-dob.getFullYear();
console.log(age);






}


GetResultFun();
*/ 



function GetResultFun()
{
    var namelist=["karthick","kavin","kayal","Ragu","mani","harsh","anand","basheer"];
    console.log(namelist);
    console.table(namelist);
    //console.table(namelist[0]);
    //console.table(namelist[1]);
    //console.table(namelist[2]);
    //console.table(namelist[3]);
    //console.table(namelist[4]);
     
    for (var a=0; a<namelist.length;a++)
    {
        console.log(namelist[a]);

    }
    var result=namelist.forEach(function(name1){
        console.log(name1);
    
    })
    console.log("arrow output");
    var result=namelist.forEach(name1=>console.log(name1));
    var namelist=["karthick","kavin","kayal","Ragu","mani","harsh","anand","basheer"];
    var define1="m";
    var result=namelist.filter(name1=>name1.startsWith("k") || name1.endsWith("k") || name1.startsWith(define1));
    console.log(result);

var listofnumbers=[1,2,3,4];
var result=listofnumbers.map(number=>number*2);
console.log(result);

/*
var listofnumbers=[1,2,3,4];
var result=listofnumbers.map(number=>number*2);
console.log(result);
var result=listofnumbers.reduce((sum,number)=>sum+=1);
console.log(result);
console.log(Math.PI);
console.log(Math.E);
console.log(2*Math.PI*2);
var a=4.4;
console.log(Math.round(4.4));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.4));
console.log(Math.sqrt(4));
console.log(Math.pow(4,2));
console.log(Math.floor(Math.random()*10+1000));
console.log(Math.abs(-4.75));
console.log(Math.floor(-4.75));
console.log(Math.min(20,25,35,25));
console.log(Math.max(20,25,35,25));
*/
}


GetResultFun();

