import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog container'>
            <div className="javascript">
                <h2> Difference between javascript and nodejs</h2>
                <table>
                    <tr>
                        <th className='primary'>Javascript</th>
                        <th className='primary'>Nodejs</th>
                    </tr>
                    <tr>
                        <td>Javascript is a programming language</td>
                        <td>NodeJS is a Javascript runtime environment.</td>
                    </tr>
                    <tr>
                        <td>Javascript can only be run in the browsers.</td>
                        <td>With the help of NodeJS,We can run Javascript outside the browser.</td>
                    </tr>
                    <tr>
                        <td>It is basically used on the client-side.</td>
                        <td>It is mostly used on the server-side.</td>
                    </tr>
                    <tr>
                        <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                        <td>Nodejs does not have capability to add HTML tags.</td>
                    </tr>
                    

                </table>
            </div>
            <div className="sql mt-4">
                <h2> Difference between sql and Nosql</h2>
                <table>
                    <tr>
                        <th className='primary'>Sql</th>
                        <th className='primary'>Nosql</th>
                    </tr>
                    <tr>
                        <td>It is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                        <td>Non-relational or distributed database system.</td>
                    </tr>
                    <tr>
                        <td>These databases have fixed or static or predefined schema</td>
                        <td>They have dynamic schema.</td>
                    </tr>
                    <tr>
                        <td>These databases are best suited for complex queries</td>
                        <td>These databases are not so good for complex queries</td>
                    </tr>
                    <tr>
                        <td>Vertically Scalable</td>
                        <td>Horizontally scalable</td>
                    </tr>
                    

                </table>
            </div>
           
            <div className="other mt-4">
                <h2>When should you use nodejs and when should you use mongodb</h2>
               <p>As we know,<b>MongoDB</b> is the Document Oriented Database and stores a lot of data in <b>JSON format</b>. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on <b>multiple servers</b> and also can handle a large number of access requests easily.<br/>There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. <b>Node JS</b> by default follows the <b>Asynchronous pattern</b>. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That's why we use nodeJS.</p>
            </div>

        </div>
    );
};

export default Blog;