import React, { useEffect } from 'react'
import BoxGeneratorForm from 'components/Box/BoxGeneratorForm'
import BoxList from 'components/Box/BoxList';

const Home: React.FC = () => {

  return (
    <>
      <BoxGeneratorForm />
      <BoxList />
    </>
  )
}

export default Home