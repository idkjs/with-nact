# Basic Reason Template

Hello! This project allows you to quickly get started with Reason and BuckleScript. If you wanted a more sophisticated version, try the `react` template (`bsb -theme react -init .`).

# Build
```
npm run build
```

# Build + Watch

```
npm run watch
```


# Editor
If you use `vscode`, Press `Windows + Shift + B` it will build automatically

## creating actors generally

- steps open Nact; 
- define type that actor will expect if not defined elsewhere
- call system to start it actor `let system = start()`
- call spawn type of function, spawnStateless for stateless actors or just spawn for spawnStateful.
- 1st arg is optional name of actor as string, `~name="someActor"`
- 2nd arg is unnamed reference to 'system'
- 3rd arg is unnamed arg that takes a ref to a defined type that is expected, the "_" to call the actor function with follows after fat arrow. oCaml will infer the type if it can.
- call the actor with dispatch(actor, input) or using Nact.Operator syntax `actor <-< { sometype: value }` 
- in stateful components, the first arg to the execution function is state, 2nd is type ref, and the third is the context/ctx.

## greeter.re

- to create an actor you have to spawn it, this example has no stateso we are using spawnStateless(). First unnamed arg to spawnStateless is the parent, here the actor system or "system", unnamed b/c no ~. 2nd '_'/() arg is invoked when a message   is recieved. Then named arg, ~name is optional, the system will assign a name to the arg if it is omitted, dispatch is used to communicate with greeter.

## statefulGreeter.re

- statefulGreeter example demonstrate how its easy to create safe stateful services
- we create a stateful service by calling a spawn function. first initiate with an empty state object. Each time a msg is recieved, the current state is passed as the first arg to the actor. if new name is added, the actor will copy the current state then add the new name to it. The return value is used as the next state.

## Js.Promise.resolve
- see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
- The Promise.resolve(value) method returns a Promise object that is resolved with the given value.

