import React,{useState} from 'react'
import {BsSearch} from "react-icons/bs"

import '../../App.css'
import {celebrities} from './celebrities'
import Accordion from './Accordion'

function AccordionList() {
    
    const [celebritiesData, setCelebritiesData]= useState(celebrities)
    const[searchTerm, setSearchTerm] = useState("");

    function searchHandler(event){
      setSearchTerm(event.target.value)
      setCelebritiesData(celebritiesData.filter((event)=>event.first === searchTerm))
    }
    console.log(searchTerm)
  return (
    <>
   <main className='mainn'>
    <div className='container'>
        <div>
        <input className='search-bar' type="text" placeholder ="Search Your favorite celebrity" onChange={(event)=>setSearchTerm(event.target.value)}/>
        <button className='search-icon' onClick={searchHandler}>Search</button>
        </div>
        
        
        <section className='sectionfirst'>
        {
            celebritiesData.map((data)=>{
                return <Accordion key={data.id} {...data} celebritiesData={celebritiesData} setCelebritiesData={setCelebritiesData} stateData={data}/>
            })
        }
        </section>
       </div>
    </main>
    </>
    
  )
}

export default AccordionList