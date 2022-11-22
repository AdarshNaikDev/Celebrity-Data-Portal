import React from 'react'
import Accordion from '../accordion/AccordionList'
import '../../App.css'
import AccordionList from '../accordion/AccordionList'
import Accordion1List1 from '../accordion/AccordionList'

function Home() {
  return (
    <>
    <header className='nav'>
        <h1> Welcome to Celebrity Data Portal</h1>
    </header>

    
    <AccordionList/>
    </>
  )
}

export default Home