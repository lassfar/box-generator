import React from 'react'
import BoxGeneratorForm from 'components/Box/BoxGeneratorForm'
import Box from 'components/Box'
import { useAppSelector } from 'app/store/hooks';
import { IBoxState, selectBoxes } from 'app/store/slices/boxSlice';

const Home: React.FC = () => {

  const boxList = useAppSelector(selectBoxes)

  return (
    <>
      <BoxGeneratorForm />
      {boxList.map((box) => (
        <Box id={box.id} name={box.name} boxes={box.boxes} />
      ))}
    </>
  )
}

export default Home