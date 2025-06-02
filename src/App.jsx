import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
            <h1>Velkommen til vårt bryllup!</h1>
            <p>Vi gleder oss til å feire med dere.</p>
        </div>
    );
}

export default App
