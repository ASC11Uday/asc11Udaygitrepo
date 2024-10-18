console.log
("external");

function 
ExternalScript(){
    console.log("the external script")
}
ExternalScript();

for(var i = 0; i<5;i++){
    console.log(i);
    console.log("value of i is " + i);
    console.log("value of i is ", i ,".")
}