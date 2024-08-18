import React from 'react'
import "./pages.css"
import Card from '../components/Card'
import EnglishORspanish from '../components/EnglishORspanish'
const Pages = ({children}) => {
  return (
   <section className='section-pages-content'>
    <Card/>
    <EnglishORspanish/>
    {children}
    <div className="pagedecorator">

    </div>
    <div className="pagedecorator2">

</div>

   </section>
  )
}

export default Pages
