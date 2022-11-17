


import React from "react";
import "./style.css";
import { useState } from "react"
import { Dropdown } from 'primereact/dropdown';
 

export default function App() {

  

  const employee = [

    {
      name:"Rahul",
      id:1,
      companyname: "virtusa"
    },
    {
      name:"Nihil",
      id:2,
      companyname:"virtusa"
    },
    {
      name:"dani",
      id:3,
      companyname : "NTT Data"

    },
    {
      name:"Madhan",
      id:4,
      companyname:"NTT Data"

    },
    {
      name:"wasim",
      id:5,
      companyname:"Mr.Cooper"
    }
]
  
 const [val,setValue] = useState("")
 const  [employees,setEmployees] = useState(employee)
 function filteredlist (val){

if(val==="")
 { return	employee
}
else{

   const b = employees.filter((item) =>{
    console.log(item.companyname.toLowerCase(),val,"item.company 47")
    return  item.companyname.toLowerCase() === val.toLowerCase()
  })
   console.log(b,"bbbbb")
  return b 
 }}
 
 console.log(filteredlist(val), "filterlist",val,"54")

 return (
    <div className= "main">
<input list  = "data"onChange ={(e) =>setValue(e.target.value)}  placeholder = "search..."/> 
<datalist  id = "data">

{employee.map (options=><option>{options.companyname}</option>)}

  </datalist>

<table>
<thead>
<tr>
<th>name</th>
<th>id</th>
<th>companyname</th>
</tr>
</thead>
<tbody>
{filteredlist(val).map((data)=>(
  
<tr>
  
<td>{data.name}</td>
<td>{data.id}</td>
<td>{data.companyname}</td>
</tr>
))}

</tbody>
</table>
    </div>
  );
}


