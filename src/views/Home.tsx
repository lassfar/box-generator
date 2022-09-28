import React from 'react'
import BoxGeneratorForm from 'components/Box/BoxGeneratorForm'
import Box from 'components/Box'
import { useAppSelector } from 'app/store/hooks';
import { selectBoxes } from 'app/store/slices/boxSlice';

const Home: React.FC = () => {

  const boxList = useAppSelector(selectBoxes)

  return (
    <>
      <BoxGeneratorForm />
      {boxList?.map((box) => (
        <Box box={box} key={box.id} />
      ))}
    </>
  )
}

export default Home