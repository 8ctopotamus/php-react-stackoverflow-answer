import { useEffect, useState } from 'react'

function App() {
  // state to hold topics data
  const [topics, setTopics] = useState([])

  // fetch topics on mount
  useEffect(() => {
    fetchTopics()
  }, [])

  // function to fetch topics from the PHP backend
  const fetchTopics = async () => {
    try {
      // make a fetch request to your php endpoint (just hard-coding localhost address for now)
      const response = await fetch('http://localhost/stack-overflow-php-answer/server/all-topics.php')
      const allTopics = await response.json()
      // set topics JSON into state
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
        : topics.map(({ id, title, slug, topic_post, topic_photo }) => (
          <div href={`/topic/${slug}`} key={id}>
            <h2>{title}</h2>
            <img 
              src={topic_photo}
              alt={`Photo for ${title}`}
            />
            <p>{topic_post}</p>
          </div>
        )
      )}
    </main>
  )
}

export default App
