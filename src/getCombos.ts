import { cartesianProduct } from '.';

export interface ArgInput {
  [x: string]: ArgValue[];
}
export type ArgValue = boolean | null | undefined;

export const getCombos = (input: ArgInput) => {
  const { keys, values } = getKeysValues(input);
  return mapProductToVars(keys, values);
};

export const getKeysValues = (input: ArgInput) => {
  return {
    keys: Object.keys(input),
    values: Object.values(input),
  };
};

export const mapProductToVars = (keys: string[], values: any) => {
  return cartesianProduct(values).map((product: any) => {
    const obj: any = {};
    keys.forEach((key: any, i: number) => {
      obj[key] = product[i];
    });
    return obj;
  });
};
