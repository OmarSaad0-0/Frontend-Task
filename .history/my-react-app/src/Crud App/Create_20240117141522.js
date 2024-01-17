import React from 'react'
function Create() {
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type='text' name='name' className='form-control' />
                    </div>
                </form>

            </div>

        </div>
    )
}