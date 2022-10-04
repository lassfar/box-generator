import React, { useEffect, useState } from "react";
import Button from "components/widgets/Button";
import { v4 as uuidv4 } from "uuid";
import { IBox, IBoxThree } from "assets/ts/interfaces";
import TextBox from "components/widgets/TextBox";
import { EButtonVariant, EInputType, EInputVariant } from "assets/ts/enums";
// STATE
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { IBoxState, removeBox, selectBoxes } from "app/store/slices/boxSlice";

interface IBoxProps {
  box: IBox;
  boxThree: IBoxThree;
}

const Box: React.FC<IBoxProps> = ({ box, boxThree }) => {
  const dispatch = useAppDispatch();
  // GET BOXES FROM STATE
  const boxesData = useAppSelector<IBoxState>(selectBoxes);

  // local box data
  const [myBox, setBox] = useState<IBox>({
    id: uuidv4(),
    name: "",
  });

  useEffect(() => {
    // fill local box existing data if exists
    if (box) {
      setBox({ ...box });
    }
  }, [box]);

  const updateBoxData = (e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    setBox({ ...myBox, [name]: value });
  };

  if (box) {
    return (
      <div className="flex flex-wrap shadow py-6 px-5 rounded-xl mx-auto w-full mb-3">
        {/* box header */}
        <div className="w-full flex flex-wrap items-end border-b-2 border-dotted border-gray-300 pb-3 mb-3">
          <div className="flex flex-col w-full md:w-fit mb-5 md:mb-0">
            <label
              htmlFor={`box-${box.id}`}
              className="font-semibold text-sm mb-1"
            >
              {"Box name"}
            </label>
            <TextBox
              type={EInputType.text}
              id={`box-${box.id}`}
              name="name"
              variant={EInputVariant.primary}
              onChange={(e: React.ChangeEvent<any>) => updateBoxData(e)}
              value={myBox.name}
            />
          </div>
          <div className="flex justify-end gap-4 md:gap-6 w-full md:w-fit ml-auto">
            <Button
              variant={EButtonVariant.secondary}
              customclass="w-fit"
              onClick={() => dispatch(removeBox({ boxId: box.id }))}
            >
              {"Delete box"}
            </Button>
            <Button customclass="w-fit">{"Add box"}</Button>
          </div>
        </div>
        {/* INNER BOXES THREES */}
        {boxThree?.childBoxIndexes?.map((childIndex, idx) => (
          <Box
            boxThree={boxesData.boxThree[childIndex]}
            box={boxesData.boxes[childIndex]}
            key={boxesData.boxes[childIndex].id}
          />
        ))}
      </div>
    );
  }
  return <>{"No box found"}</>
};

export default Box;
