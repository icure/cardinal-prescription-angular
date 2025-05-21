import { Type } from '@angular/core';

export interface IconComponentBase {
  color?: string;
  // Add more shared inputs if needed
}

export type IconComponentType = {
  component: Type<IconComponentBase>;
  inputs?: Partial<IconComponentBase>;
};
