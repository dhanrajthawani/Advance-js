const students = [
    {
     name : "Dhanraj",
     Roll_Num : 12,
     course : "FSD"
    },
    
    {
     name : "Rajesh",
     Roll_Num : 23,
     course : "FSD"
    },
    
    {
     name : "simran",
     Roll_Num : 8,
     course : "FSD"
    },
    
    {
     name : "mayank",
     Roll_Num : 1,
     course : "FSD"   
    }
];


function getItem(){
    console.log("getItem");
    setTimeout(()=>{
        students.forEach((students)=>{
            console.log(students.name)
        })
        
    },2000)
}
getItem(students.name);

function creatItem(newstudents){
    console.log("create students")
    return new Promise((resolve, reject)=>{
        students.push(newstudents)
        let flag = true;
        if(flag){
            resolve();
        }
        else{
            reject("Problem Is occur");
        }
    },3000)
}
creatItem({
     name : "me",
     Roll_Num : 34,
     course : "FSD"
    });