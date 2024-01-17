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
        <div>
            Home
        </div>
    )
}