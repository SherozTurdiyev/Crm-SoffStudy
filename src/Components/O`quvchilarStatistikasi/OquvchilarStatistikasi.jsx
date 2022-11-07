import React from 'react'
import './OquvchilarStatistikasi.css'
import SouthIcon from '@mui/icons-material/South';
import StraightIcon from '@mui/icons-material/Straight';
import { margin } from '@mui/system';

export default function OquvchilarStatistikasi() {
  return (
    <div>
      <div className="container">
        <img className='img' src="./images/OquvchilarStatistikasi__img/Group 10.png" alt="rasim_oquvchi" />
          <div>
            <p>Hamma o’quvchilar</p>
            <h2>0 ta</h2>
            <p style={{display:"flex" , alignItems:"center"}}><StraightIcon  style={{fontSize:"15px" , color:"green" , marginRight:"5px"}}/> <span style={{color:"green"}}>16%</span> Oylik</p>
          </div>
           <img className='img' src="./images/OquvchilarStatistikasi__img/Group 11.png" alt="rasim" />
          <div className='Bitiruvchilar__div'>
            <p>Bitirgan o’quvchilar</p>
            <h2>0 ta</h2>
          </div>
          <img className='img' src="./images/OquvchilarStatistikasi__img/Group 36646.png" alt="rasim" />
          <div>
            <p>Ketgan O’quvchilar</p>
            <h2>0 ta</h2>
            <p style={{color:"red" , display:"flex" , alignItems: "center"}}><SouthIcon style={{fontSize:"15px" , marginRight:"5px"}}/> 1% oylik</p>
          </div>
          <img className='img' src="./images/OquvchilarStatistikasi__img/Group 10 (1).png" alt="rasim" />
          <div>
            <p>Faol o’quvchilar</p>
            <h2> 0 ta</h2>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptfXtnX6rgULIFv0Kv1039GKf0rEbxVAoZg&usqp=CAU"} style={{width:"25px" , height:"25px" , borderRadius:"50px"}} alt="ranaldo" />
          </div>
      </div>
    </div>
  )
}
