import { ReactNode } from 'react';
import { IBoxState } from 'app/store/slices/boxSlice';

export interface IBox {
  name: string,
  id: string,
  boxes: ReactNode[]
}