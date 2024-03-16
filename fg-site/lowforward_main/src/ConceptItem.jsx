import React from 'react'
import { Link } from "react-router-dom";


const ConceptItem = ({tag, title, details}) => {
    return (
        
        <div> 

            <div className="flex flex-col md:flex-row"> {/*Outline for article components */}

               <ul>
                <p className='flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm'>
                <span className='text-2xl font-semibold text-whitesmoke'>{title}</span>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-emerald-500 rounded-md'>{tag}</span>

             </p>
             <p className='text-base font-normal text-stone-300'>{details}</p>
              </ul>
             </div>
        </div>
    )
}

export default ConceptItem;