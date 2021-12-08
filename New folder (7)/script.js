let work = true;
let wrk=new Promise(function(resolve,reject)
{
    if(work){
        resolve("Work Done");

    }else {
        reject("Work on Progress");
    }
});
wrk.then((message)=>console.log(message));



let workn = false;
let wrkn=new Promise(function(resolve,reject)
{
    if(workn){
        resolve("Work Done");

    }else {
        reject("Work on Progress");
    }
});
wrkn
.catch((message)=>console.log(message))
.finally(() =>console.log("Thank you for Choosing us"));