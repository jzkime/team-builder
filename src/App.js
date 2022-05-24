import './App.css';
import React, { useState } from 'react'
import MemberForm from './components/MemberForm'
import Member from './components/Member'

const formFormat = {
  firstName: '',
  lastName: '',
  nickname: '',
  email: '',
  linkedIn: ''
}

function App() {
  const [ members, setMember ] = useState([])
  // current members available
  const [ formValues, setFormValues ] = useState(formFormat)
  // the values of the form that will be returned

  // error state to show current errors * optional

  //update 
  const updateForm = (nameOfInput, valueOfInput) => {
    // on change => set values

    setFormValues({ ...formValues, [nameOfInput]: valueOfInput })
    // ...formValues inputs the preexisting form object to search through the key value pairs
  }

  //submit 
  const submitForm = () => {
    // on submit setsMember from formValues
    const newMember = {
      name: formValues.name,
      nickname: formValues.nickname,
      email: formValues.email,
      linkedIn: formValues.linkedIn
    }
    setMember([...members, newMember])
  }


  return (
    <div className="App">
        <h1>Hello World!</h1>
        <MemberForm values={formValues} whileChange={updateForm} whenSubmit={submitForm} />

        <section className='members-list'>
          {members && members.map(member => <Member member={member}/>)}
        </section>
      
    </div>
  );
}

export default App;
