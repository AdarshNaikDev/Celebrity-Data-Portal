import React,{useEffect, useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FiEdit2} from 'react-icons/fi'

function EditAcordion( {userAge, stateData,  setEditClicked, editcliked}) {

    const[country, setCountry]= useState("")

    useEffect(()=>{
        setCountry(stateData.country)
    })
  return (
    <div className='view-accordion'>
        <div className='a-gender-c'>
            <div className='age-child'>
            <h5>Edit Age</h5>
            <p>{userAge} years</p>
            </div>

            <div className='gender-child'>
            <h5>Edit Gender</h5>
            <p>{stateData.gender}</p>
            </div>

            <div className='country-child'>
            <h5> Edit Country</h5>
            {/* <p><input className='country-input' value={country}/></p> */}
            {/* <p>{stateData.country}</p> */}
            </div>
          
        </div>
        <div className='desc'>
            <h5>Description</h5>
            <p>
                {stateData.description}
            </p>
        </div>
        <div className='del-edit'>
            <p className='delete-icon'> <AiFillDelete size={25} /></p>
            <p onClick={()=>setEditClicked(!editcliked)}><FiEdit2 size={23}/></p>
        </div>
    </div>
  )
}

export default EditAcordion