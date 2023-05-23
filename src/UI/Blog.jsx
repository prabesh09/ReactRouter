import React from 'react'
import '../styles/Blog.css'

const Blog = () => {
    const posts = [
        {
            title: 'First Blog Post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Second Blog Post',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Third Blog Post',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Fourth Blog Post',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Fifth Blog Post',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Sixth Blog Post',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    ]

    return (
        <div className='blog-container'>
            <h1 className='heading-text'>Our Blog</h1>
            <div className='blogs'>
                {posts.map((post, index) => (
                    <div key={index} className='blog-card'>
                        <h2 className='blog-header'>{post.title}</h2>
                        <p className='blog-description'>{post.content}</p>
                        <span className='categories'>Product</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog
