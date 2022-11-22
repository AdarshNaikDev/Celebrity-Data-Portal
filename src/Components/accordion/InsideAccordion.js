import React, { useState,useEffect } from 'react'
import EditAcordion from './EditAcordion';

import ViewAccordion from './ViewAccordion';

function InsideAccordion({stateData, dob, setCelebritiesData,celebritiesData}) {

    const[userAge, setUserAge] = useState()
    const[editcliked, setEditClicked] = useState(false);

   useEffect(()=>{
    // console.log("inside effect")
    setUserAge(calculateAge());
    // console.log("userAge",userAge)
    
    
   })

   function calculateAge(){
    const ageDifMs = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(ageDifMs);
    let agee = parseInt(Math.abs(ageDate.getUTCFullYear()-1970)); 
   return agee
   }



  return (
    <>
        
         
         {/* { editcliked? <EditAcordion userAge={userAge} stateData={stateData} setEditClicked={setEditClicked} editcliked={editcliked}/>:<ViewAccordion userAge={userAge} stateData={stateData} setEditClicked={setEditClicked} editcliked={editcliked}/>} */}
         <ViewAccordion setCelebritiesData={setCelebritiesData} celebritiesData={celebritiesData} userAge={userAge} stateData={stateData} setEditClicked={setEditClicked} editcliked={editcliked}/>
    </>
   
  )
}

export default InsideAccordion