import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Container>
        <Spinner animation='border' variant='dark' ></Spinner>
        <span className='mb-2 mt-2'>C A R R E G A N D O ...</span>
    </Container>
  )
}

export default Loader