import { useState } from 'react'
import Names from './components/Names'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterPerson, setFilterPerson] = useState('');
  const [filteredPerson, setFilteredPerson] = useState(props.persons); 

  const addName = (event) => {
    event.preventDefault();
    console.log(event.target);

    const nameExists = persons.some((person) => person.name === newName);
    
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);  
      setNewName(""); 
      return;    
    }
    
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(nameObject));
    setFilteredPerson(filteredPerson.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterPerson = (event) => {
    console.log(event.target.value);
    setFilterPerson(event.target.value);

    const filterNames = persons.filter(person => 
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPerson(filterNames);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: {" "}
          <input value={filterPerson} onChange={handleFilterPerson} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPerson.map((person) => {
        return <Names key={person.id} person={person} />;
      })}
    </div>
  );
};

export default App