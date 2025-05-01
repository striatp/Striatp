import { useEffect, useState } from 'react';
import Container from '@/components/Container';

export default function Home() {
  const [data, setData] = useState(null); // State to store API response
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('/api/keepit'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Store the API response in state
        console.log(result)
      } catch (err: any | unknown) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only on page load

  return (
    <Container>
      <section>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <h3>API Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </section>
    </Container>
  );
}