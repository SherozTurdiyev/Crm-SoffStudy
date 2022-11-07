import React from 'react'
import YilikStastika from '../Components/Yillik Statistika/YillikStatistika'
import YangiQoshlganlarStastikasi from '../Components/Yangi qo’shilgan o’quvchilar Stastikasi/Yangi_Qo’shilgan_O’quvchilar_Stastikasi'

export default function Stastika() {
  return (
    <div style={{display:"flex" , alignItems:"center"}}>
      <YilikStastika />
      <YangiQoshlganlarStastikasi />
    </div>
  )
}
