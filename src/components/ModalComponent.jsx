import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';




const ModalComponent = ({show,handleClose,setSelection}) => {
  const [data, setData] = useState()

  const getData = async() =>{
    await axios.get('https://mock.apidog.com/m1/499449-0-default/credits').then(res=>setData(res.data)).catch(e=>console.log(e))
  }

  const handleClick = (info,index) =>{
    setSelection({...info,index})
    handleClose()
  }

  useEffect(() => {
      getData()
  }, [])
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <h2 className='m-2'><strong>¡Felicidades!</strong></h2>
        <p>Encontramos estos crediitos perfectos para ti.</p>
        {data && data.credits.map((d,i)=>
        <div className='d-grid gap-2 mb-2' key={i}>
          <Button size='lg' variant="primary" className='justify-content-between d-flex' onClick={()=>handleClick(d,i)}>
            <span className='d-inline-flex p-2'>Credito {i+1} </span> <div className='d-inline-flex p-2'>${d.amount}</div>
          </Button>
        </div>)
        }
        
      </Modal.Body>
      <Modal.Footer>
        <div className='d-grid gap-2 mb-2' style={{width:'100%'}}>
        <Button size='lg' variant="primary" className='text-center' onClick={handleClose}>
          Regresar
        </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent