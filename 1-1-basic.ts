{
  // JavaScript
  // Primitibe :number, string, bollean, bigint, symbol, null, undefined
  // Object: function, array

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // bollean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // return undefined
    return 1;
  }

  // null
  let person: null; // 💩
  let person2: string | undefined;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 💩
  let anything: any = 0;
  anything = "hello";

  // void => void인 경우 생략 가능
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "hyebin" });
  acceptSomeObject({ animal: "dog" });
}
