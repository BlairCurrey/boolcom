import test, { ExecutionContext} from 'ava';
import { Boolcom } from './src/Boolcom'

test('getKeysValues', (t: ExecutionContext) => {
	const result = Boolcom.getKeysValues({
		var1: [true, false, undefined],
		var2: [true, false],
	});
	const expected = {
		keys: ['var1', 'var2'],
		values: [[true, false, undefined], [true, false]]
	}
	t.deepEqual(result, expected);
});

test('mapProductToVars', (t: ExecutionContext) => {
	const result = Boolcom.mapProductToVars(['var1', 'var2'], [[true, false, undefined], [true, false]]);
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

test('cartesianProduct', (t: ExecutionContext) => {
	const result = Boolcom.cartesianProduct([[true,false,undefined], [true,false]]);
	const expected = [
		[ true, true ],
		[ true, false ],
		[ false, true ],
		[ false, false ],
		[ undefined, true ],
		[ undefined, false ]
	]
	t.deepEqual(result, expected);
});

test('new Boolcom', (t: ExecutionContext) => {
	const result = new Boolcom({
		var1: [true, false, undefined],
		var2: [true, false],
	}).combos;
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

// # TODO: test Boolcom.appy
// test('apply', (t: ExecutionContext) => {
// 	t.assert(false);
// });