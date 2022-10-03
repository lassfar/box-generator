import React, { useState } from "react";
import Button from "components/widgets/Button";
import { EButtonVariant, EInputType } from "assets/ts/enums";
import { useAppDispatch } from "app/store/hooks";
import { createNewBox } from "app/store/slices/boxSlice";
import { v4 as uuidv4 } from "uuid";
import TextBox from "components/widgets/TextBox";

const BoxCreator = () => {
  const dispatch = useAppDispatch();
  const [boxName, setBoxName] = useState<any>();

  return (
    <div className="flex shadow py-6 px-5 rounded-xl mx-auto w-full md:w-4/6 my-16">
      <form className="w-full">
        <div className="grid sm:grid-cols-2 gap-x-5 md:gap-x-8 gap-y-3">
          <div className="flex flex-col">
            <label htmlFor="boxName" className="font-semibold text-sm mb-1">
              {"Box Name"}
            </label>
            <TextBox
              type={EInputType.text}
              id="boxName"
              className="border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3"
              onChange={(e: React.ChangeEvent<any>) =>
                setBoxName(e.target.value)
              }
              value={boxName}
            />
          </div>
        </div>
        <div className="mt-9 md:mt-6">
          <Button
            type="button"
            customclass="w-full"
            onClick={() =>
              dispatch(createNewBox({ box: { id: uuidv4(), name: boxName } }))
            }
          >
            {"Create Box"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BoxCreator;
