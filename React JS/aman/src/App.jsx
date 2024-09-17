
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Counter from './Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}> 
        <Counter />

      </Provider>
    </>
  )
}

export default App
