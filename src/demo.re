/* import start function which start then returns the actor system,
   provides reference to nact system */
open Nact;

let system = start();

/* to create an actor you have to spawn it, this example has no state
   so we are using spawnStateless(). First unnamed arg to spawnStateless is the parent, here
   the actor system or "system", unnamed b/c no ~. 2nd '_'/() arg is invoked when a message
   is recieved. Then named arg, ~name is optional, the system will assign a name to the arg
   if it is omitted,
   dispatch is used to communicate with greeter. */
type greetingMsg = {name: string};

let greeter =
  spawnStateless(
    ~name="greeter",
    system,
    ({name}, _) => print_endline("Hello " ++ name) |> Js.Promise.resolve
  );

/* dispatch is used to communicate with greeter. */
/* dispatch(greeter, {name: "Erlich Bachman"}); */
/* dispatching with Nact.Operators's */
open Nact.Operators;

/* ex 1 */
/* greeter <-< {name: "Erlich Bachman"}; */
/* ex 2 */
{name: "Erlich Bachman"} >-> greeter;