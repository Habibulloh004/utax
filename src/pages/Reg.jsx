import React, { useState } from 'react';
import { useEffect } from 'react';

const Reg = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
  });
  const api = 'https://utax-777597cb6d80.herokuapp.com/create_user'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     fetch('https://example.com/api/endpoint', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log('Success:', data);
  //           // Handle success (if needed)
  //         })
  //         .catch((error) => {
  //           console.error('Error:', error);
  //           // Handle error (if needed)
  //         });
  //   }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        formData
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Handle success (if needed)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (if needed)
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-600 flex flex-col items-center gap-5 p-9">
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Reg;
