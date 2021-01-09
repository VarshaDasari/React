import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contact from './Contact';

const ContactList = () => {
  // let [persons, setPersons] = useState([
  //   {
  //     id: uuidv4(),
  //     name: 'Peter Parker',
  //     email: 'peter.parker@gmail.com',
  //     phoneNumber: '134-785-084',
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Tony Stark',
  //     email: 'tony.stark@gmail.com',
  //     phoneNumber: '134-785-085',
  //   },
  //   {
  //     id: uuidv4(),
  //     name: 'Steve Rogers',
  //     email: 'steve.rogers@gmail.com',
  //     phoneNumber: '134-785-086',
  //   },
  // ]);

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    //  Make an Http Request
    fetch('http://localhost:3002/persons')
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  const deleteContactCard = (id) => {
    console.log('Parent ID', id);
    // const index = persons.findIndex((person) => {
    //   return person.id === id;
    // });
    // const newArray = persons;
    // const newArray = [...persons];
    // newArray.splice(index, 1);
    // console.log('New Array ', newArray);
    // console.log('Persons State array ', persons);
    // setPersons(newArray);
    const originalPersons = [...persons];
    const tempPersons = persons.filter((item) => item.id !== id);
    setPersons(tempPersons);
    fetch(`http://localhost:3002/persons/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Item was deleted');
        }
      })
      .catch((err) => {
        setPersons(originalPersons);
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          {persons.map((person) => (
            <Contact
              key={person.id}
              name={person.name}
              email={person.email}
              id={person.id}
              deleteContact={deleteContactCard}
              // city={person.address.city}
              phoneNumber={person.phoneNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
