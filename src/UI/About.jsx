import React from 'react'
import '../styles/About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='heading-text'>About Us</h1>
            <div className='about-section'>
                <p>
                    At [Company Name], we are dedicated to providing exceptional products and services to our valued customers. With a passion for innovation and a commitment to excellence, we strive to deliver the best solutions that meet your needs and exceed your expectations.
                </p>
                <h1>Our Story</h1>
                <p>
                    [Company Name] was founded in [year] by a team of visionary individuals who recognized the potential of [industry/sector]. Since our humble beginnings, we have grown into a trusted industry leader, serving clients from various sectors across the globe. Our success is rooted in our core values of integrity, collaboration, and customer satisfaction.
                </p>
                <h1>Misson and Values</h1>
                <p>
                    Our mission is to [describe the purpose and goals of your company]. We are driven by a set of core values that guide everything we do:
                </p>
                <p>
                    1. Excellence: We strive for excellence in every aspect of our business, from product development to customer support. We believe in delivering nothing but the best.
                    <br />
                    2. Innovation: We embrace innovation and constantly explore new ideas and technologies to stay ahead of the curve. We aim to bring cutting-edge solutions to our customers.
                    <br />
                    3. Customer Focus: Our customers are at the heart of everything we do. We listen to their needs, provide personalized solutions, and ensure their satisfaction at every step.
                </p>
            </div>
        </div>
    )
}

export default About