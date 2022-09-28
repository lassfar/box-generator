import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'app/store';

export interface IBoxState {
  id: string,
  name: string,
  boxes?: IBoxState[],
}

const initialState: IBoxState[] = [
  {
    id: "Test",
    name: "Test",
    boxes: [
      {
        id: "Test2",
        name: "Test2",
      },
    ]
  },
];

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    generateBoxes: (state, action: PayloadAction<{nbOfBoxes: number, boxInBox: number}>) => {
      const nbOfBoxes = action.payload.nbOfBoxes;
      const boxInBox = action.payload.boxInBox;
      if (nbOfBoxes && boxInBox) {
        Array().fill(nbOfBoxes).map((_, i) => i + 1).forEach((item) => {
          
        })
      }
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    
  },
});

export const { generateBoxes } = boxSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.box.value)`
export const selectBoxes = (state: RootState) => state.boxSlice;

export default boxSlice.reducer;