{
  // Union Types: OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TitleSize = 5 | 16 | 32;
  const title: TitleSize = 16;

  // function: login -> success , fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function Login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(`wow ${state.response.body}`);
    } else {
      console.log(`TT ${state.reason}`);
    }
  }
}
