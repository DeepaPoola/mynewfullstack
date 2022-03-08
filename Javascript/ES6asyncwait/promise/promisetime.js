let employees =[{id:10,name:"sunny",salary:50000},
               {id:20,name:"deepa",salary:25000},
               {id:30,name:"Nallapu",salary:40000}]
let createEmployee =(emp)=>{
    return new Promise((resolve,reject)=>{
     let flag=true;
     setTimeout(()=>{
      employees.push(emp);
      flag ? resolve("Inserted"):reject("Not Inserted")
     },2000);
    });
}
let getEmployee=(emp)=>{
    setTimeout(()=>{
        let rows =" "
        employees.map((emp)=>{
         rows+=`<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
               </tr>`
        })
        document.getElementById("tbody-data").innerHTML = rows;
    },1000)
}
createEmployee({id:40,name:"Sunnydeepa",salary:60000})
.then((msg)=>{
   console.log(msg)
   getEmployee()
})
.catch((error)=>{
console.error("error")
})