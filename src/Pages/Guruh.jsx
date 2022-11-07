import React from 'react'
import Groups from '../Components/Groups/Groups'
import Data from '../Components/Groups/Data.json'


export default function Guruh() {
  return (
    <div style={{width:"80%", height:"auto" , display:"flex" , flexWrap:"wrap" , margin:"0 auto"}}>
        {
            Data.map((arr , i)=>{
                return(
                    <div style={{width:"287" , height:"221" , margin:"20px"}}>
                    <Groups state={arr}/>
                    </div>
                )
            })
        }
    </div>
  )
}
