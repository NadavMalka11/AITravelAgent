import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [message, setMessage] = useState('')

  const fetchData = async () => {
    try {
      // Make the request to the backend
      const response = await fetch('http://localhost:3000/api/test'); // Assuming backend is on port 5000

      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response body
      const data = await response.json();

      // Update the state with the message from the backend
      setMessage(data.message);

    } catch (error) {
      // Log any errors to the console
      console.error("Could not fetch data:", error);
      setMessage("Failed to load message."); // Update state to show an error
    }
  };

  return (
    <div>
      <h1>AI Travel Agent</h1>
      <button onClick={fetchData}>Fetch Message from Backend</button>
      {/* Display the message from the state */}
      {message && <p>Message: {message}</p>}
    </div>
  )
}

export default App
