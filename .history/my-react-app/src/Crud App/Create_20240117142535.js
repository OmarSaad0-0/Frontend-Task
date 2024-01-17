import React from 'react'
import { useState } from 'react'
function Create() {
    const [inputData, setInputData] = useState(
        {
            name: '',
            email: '',
            number: '',
            proficiency: '',
        }
    )
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type='text' name='name' className='form-control' onChange={e => setInputData({
                            ...inputData, name: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="number">Number:</label>
                        <input type='text' name='number' className='form-control' onChange={e => setInputData({
                            ...inputData, number: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type='text' name='email' className='form-control' onChange={e => setInputData({
                            ...inputData, email: e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="proficiency">Proficiency:</label>
                        <input type='text' name='proficiency' className='form-control' onChange={e => setInputData({
                            ...inputData, proficiency: e.target.value
                        })} />
                    </div>
                    <button className='btn btn-info'>Submit</button>
                </form>

            </div>

        </div>
    )
}