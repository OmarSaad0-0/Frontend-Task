import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Home() {
    const [data, setData] = useState([])
    useEffect(

        () => {
            axios.get('http://localhost:3030/users')
                .then(res => setData(res.data))
                .catch(err => console.log(err))

        }, []
    )
    return (

        <div className='container mt-5'>
            <h2>The Platform</h2>
            <div>
                <Link to="/create" className='btn btn-success'>
                    Add New User +
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Proficiency
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (d, i) => (
                                <tr key={i}>
                                    <td>
                                        {d.id}
                                    </td>
                                    <td>
                                        {d.Name}
                                    </td>
                                    <td>
                                        {d.Phone}
                                    </td>
                                    <td>
                                        {d.Email}
                                    </td>
                                    <td>
                                        {d.Proficiency}
                                    </td>
                                    <td>
                                        <button className='btn btn-info'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Home