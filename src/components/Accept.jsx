import React from 'react'
import Button from 'react-bootstrap/Button';

const Acept = ({selection}) => {
  return (
    <div>
        <div className='container mt-5'>
            <div className="card m-5">
                <div className="h2 cardName-header py-3 m-3">Acepta tu credito</div>
                <p className='mx-3'>Confirma que has seleccionado el crédito deseado.</p>
                <div className='d-grid gap-2 mb-2' style={{width:'100%'}}>
                    <Button size='lg' variant="primary" className='justify-content-between d-flex' disabled>
                        <span className='d-inline-flex p-2'>Credito {selection.index+1} </span> <div className='d-inline-flex p-2'>${selection.amount}</div>
                    </Button>
                    <Button size='lg' variant="primary" className='text-center'>
                        Contratar
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Acept