import React , {useState , useEffect} from 'react'
import Groups from '../Components/Groups/Groups'
import Data from '../Components/Groups/Data.json'
import OquvchilarKeldiKetish from '../Components/O`quvchilarStatistikasi/OquvchilarStatistikasi'
import GetGroups from '../utils/GetGroups'

export default function Guruh() {
  const [groupsData , setGroupsData] = useState([])
  let data = {
      "name": "Frontend",
      "direction": 2,
      "teacher": 3,
      "students": [
        0
      ],
      "room": 1,
      "day": 1,
      "is_active": true
    }
  
  useEffect(()=>{
    GetGroups.getGroupsItem()
    .then((res)=>{setGroupsData([...res.data])})
    .catch((res)=>{console.log(res);})

    GetGroups.setGroupsItem(data)
    .then(res=>{console.log(res);})
  },[])
  return (
    <div>
      <OquvchilarKeldiKetish />
          <div style={{width:"80%", height:"auto" , display:"flex" , flexWrap:"wrap" , margin:"0 auto" , marginLeft:"260px"}}>
        {
           (groupsData.length > 0)?
           <>
           {
             groupsData.map((arr , i)=>{
              return(
                  <div key={i} style={{width:"350px", height:"221" , margin:"20px" ,}}>
                  <Groups state={arr}/>
                  </div>
              )
          })
           }
           </>
           :
           <>
           loading...
           </>
        }
    </div>
    </div>
  )
}
