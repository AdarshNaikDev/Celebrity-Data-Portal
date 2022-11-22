import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";


function ViewAccordion({
  userAge,
  stateData,
  setEditClicked,
  editcliked,
  celebritiesData,
  setCelebritiesData,
}) {
  //   console.log("from view acc", editcliked);

  //   console.log(" State Date Country ", stateData);

  //   console.log(" Celebirates Data ", celebritiesData);


  const [updatecountry, setUpdateCountry] = useState(stateData.country);
  const [updateGender, setUpdateGender] = useState(stateData.gender);
  const [updateDescription, setUpdateDescription] = useState(stateData.description);
  const [showAgeModal, setShowAgeModal] = useState(false)
  const[disableOkbtn, setDisableOkbtn] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  

  const onChangeinDescription = (event) => {
    console.log("on change in desc");
    if(event.target.value === "")
    {
        setDisableOkbtn(true)
    }
    else
    {
        setDisableOkbtn(false)
        setUpdateDescription(event.target.value);
    }
    

  };

  const onChangeinGender = (event) => {
    console.log("on change in gender");
    setUpdateGender(event.target.value);
  };

  function toggleAgeModal(){
    setShowAgeModal(!showAgeModal);
  }

  function toggleDeleteModal(event){
    console.log("delete handler triggered");
    console.log(event.target.value);
    if(event.target.value == "no")
    {
        setShowDeleteModal(false);
    }
    if(event.target.value == "yes")
    {
        setCelebritiesData(celebritiesData.filter((item)=>item.id != stateData.id));
        setShowDeleteModal(true)
    }
    
  }
  const onChangeinCountry = (event) => {
    console.log(" Inside Method ", event.target.value);

    if(event.target.value === "")
    {
            setDisableOkbtn(true)
    }
    else{
       
        setUpdateCountry(event.target.value.replace(/[^a-z]/gi, ''));
        setDisableOkbtn(false)
    }
    


    // setCelebritiesData(
    //   celebritiesData.map((item) => {
    //     if (item.id === 1) {
    //       return {
    //         ...item,
    //         country: updatecountry,
    //       };
    //     }
    //     return item;
    //   })
    // );
  };

 const submitHandler = ()=>{
    if(updatecountry== "" || updateDescription == "")
    {
        setDisableOkbtn(true)
    }
    else{
        setCelebritiesData(
            celebritiesData.map((item)=>{
                if(item.id === stateData.id)
                {
                    return{
                        ...item,
                        country: updatecountry,
                        gender:updateGender,
                        description:updateDescription
                    };
                }
                
                return item;
            })
        )
        
        setEditClicked(false)

    }
       

}


const checkAgeHandler = ()=>{
    
    if(userAge<18)
    {
        setShowAgeModal(true)
        
    }
    else{
        setEditClicked(true)
    }
    console.log(userAge)
}



  return (
    <div className="view-accordion">
      <div className="a-gender-c">
        <div className="age-child">
          <h5>Age</h5>
          {
            editcliked?  (<input
            disabled
            type="text"
            value={userAge}
           
          />):(
            <p>{userAge} years</p> 
          )
          }
          {/* <p>{userAge} years</p> */}
        </div>

        <div className="gender-child">
          <h5>Gender</h5>
          {editcliked ? (
            <select onChange={onChangeinGender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Rather not say">Rather not say</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <input
              className="input-border"
              disabled
              type="text"
              value={updateGender}
              onChange={onChangeinGender}
            />
          )}
          {/* <p>{stateData.gender}</p> */}
        </div>

        <div className="country-child">
          <h5>Country</h5>
          {/* <p>{stateData.country}</p> */}
          {editcliked ? (
            <input
              type="text"
              value={updatecountry}
              onChange={onChangeinCountry}
            />
          ) : (
            <input
              disabled
              className="input-border"
              type="text"
              value={stateData.country}
            />
            // <p>{stateData.country}</p>
          )}
        </div>
      </div>
      <div className="desc">
        <h5>Description</h5>
        {editcliked ? (
          <textarea
            type="text"
            className="txt-area"
            value={updateDescription}
            onChange={onChangeinDescription}
          />
        ) : (
          <p>{stateData.description}</p>
        )}
      </div>
      <div className="del-edit">
        {editcliked ? (
          <p
            className="delete-icon"
            onClick={() => setEditClicked(false)}
          >
            <MdCancel size={25} />
          </p>
        ) : (
          <button  onClick={()=>{setShowDeleteModal(true)}} className="delete-icon">
            <AiFillDelete size={25} />
          </button>
        )}

            
        {editcliked ? (
            
            (<button disabled={disableOkbtn}  className="check-icon" onClick={submitHandler}>
                <BsFillCheckCircleFill size={23} />
              </button>)
          
        ) : (
          <p onClick={checkAgeHandler} >
            <FiEdit2 size={23} />
          </p>
        )}
        {showAgeModal? (
            <div className="modal">
            <div onClick={toggleAgeModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Age below 18 are not allowed to edit!!</h2>
              <button className="close-modal" onClick={toggleAgeModal}>
                CLOSE
              </button>
            </div>
          </div>
        ):(null)}

        {showDeleteModal?(
             <div className="modal">
             <div onClick={toggleAgeModal} className="overlay"></div>
             <div className="modal-content">
               <h2>Do you really want to delete this record?</h2>
               <button value="yes" className="close-modal" onClick={toggleDeleteModal}>
                 Yes
               </button>
               <button value= "no" className="close-modal" onClick={toggleDeleteModal}>
                 No
               </button>
             </div>
           </div>
        ):
        (null)
        }
        
      </div>
    </div>
  );
}

export default ViewAccordion;
