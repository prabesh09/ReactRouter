import React from 'react'
import '../styles/Member.css'
import user from '../../public/assets/user.svg'

const Member = () => {
    const names = [
        "Alice Smith",
        "Bob Johnson",
        "Charlie Brown",
        "David Davis",
        "Eve Anderson",
        "Frank Wilson",
        "Grace Thomas",
        "Henry Garcia",
        "Ivy Lee",
        "Jack Miller",
        "Kate Thompson",
        "Liam Davis"
    ]
    return (
        <div className='member-container'>
            <h1 className='heading-text'>Team Members</h1>

            <div className='member-list'>
                {names.map(name => (
                    <div key={name}>
                        <img src={user} alt="User Icon" />
                        <h1>{name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Member