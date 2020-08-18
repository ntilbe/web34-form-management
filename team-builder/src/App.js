import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; 

import './App.css';
import './Components/background.css'
import TeamMember from './Components/TeamMember';
import Form from './Components/Form'

const initialTeamList = [
  {
    id: uuid(), 
    name: 'Nicole', 
    email: 'nicole-tilbe@lambdastudents.com', 
    role: 'Full Stack Developer',
  }
]

const initialFormValues = {
  // text inputs
  name: '', 
  email: '',
  // dropdown options
  role: '',
}

export default function App() {
  // giving state variables initial value
  const [teamMembers, setTeamMembers] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = e => {
    const { name } = e.target
    const { value } = e.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = e => {
    e.preventDefault()
    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim())
    {
      return 
    }
    const newMember = { ...formValues, id: uuid() }

    setTeamMembers([newMember, ...teamMembers])

    setFormValues(initialFormValues)
  }

  return (
    <div className="App container"> 
      <header>
        <h1>Team Builder App</h1>
      </header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {/* mapping through teamMembers array and 'consuming' TeamMember component for each */}
      <div className="teamMembers">
        {
          teamMembers.map(member => {
            return (
              <TeamMember key={member.id} details={member} />
            )
          })
        }
      </div>
    </div>
  );
}