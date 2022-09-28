import React from 'react'

const BoxGeneratorForm = () => {
  return (
    <div className="flex shadow py-6 px-5 rounded-xl mx-auto w-full md:w-4/6 my-16">
      <form className="w-full">
        <div className="grid sm:grid-cols-2 gap-x-5 md:gap-x-8 gap-y-3">
          <div className="flex flex-col">
            <label htmlFor="nbOfBoxes" className="font-semibold text-sm mb-1">{"Number of boxes"}</label>
            <input type="number" id="nbOfBoxes" className="border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="boxesInBox" className="font-semibold text-sm mb-1">{"Boxes in box"}</label>
            <input type="number" id="nbOfBoxes" className="border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-8 mt-9 md:mt-6">
          <button type="button" className="col-span-1 py-2 px-3 bg-black text-white rounded-lg">
            Reset
          </button>
          <button type="button" className="col-span-1 py-2 px-3 bg-indigo-400 text-white rounded-lg">
            Generate
          </button>
        </div>
      </form>
    </div>
  )
}

export default BoxGeneratorForm