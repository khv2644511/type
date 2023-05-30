{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(a: readonly string[]) {}

  // Tuple  -> interface, type alias, class
  // Tuple 가독성 떨어지고 인덱스로 접근하면 어떤값이 있는지 알 수 없다는 단점이 있음
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
