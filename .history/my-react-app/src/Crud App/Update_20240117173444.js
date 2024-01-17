import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Update() {

    const { id } = useParams();
    const [inputData, setInputData] = useState(
        {
            id: id,
            Name: '',
            Email: '',
            Number: '',
            Proficiency: '',
        }
    )
    const navigate = useNavigate();
    useEffect(
        () => {
            axios.get('http://localhost:3030/users/' + id)
                .then(res => setInputData(res.data))
                .catch(err => console.log(err))
        },
    )
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3030/users/' + id, inputData).then(
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

                        <input type='number' hidden name='id' className='form-control' value={inputData.id} />
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type='text' name='name' className='form-control' value={inputData.Name} onChange={e => setInputData({
                            ...inputData, Name: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="number">Number:</label>
                        <input type='text' name='number' className='form-control' value={inputData.Number} onChange={e => setInputData({
                            ...inputData, Number: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type='text' name='email' className='form-control' value={inputData.Email} onChange={e => setInputData({
                            ...inputData, Email: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="proficiency">Proficiency:</label>
                        <input type='text' name='proficiency' className='form-control' value={inputData.Proficiency} onChange={e => setInputData({
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