// app/apply/page.tsx
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Apply() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', resume: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('Application submitted successfully!');
        // Optionally, redirect or perform other actions here
      } else {
        setMessage('Error submitting application.');
      }
    } catch (error) {
      setMessage('Error submitting application.');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px', padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <a href="/" style={{ textDecoration: 'none', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' }}>Home</a>
            </li>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <a href="/logout" style={{ textDecoration: 'none', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' }}>Logout</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Apply for Job</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Resume:</label>
          <input type="text" name="resume" value={formData.resume} onChange={handleChange} required style={{ marginLeft: '10px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Submit</button>
      </form>
    </div>
  );
}
