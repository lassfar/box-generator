import React, { ReactNode } from 'react'
import Button from 'components/widgets/Button';
import { v4 as uuidv4 } from "uuid";
// import { IBox } from 'assets/ts/interfaces';
import { IBoxState } from 'app/store/slices/boxSlice';
// import { IBox } from 'assets/ts/interfaces';

const Box: React.FC<IBoxState> = ({ name, id, boxes }) => {

  return (
    <div className="flex shadow py-6 px-5 rounded-xl mx-auto w-full my-16">
      {/* box header */}
      <div className="w-full flex items-center border-b-2 border-dotted border-gray-300 pb-4">
        <div className="flex flex-col">
          <label htmlFor="boxName" className="font-semibold text-sm mb-1">{"Box name"}</label>
          <input type="text" id="boxName" className="border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 ml-auto">
          <Button
            customclass="bg-black text-white"
            onClick={() => alert("Hi")}
          >
            {"Delete"}
          </Button>
          <Button
            customclass="bg-indigo-400 text-white"
          >
            {"Add box"}
          </Button>
        </div>
      </div>
      {/* box body */}
      <div className="flex">
        {/* {boxes ? boxes : ""} */}
      </div>
    </div>
  )
}

export default Box
