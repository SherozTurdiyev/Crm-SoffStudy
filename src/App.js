// import './App.css';
import Sing_in from "./Components/Sing In/Singin"
import Navbar from "./Components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'
import Dashbord from "./Pages/Dashbord";
import Guruh from "./Pages/Guruh";
// import Registration from "./Components/Registration/Registration";
// import OquvchilarStatistikasi from "./Components/O`quvchilarStatistikasi/OquvchilarStatistikasi";
//  import YillikStatistika from "./Components/Yillik Statistika/YillikStatistika";
// import Yangi_Qoshilgan_Oquvchilar_Stastikasi from "./Components/Yangi qo’shilgan o’quvchilar Stastikasi/Yangi_Qo’shilgan_O’quvchilar_Stastikasi";
import SignIn from './Components/Sing In/Singin'
function App() {
  return (
    <div className="">
     {/* <Guruh/> */}
     {/* <SignIn/> */}
      <div >
        <Dashbord />
      <Outlet/>
      </div>
    </div>
  );
}

export default App;
