import React from 'react'
import Table from '../Components/Table/Table'
import Navbar from '../Components/Table/Navbar'
import OquvcilarKelishKetish  from '../Components/O`quvchilarStatistikasi/OquvchilarStatistikasi'

export default function Tabl() {
  return (
    <div>
        <OquvcilarKelishKetish />
        <div style={{width:"70%" , marginLeft:"290px"}}>
        <Navbar />
        <Table />
    </div>
    </div>
  )
}
