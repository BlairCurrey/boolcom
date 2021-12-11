import { ArgValue } from './getCombos';
export const cartesianProduct = (arr2D: ArgValue[][]): any[][] => {
  const product: any = [];
  const max = arr2D.length - 1;
  const helper = (arr: any, i: number) => {
    // TODO: simplify by using optional arguments?
    // https://stackoverflow.com/questions/15128424/recursion-and-helper-function
    for (let j = 0, l = arr2D[i].length; j < l; j++) {
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

// export const cartesian = (...a: any) => {
//   a.reduce((a: any, b: any) => {
//     a.flatMap((d: any) => b.map((e: any) => [d, e].flat()))
//   })
// };
