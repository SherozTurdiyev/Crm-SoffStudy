import React, {useEffect , useState} from 'react';
import GetUser from '../../utils/GetGroups';
import GetStudentPayment from '../../utils/GetStudentPayment';
const UserDataSher = () => {
    const [student , setStuden] = useState([])
    useEffect(()=>{
        GetUser.getuserItem()
        .then(res=>{console.log(res);})
        .catch(res=>{console.log(res);})

        GetStudentPayment.getStudentPayment()
        .then(res=>{
            console.log(res.data);
            setStuden([...res.data])
        })
    } , [])
    return (
        <div>
            {
                student.length> 0 ?
                <>
                {
                    student.map((arr , key)=>{
                        return(
                            <div key={key}>
                                <h1>{arr.student}</h1>
                                <h2>{arr.payment}</h2>
                            </div>
                        )
                    })
                }
                </>
                :
                <>Loading...</>
            }
        </div>
    );
}

export default UserDataSher;
