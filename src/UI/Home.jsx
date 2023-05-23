import React from 'react'
import '../styles/Home.css'
import user from '../../public/assets/people.svg'

const Home = () => {
    return (
        <div className='hero-container'>
            <div className='left-container'>
                <h1 className='main-text'>
                    <span>Seamless Shopping</span>
                    <span>Delivered to Your Doorstep</span>
                    <span>Every Time</span>
                </h1>

                <div className='email-container'>
                    <input type="text" className='email-input' />
                    <button className='hero-btn'>Subscribe</button>
                </div>
            </div>

            <div className='right-container'>
                <img src={user} alt="" />
            </div>
        </div>
    )
}

export default Home