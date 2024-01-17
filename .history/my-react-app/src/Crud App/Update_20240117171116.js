import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Update() {

    const { id } = useParams();
    const [inputData, setInputData] = useState(
        {
            Name: '',
            Email: '',
            Number: '',
            Proficiency: '',
        }
    )
    const navigate = useNavigate();
    useEffect(
        () => {
            axios.get('http://localhost:3030/users' + id)
                .then(res => setInputData(res.data))
                .catch(err => console.log(err))
        }, []
    )
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/users', inputData).then(
            res => {
                alert("Saved Successfully")
                navigate('/')
            }
        )
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type='text' name='name' className='form-control' value={data.Name} onChange={e => setInputData({
                            ...inputData, Name: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="number">Number:</label>
                        <input type='text' name='number' className='form-control' value={data.Number} onChange={e => setInputData({
                            ...inputData, Number: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type='text' name='email' className='form-control' value={data.Email} onChange={e => setInputData({
                            ...inputData, Email: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="proficiency">Proficiency:</label>
                        <input type='text' name='proficiency' className='form-control' value={data.Proficiency} onChange={e => setInputData({
                            ...inputData, Proficiency: e.target.value
                        })} />
                    </div>
                    <button className='btn btn-info'>Update</button>
                </form>

            </div>

        </div>
    )
}
export default Update