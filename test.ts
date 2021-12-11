import test, { ExecutionContext} from 'ava';
import { cartesianProduct } from './src/cartesianProduct';
import { mapProductToVars, ArgInput, getKeysValues, getCombos, ArgValue } from './src/getCombos'

test('getKeysValues', (t: ExecutionContext) => {
	const result = getKeysValues({
		var1: [true, false, undefined],
		var2: [true, false],
	});
	const expected = {
		keys: ['var1', 'var2'],
		values: [[true, false, undefined], [true, false]]
	}
	t.deepEqual(result, expected);
});

test('cartesianProduct', (t: ExecutionContext) => {
	const result = cartesianProduct([[true,false,null], [true,false]]);
	const expected = [
		[ true, true ],
		[ true, false ],
		[ false, true ],
		[ false, false ],
		[ null, true ],
		[ null, false ]
	]
	t.deepEqual(result, expected);
});

// TODO: test mapProductToVars
// test('mapProductToVars', (t: ExecutionContext) => {
// 	t.assert(false);
// });

test('getCombos', (t: ExecutionContext) => {
	const result = getCombos({
		var1: [true, false, undefined],
		var2: [true, false],
	});
	const expected = [
		{ var1: true, var2: true },
		{ var1: true, var2: false },
		{ var1: false, var2: true },
		{ var1: false, var2: false },
		{ var1: undefined, var2: true },
		{ var1: undefined, var2: false }
	]
	t.deepEqual(result, expected);
});