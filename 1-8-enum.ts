{
  // Enum

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript -> Enum 가능한 사용하지 않는 것이 좋음. Union 타입으로 대체해서 사용하는 것이 좋음
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // default= 0, Monday = 1
    Tuesday, // default= 1
    Wednesday, // default= 2
    Thursday,
    Friday,
  }
  console.log(Days.Monday);
  const day = Days.Friday;
  console.log(day);

  let day1: Days = Days.Tuesday;
  day1 = Days.Monday;
  //   day1 = 10;

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
