import React from "react";
import Box from "components/Box";
import { useAppSelector } from "app/store/hooks";
import { IBoxState, selectBoxes } from "app/store/slices/boxSlice";
import { IBoxThree } from "assets/ts/interfaces";
import BoxCreator from "./BoxCreator";

const BoxList = () => {
  const boxesData = useAppSelector<IBoxState>(selectBoxes);

  return (
    <>
      {/* show box form creator at first time if there is no boxes yet */}
      <BoxCreator />

      {/* map over boxes */}
      {boxesData?.boxes?.length && boxesData?.boxThree?.map((three: IBoxThree, threeIndex: number) => {
        if (!three?.hasParent && boxesData.boxThree[threeIndex]) {
          return (
            <Box
              boxThree={boxesData.boxThree[threeIndex]}
              box={boxesData.boxes[threeIndex]}
              key={boxesData.boxes[threeIndex].id}
            />
          )
        }
      })}

    </>
  );
};

export default BoxList;
