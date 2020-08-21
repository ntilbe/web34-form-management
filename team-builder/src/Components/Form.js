import React from 'react'

export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Team Member</h2>
                <button>submit</button>
            </div>
            <div className='form-group inputs'>
                <h4>Information</h4>

                <label>Name:&nbsp;
                    <input
                        type='text'
                        placeholder='Johnny Appleseed'
                        maxLength='30'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    /> 
                </label>

                <label>Email:&nbsp;
                    <input
                        type='text'
                        placeholder='JohnAppleseed@gmail.com'
                        maxLength='30'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>

                <label>Role:&nbsp;
                 <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>Select a Role</option>
                        <option value='UX/UI Designer'>UX/UI Designer</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                        <option value='Full-Stack Developer'>Full-Stack Developer</option>
                        <option value='Team Lead'>Team Lead</option>
                 </select>
                </label>

            </div>
        </form>
    )
}