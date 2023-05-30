{
  // Type Assertions 💩
  // 정말정말 100만번 장담할 수 있을 때 사용
  function jsStrFunc(): any {
    return "hello";
    // return 2; // undefined
  }
  const result = jsStrFunc();
  // result.length() 사용못함
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(3)); // 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 💩
  // const numbers = findNumbers()!;
  // numbers.push(2); // 💩
}
