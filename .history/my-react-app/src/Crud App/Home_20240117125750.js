import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
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
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (d, i) => (
                                <tr key={i}>
                                    <td>
                                        {d.Id}
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