### Notes on MobX

* Store defination steps ->
    1. types.model = the shape of the living state tree
    2. actions on the model
    3. Define views (computed properties) on the model
    4. Create an instance of the Store model with initial property vals, using (.create)

* Perform aync functions with some model type => async/await -> flow/ yield
* Below written code is the way to handle async actions using mst with help of generators

* ```.actions(self => ({
  someAction: flow(function*() {
    // value is typed as number
    const value = yield* toGenerator(getDataAsync("input value"));
    ...
  }) ```


  