import React from 'react'
import "./Sing__in.css"
import {Link} from 'react-router-dom'

export default function Singin() {
  return (
    <div className='Sing__in'>
      <div className="Sing__in__bg">

        <h1 className='Sing__in__bg__text'>Millineals Collaboration <br />
          to optimize local potencial <br /> for  society <br />
          in wakatobi island

          <svg className='imgChard' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,256L48,250.7C96,245,192,235,288,197.3C384,160,480,96,576,106.7C672,117,768,203,864,197.3C960,192,1056,96,1152,80C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </h1>

        <div className="Sing__in__img__circle1"></div>
        <div className="Sing__in__img__circle2"></div>

        <div className="Sing__in__bg__bottom">
          <div className="Sing__in__bg__bottom__ichidagi_ota">
            <div className='Sing__in__twter__ota'><img className='Sing__in__twter__img__twter' src="./images/Sain__in__img/twter.png" alt="twter" /><p>Bakti Milineal</p></div>
           <div className="Sing__in__instagram__icon__ota">
           <i class="bi bi-instagram Sing__in__instagram__icon__ota__instagram"></i>  <p>Bakti Milineal</p>
           </div>
          </div>
          <div className="Sing__in__bottom__arrow">
          <p>Our Activities</p><i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>


      <div className="Sing__in__rigistration">


        <h1 className="Sing__in__rigistration__text">
          Welcome <br />
          Back
        </h1>
        <h3 className='Sing__in__rigistration__Text__Email'>Email</h3>
        <input type="Email" className="Sing__in__rigistration__inp__email" placeholder='Enter your email' />
        <h3 className='Sing__in__rigistration__Text__Password'>Parol</h3>
        <input type="password" className="Sing__in__rigistration__inp__password" placeholder='Enter your password' />
        <br />
        <div className="Sing__in__rigistration__parent__checkbox">
          <input type="checkbox" className='Sing__in__rigistration__checkbox' />
          <h5>Remember me</h5>
        </div>
        <Link to='/'><button className='Sing__in__rigistration__button1'>Sign in</button></Link>
        <p className='Sing__in__rigistration__p'>Or</p>
        <button className='Sing__in__rigistration__button2'><img className='Sing__in__rigistration__buttom__img' src="./images/Sain__in__img/Sing__in__img__google.png" alt="rasim" /> Sign in with Google</button>
      </div>
    </div>
  )
}
