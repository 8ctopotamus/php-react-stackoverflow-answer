import { useEffect, useState } from 'react'

function App() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    fetchTopics()
  }, [])

  // function to fetch topics from the PHP backend
  const fetchTopics = async () => {
    try {
      const response = await fetch('http://localhost/stack-overflow-php-answer/server/all-topics.php')
      const allTopics = await response.json()
      console.log(allTopics)
      
      setTopics(allTopics)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <main>
      <h1>All topics</h1>
      {topics.length === 0 // if no topics fetched
        // show loading indicator
        ? <p>Loading...</p> 
        // when component re-renders with results, map through them and return your JSX
        : topics.map(({ id, title }) => (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        )
      )}
    </main>
  )
}

export default App
