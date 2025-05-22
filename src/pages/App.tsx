import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import '../styles/App.css';
import Button from '../components/atomes/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button label={'Clic Moi !'}/>
    </>
  )
}

export default App
