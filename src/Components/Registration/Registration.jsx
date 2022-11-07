import React, { Component } from 'react';
import "./Register.css"
import {BsXLg} from 'react-icons/bs'

class Registration extends Component {
    render() {
        return (
            <div>
               <form action="">
               <div className='Register__div'>
                    <div className='Register__div__header'>
                        <h2>O’quvchi yaratish</h2>
                        <BsXLg />
                    </div>
                    <div className='Register__div__form'>
                    <p className='form__p'>F.I.O</p>
                    <input className='form__inp__name' type="text" placeholder='Ism Familya'/>
                    <p className='form__p'>Ro’yxatga olingan sana</p>
                    <input className='form__inp__date' type="date" />
                    <p className='form__Text__CourseName'>Kurs nomi</p>
                    <select className='From__select' name="" id="">
                        <option value="">Frontend</option>
                        <option value="">Back-end</option>
                        <option value="">3D MAX</option>
                        <option value="">SMM</option>
                    </select>
                    <p className='Form__Text__Payment'>To'lov</p>
                    <select className='Form__Select2' name="" id="">
                        <option value="">Naqt</option>
                        <option value="">Plastik Karta</option>
                    </select>
                    <p className='form__Text__Email'>Email</p>
                    <input className='form__Inp__Email' type="email" placeholder='Elmail'/>
                    <div className="form__Checkbox__Father">
                        <input type="checkbox" /> <b>Erkak</b> <input type="checkbox" /><b>Ayol</b>
                    </div>
                    <p className='form__Text__Phone'>Telefon nomer</p>
                    <input className='form__Inp__Phone' type="number" placeholder='Nomer'/>
                    <button className='Form__button'>Saqlash</button>
                    </div>
                </div>
               </form>
            </div>
        );
    }
}

export default Registration;
