This utility can aid in testing complicated boolean logic.

`Boolcom` takes an `input` representing the possible values for variables (either true, false, undefined, or null) like:

```ts
const boolcom = new Boolcom({
  var1: [true, false, undefined],
  var2: [true, false],
});
```

This builds an array of resuls stored in `boolcom.combos` like so:

```ts
[
  { var1: true, var2: true },
  { var1: true, var2: false },
  { var1: false, var2: true },
  { var1: false, var2: false },
  { var1: undefined, var2: true },
  { var1: undefined, var2: false }
]
```

Functions can be applied to the results like so:

```ts
  interface eitherOrArgs {
    trueOrFalse: boolean
    trueOrFalseOrNull: boolNullUndefined
  }

  const eitherOr = (args: eitherOrArgs) => {
    return !!(args.trueOrFalse || args.trueOrFalseOrNull);
  }

  const boolcom = new Boolcom({
    trueOrFalse: [true, false] ,
    trueOrFalseOrNull: [true, false, null]
  })

  boolcom.apply((combo: any) => console.log(eitherOr(combo)))
```

Returning:

    true
    true
    true
    true
    false
    false
