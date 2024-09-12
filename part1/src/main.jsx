import ReactDOM from 'react-dom/client'
import App from './App'

let counter = 1

// Create the root only once
const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(<App counter={counter} />)
}

// Use setInterval to update the counter and re-render the component
setInterval(() => {
  refresh()
  counter += 1
}, 1000)