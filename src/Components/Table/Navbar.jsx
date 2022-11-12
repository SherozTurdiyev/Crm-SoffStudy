import React from 'react';
import './NavbarTable.css'
import Rasm from './image/search.png'
const Navbar = () => {
    return (
        <div>
            <nav className='nnav'>
                <div className="header1">
                    <div className="left1">
                        <h1>Hamma O`quvchilar</h1>
                        <p className='header_p1'>Faol o'quvchilar</p>
                    </div>
                    <div className="right1">
                        <img className='search1' src={Rasm} alt="Search" />
                        <input className='header_inp1' type="search" placeholder='Qidiruv'/>
                        <select className='header__select' name="" id="">
                            <option value="Faol">Short Status:  Faol</option>
                            <option value="Ketgan">Short Status: Ketgan</option>
                            <option value="Bitirgan">Short Status: Bitirgan</option>
                        </select>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;
