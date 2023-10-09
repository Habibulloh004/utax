import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    phone: '',
  });
  const [responseText, setResponseText] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'https://utax-method-1fe234057bee.herokuapp.com/request';

    const bodyFormData = new FormData();
    bodyFormData.append('name', formData.name);
    bodyFormData.append('comment', formData.comment);
    bodyFormData.append('phone', formData.phone);

    fetch(url, {
      method: 'POST',
      body: bodyFormData,
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('HTTP Error: ' + response.status);
        }
      })
      .then((data) => {
        setResponseText('Request successful! Response: ' + data);
      })
      .catch((error) => {
        setResponseText('An error occurred: ' + error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Comment:
            <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div id="response">{responseText}</div>
    </div>
  );
};

export default MyForm;
