import React, { ReactNode, useEffect, useState } from "react";
import Button from "components/widgets/Button";
import { v4 as uuidv4 } from "uuid";
import { IBox } from "assets/ts/interfaces";
import TextBox from "components/widgets/TextBox";
import { EButtonVariant, EInputType, EInputVariant } from "assets/ts/enums";

interface IBoxProps {
  box: IBox;
  children?: ReactNode;
}

const Box: React.FC<IBoxProps> = ({ box, children }) => {
  const [myBox, setBox] = useState<IBox>({
    id: uuidv4(),
    name: "",
  });

  useEffect(() => {
    if (box) {
      setBox({ ...box });
    }
  }, [box]);

  const updateBoxData = (e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;
    setBox({...myBox, [name]: value});
  }

  return (
    <div className="flex flex-wrap shadow py-6 px-5 rounded-xl mx-auto w-full mb-3">
      {/* box header */}
      <div className="w-full flex flex-wrap items-end border-b-2 border-dotted border-gray-300 pb-3 mb-3">
        <div className="flex flex-col w-full md:w-fit mb-5 md:mb-0">
          <label htmlFor={`box-${box.id}`} className="font-semibold text-sm mb-1">
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
            onClick={() => alert("Hi")}
          >
            {"Delete box"}
          </Button>
          <Button customclass="w-fit">
            {"Add box"}
          </Button>
        </div>
      </div>
      {/* BoxList */}
      {box.boxThree?.map((item: any) => (
        <Box box={item} key={item.id} />
      ))}
    </div>
  );
};

export default Box;
