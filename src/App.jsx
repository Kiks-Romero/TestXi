import { useState } from 'react';
import ModalComponent from './components/ModalComponent';
import Acept from './components/Accept';
import Home from './components/Home';

function App() {
    const [selection, setSelection] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>  
        {!selection?<Home handleShow={handleShow}/>:<Acept selection={selection}/>}
 
        <ModalComponent show={show} handleClose={handleClose} setSelection={setSelection}/>   
    </>
  )
}

export default App
