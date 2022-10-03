import { IBoxState } from 'app/store/slices/boxSlice';

export const initialState: IBoxState = {
  boxes: [
    {
      id: 1,
      name: "BOX 1"
    },
    {
      id: 2,
      name: "BOX 2"
    },
    {
      id: 3,
      name: "BOX 3"
    },
    {
      id: 4,
      name: "BOX 4"
    },
    {
      id: 5,
      name: "BOX 5"
    },
  ],
  boxThree: [
    {
      boxId: 1,
      hasParent: false,
      childBoxIndexes: [
        2, 4,
      ],
    },
    {
      boxId: 2,
      hasParent: false,
      childBoxIndexes: [
        3
      ],
    },
    {
      boxId: 3,
      hasParent: true,
      childBoxIndexes: [],
    },
    {
      boxId: 4,
      hasParent: true,
      childBoxIndexes: [],
    },
    {
      boxId: 5,
      hasParent: false,
      childBoxIndexes: [],
    },
  ]
}