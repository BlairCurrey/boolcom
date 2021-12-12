Boolcom is a utility to help deal with **bool**ean **com**binations.

`Boolcom` takes an `input` mapping the possible values for variables (either true, false, undefined, or null) and returns all possible combinations. A function (such as one boolean expression) can be applied to each combination using the `boolcom.apply` method.

Create a new `Boolcom` object like:

```ts
const boolcom = new Boolcom({
  var1: [true, false, undefined],
  var2: [true, false],
});
```

This builds an array of results which can be accessed via `boolcom.combos` which returns something like:

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

Another example show how functions can be applied against the results like so:

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
