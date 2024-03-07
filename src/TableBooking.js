import React, { useState } from 'react';

function TableBookingApp() {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Function to fetch available tables (mock data for now)
  const fetchTables = () => {
    // Fetch tables from backend
    const mockTables = [
      { id: 1, number: 1, capacity: 4 },
      { id: 2, number: 2, capacity: 6 },
      { id: 3, number: 3, capacity: 2 },
    ];
    setTables(mockTables);
  };

  // Function to handle booking submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Send booking details to backend or process them locally
    console.log('Booking submitted:', {
      table: selectedTable,
      date: selectedDate,
      time: selectedTime,
      name,
      email,
    });
    setBookingConfirmed(true);
  };

  if (!bookingConfirmed) {
    return (
      <div>
        <h1>Table Booking App</h1>
        <button onClick={fetchTables}>Fetch Tables</button>
        <h2>Select a Table</h2>
        <ul>
          {tables.map((table) => (
            <li key={table.id} onClick={() => setSelectedTable(table)}>
              Table {table.number} - Capacity: {table.capacity}
            </li>
          ))}
        </ul>
        {selectedTable && (
          <form onSubmit={handleBookingSubmit}>
            <label>Date: <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} /></label><br />
            <label>Time: <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} /></label><br />
            <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label><br />
            <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
            <button type="submit">Book Table</button>
          </form>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Booking Confirmed</h1>
        <p>Table {selectedTable.number} has been booked for {selectedDate} at {selectedTime} by {name} ({email}).</p>
      </div>
    );
  }
}

export default TableBookingApp;
