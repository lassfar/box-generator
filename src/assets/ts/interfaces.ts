import { ReactNode } from 'react';

export interface IBox {
  id: string | number,
  name: string | number,
}

export interface IBoxThree {
  boxId: string | number,
  hasParent: boolean,
  childBoxIndexes: Array<number>,
}