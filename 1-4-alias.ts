{
  // Type Aliases
  type Text = string;
  const name: Text = "hyebin";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hyebin",
    age: 26,
  };

  // String Literal Types
  type Name = "name";
  let hyebinName: Name;
  hyebinName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
