{
  // Type Inference
  // 타입 추론 써도 되나? -> x 타입을 명확히 명시해주는 것이 좋음
  let text = "hello"; // 이런경우는 생략 가능하지만 팀 스타일에 따라 달라질 수 있음

  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
