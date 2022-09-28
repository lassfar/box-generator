import React, { useState } from "react";
import Button from "components/widgets/Button";
import { EButtonVariant } from "assets/ts/enums";
import { useAppDispatch } from "app/store/hooks";
import { generateBoxes, resetBoxes } from "app/store/slices/boxSlice";

const BoxGeneratorForm = () => {
  const dispatch = useAppDispatch();
  const [nbOfBoxes, setNbBoxes] = useState<any>();
  const [boxesInBox, setBoxesInBox] = useState<any>();

  return (
    <div className="flex shadow py-6 px-5 rounded-xl mx-auto w-full md:w-4/6 my-16">
      <form className="w-full">
        <div className="grid sm:grid-cols-2 gap-x-5 md:gap-x-8 gap-y-3">
          <div className="flex flex-col">
            <label htmlFor="nbOfBoxes" className="font-semibold text-sm mb-1">
              {"Number of boxes"}
            </label>
            <input
              type="number"
              id="nbOfBoxes"
              className="border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3"
              onChange={(e) => setNbBoxes(e.target.value)}
              value={nbOfBoxes}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="boxesInBox" className="font-semibold text-sm mb-1">
              {"Boxes in box"}
            </label>
            <input
              type="number"
              id="boxesInBox"
              className="border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3"
              onChange={(e) => setBoxesInBox(e.target.value)}
              value={boxesInBox}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-8 mt-9 md:mt-6">
          <Button
            type="button"
            customclass="col-span-1"
            variant={EButtonVariant.secondary}
            onClick={() => dispatch(resetBoxes())}
          >
            Reset
          </Button>
          <Button
            type="button"
            customclass="col-span-1"
            onClick={() => dispatch(generateBoxes({nbOfBoxes: nbOfBoxes, boxInBox: boxesInBox}))}
          >
            Generate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BoxGeneratorForm;
