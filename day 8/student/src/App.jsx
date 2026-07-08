import { useState } from "react";
import "./App.css";

export default function App() {

const [students,setStudents]=useState([
{name:"Arun",reg:"EC001",sec:"A",status:"Absent"},
{name:"Bala",reg:"EC002",sec:"A",status:"Absent"},
{name:"Charan",reg:"EC003",sec:"A",status:"Absent"},
{name:"Divya",reg:"EC004",sec:"A",status:"Absent"},
{name:"Eswar",reg:"EC005",sec:"A",status:"Absent"},
{name:"Gokul",reg:"EC006",sec:"B",status:"Absent"},
{name:"Hari",reg:"EC007",sec:"B",status:"Absent"},
{name:"Kavin",reg:"EC008",sec:"B",status:"Absent"},
{name:"Nisha",reg:"EC009",sec:"B",status:"Absent"},
{name:"Priya",reg:"EC010",sec:"B",status:"Absent"}
]);

const changeStatus=(i,v)=>{
let data=[...students];
data[i].status=v;
setStudents(data);
};

const total=students.length;
const present=students.filter(s=>s.status==="Present").length;
const absent=total-present;

const table=(sec)=>(
<div className="section">
<h2>Section {sec}</h2>
<table>
<thead>
<tr>
<th>Reg No</th>
<th>Name</th>
<th>Class</th>
<th>Attendance</th>
</tr>
</thead>

<tbody>
{students.map((s,i)=>
s.sec===sec&&(
<tr key={i}>
<td>{s.reg}</td>
<td>{s.name}</td>
<td>III ECE {s.sec}</td>
<td>
<select
value={s.status}
onChange={(e)=>changeStatus(i,e.target.value)}
>
<option>Absent</option>
<option>Present</option>
</select>
</td>
</tr>
)
)}
</tbody>
</table>
</div>
);

return(
<div className="container">

<div className="header">
<h1>HINDUSTHAN INSTITUTE OF TECHNOLOGY</h1>
<h3>Department of Electronics and Communication Engineering</h3>
</div>

<div className="section-container">
{table("A")}
{table("B")}
</div>

<div className="summary">
<div className="card total">
<h3>Total Students</h3>
<h2>{total}</h2>
</div>

<div className="card present">
<h3>Present</h3>
<h2>{present}</h2>
</div>

<div className="card absent">
<h3>Absent</h3>
<h2>{absent}</h2>
</div>

</div>

</div>
);
}