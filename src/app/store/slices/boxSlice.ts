import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";
import { IBox, IBoxThree } from "assets/ts/interfaces";
import { v4 as uuidv4 } from "uuid";

export interface IBoxState {
  boxes: IBox[];
  boxThree: IBoxThree[];
}

const initialState: IBoxState = {
  boxes: [
    {
      id: 111,
      name: "BOX 0",
    },
    {
      id: 222,
      name: "BOX 1",
    },
    {
      id: 333,
      name: "BOX 2",
    },
    {
      id: 444,
      name: "BOX 3",
    },
    {
      id: 555,
      name: "BOX 4",
    },
    {
      id: 666,
      name: "BOX 5",
    },
  ],
  boxThree: [
    {
      boxId: 111,
      hasParent: false,
      childBoxIndexes: [1, 4],
    },
    {
      boxId: 222,
      hasParent: true,
      childBoxIndexes: [2],
    },
    {
      boxId: 333,
      hasParent: true,
      childBoxIndexes: [3],
    },
    {
      boxId: 444,
      hasParent: true,
      childBoxIndexes: [],
    },
    {
      boxId: 555,
      hasParent: true,
      childBoxIndexes: [5],
    },
    {
      boxId: 666,
      hasParent: true,
      childBoxIndexes: [],
    },
  ],
};

// const initialState: IBoxState = {
//   boxes: [],
//   boxThree: [],
// }

export const boxSlice = createSlice({
  name: "box",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    generateBoxes: (
      state,
      action: PayloadAction<{ nbOfBoxes: any; boxInBox: any }>
    ) => {
      const nbOfBoxes = parseInt(action.payload.nbOfBoxes);
      const boxInBox = parseInt(action.payload.boxInBox);
    },
    createNewBox(
      state,
      action: PayloadAction<{
        box: IBox;
        targetParentBoxId?: number;
        childBoxIndex?: number;
      }>
    ) {
      // get payload values
      const targetParentBoxId = action.payload.targetParentBoxId;
      const childBoxIndex = action.payload.childBoxIndex;
      // debugger
      const targetBox: IBoxThree = state.boxThree.find(
        (item) => item.boxId == targetParentBoxId
      ) as IBoxThree;
      const parentIndex = state.boxThree.findIndex(
        (item) => item.boxId == targetParentBoxId
      );

      // debugger
      if (
        targetBox &&
        parentIndex >= 0 &&
        typeof childBoxIndex == "number" &&
        childBoxIndex >= 0
      ) {
        return {
          ...state,
          boxes: [...state.boxes, action.payload.box],
          boxThree: [
            ...state.boxThree.filter((item) => item.boxId != targetParentBoxId), // 1__ filter to remove the old the box that will be updated then
            {
              // + __2 update old parent box and set children box indexes
              boxId: targetBox.boxId,
              hasParent: targetBox.hasParent,
              childBoxIndexes: [...targetBox.childBoxIndexes, childBoxIndex],
            },
            {
              // add the new inserted box
              boxId: action.payload.box.id,
              hasParent: Boolean(targetBox),
              childBoxIndexes: [],
            },
          ],
        };
      }
      return {
        boxes: [...state.boxes, action.payload.box],
        boxThree: [
          ...state.boxThree,
          {
            boxId: action.payload.box.id,
            hasParent: Boolean(targetBox),
            childBoxIndexes: [],
          },
        ],
      };
    },
    removeBox(state, action: PayloadAction<{ boxId: string | number }>) {
      const boxId = action.payload.boxId;
      const boxIndex = state.boxThree.findIndex((item) => item.boxId == boxId);
      const childrenIndexToDelete = [
        ...state.boxThree[boxIndex].childBoxIndexes,
        boxIndex,
      ];
      const prevState = { ...state };

      const filteredBoxes = prevState.boxes.filter(
        (item, idx) => !childrenIndexToDelete.includes(idx)
      );
      let filteredThree = prevState.boxThree.filter(
        (item, idx) => !childrenIndexToDelete.includes(idx)
      );

      filteredThree = filteredThree.filter((item) => {
        let NewChildrenBox: number[] = [];
        item.childBoxIndexes.filter((child) => {
          if (!childrenIndexToDelete.includes(child)) {
            let newChild = child > boxIndex ? --child : child;
            NewChildrenBox.push(newChild);
          }
        });
        return { ...item, childBoxIndexes: [...NewChildrenBox] };
      });

      // const newBoxThree: IBoxThree[] = [];

      // const filteredBoxeThrees = prevState.boxThree.map((item, idx) => {
      //   !childrenIndexToDelete.includes(idx)
      //   });
      // }

      // prevState.boxThree.filter((item, idx) => {
      //   const indexes: number[] = [];
      //   if (item.boxId != boxId) {
      //     alert("boxIndex" + boxIndex)
      //     item.childBoxIndexes.forEach((indexVal) => {
      //       if (indexVal >= boxIndex) {
      //         const val = --indexVal
      //         alert(val)
      //         indexes.push(val)
      //       } else {
      //         indexes.push(indexVal)
      //       }
      //     })
      //     newBoxThree.push({...item, childBoxIndexes: [...indexes]})
      //   } else {
      //     newBoxThree.push(item as IBoxThree)
      //   }
      //   return idx != boxIndex
      // });

      // alert(JSON.stringify(newBoxThree, null, 2))

      // alert(JSON.stringify(filteredBoxes.map((item, idx) => idx), null, 2))
      state = {
        ...state,
        boxes: [
          // remove box by id
          ...filteredBoxes,
        ],
        boxThree: [
          // remove boxThree by id
          // ...newBoxThree.filter((item, idx) => !childrenIndexToDelete.includes(idx)),
          ...filteredThree,
        ],
      };
      return state;
    },
    resetBoxes(state) {
      return initialState;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const { createNewBox, generateBoxes, resetBoxes, removeBox } =
  boxSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.box.value)`
export const selectBoxes = (state: RootState) => state.boxSlice;

export default boxSlice.reducer;
