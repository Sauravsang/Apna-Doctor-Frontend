import React, { useState } from 'react'

const Doctors = ({ search }) => {
    const[sortOrder,setSortOrder]=useState("ass");
    const doctorsData=[
        {id:1,name:"Dentists",price:599},
        {id:2,name:"Dermatologists",price:699},
        {id:3,name:"Pediatricians",price:499},
        {id:4,name:"Cardiologists",price:799},
        {id:5,name:"Therapists",price:299},
        {id:6,name:"Optometrists",price:899},
    ];

    const filteredDoctors=doctorsData.filter(doctors=>doctors.name.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>{
      return sortOrder==="asc" ? a.price-b.price : b.price
    })

  return (
    <div>
    <div className="flex gap-4 mb-4 "> 
      <button
        onClick={() => setSortOrder("asc")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Low to High
      </button>
      <button
        onClick={() => setSortOrder("desc")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        High to Low </button> </div>
        
          <ul>
              {
                filteredDoctors.length>0 ?(filteredDoctors.map((doctors)=>(<li key={doctors.id} className='mb-2'>{doctors.name} - ${doctors.price}</li>))):(
                  <li>No doctors found</li>
                )
              }
          </ul>
        

    </div>
  )
}

export default Doctors