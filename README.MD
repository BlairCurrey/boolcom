This utility can aid in testing complicated boolean logic.

`getCombos` takes an `input` representing the possible values for variables (either true, false, undefined, or null) like:

```js
const result = getCombos({
  var1: [true, false, undefined],
  var2: [true, false],
});
```

This returns all possible combinations of the form:

```js
[
  { var1: true, var2: true },
  { var1: true, var2: false },
  { var1: false, var2: true },
  { var1: false, var2: false },
  { var1: undefined, var2: true },
  { var1: undefined, var2: false }
]
```