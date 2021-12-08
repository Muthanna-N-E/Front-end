var cont=document.getElementById("exp");
var button=document.getElementById("btn");
button.addEventListener("click", function()
{
    console.log("Hello");
});
console.log(cont);
var container=document.getElementsByClassName("expample");
var but=document.getElementById("button");
but.addEventListener("click", function()
{
    console.log("Good Morning");
});
console.log(container);
var con=document.getElementsByName("forexpample");
var butt=document.getElementById("butexp");
butt.addEventListener("click", function()
{
    console.log("How Are You");
});
console.log(con);
var tagg=document.getElementsByTagName("p");
var neww=document.getElementById("tag");
neww.addEventListener("click", function()
{
    console.log("Welcome");
});
console.log(tagg);