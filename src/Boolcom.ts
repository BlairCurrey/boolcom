export interface VariableTypesMap {
  [x: string]: VariableTypes[];
}
export type VariableTypes = boolean | null | undefined;

export class Boolcom {
  combos: any[];
  input: VariableTypesMap;

  constructor(private _input: VariableTypesMap) {
    this.input = _input;
    this.combos = Boolcom.getCombos(_input);
  }

  apply = (fn: Function) => {
    this.combos.forEach((combo: any) => fn(combo));
  };

  static getCombos = (input: VariableTypesMap) => {
    const { keys, values } = Boolcom.getKeysValues(input);
    return Boolcom.mapProductToVars(keys, values);
  };

  static getKeysValues = (input: VariableTypesMap) => {
    return {
      keys: Object.keys(input),
      values: Object.values(input),
    };
  };

  static mapProductToVars = (keys: string[], values: VariableTypes[][]) => {
    // TODO: add VariableTypesMap[] return type
    return Boolcom.cartesianProduct(values).map((product: VariableTypes[]) => {
      const obj: any = {}; // TODO: add VariableTypesMap type to obj
      keys.forEach((key: any, i: number) => {
        obj[key] = product[i];
      });
      return obj;
    });
  };

  static cartesianProduct = (arr2D: VariableTypes[][]): any[][] => {
    const product: any[] = [];
    const max = arr2D.length - 1;
    const helper = (arr: any, i: number) => {
      // TODO: potential to simplify by using optional arguments?
      // https://stackoverflow.com/questions/15128424/recursion-and-helper-function
      for (let j = 0; j < arr2D[i].length; j++) {
        const a = arr.slice(0); // copy array
        a.push(arr2D[i][j]);
        if (i === max) {
          product.push(a);
        } else {
          helper(a, i + 1);
        }
      }
    };
    helper([], 0);
    return product;
  };
}
