const { averageExams, isStudentPassExam } = require("../app");

test("this should handle no-number", () => {
  const listValue = [80, "100", 100, 80];
  expect(() => averageExams(listValue)).toThrow();
});

describe("grad calculations", () => {
  test("this should return exact average", () => {
    const listValue = [80, 100, 100, 80];
    expect(averageExams(listValue)).toEqual(90);
  });

  test("this should return student pass exam", () => {
    const listValue = [80, 100, 100, 80];
    expect(isStudentPassExam(averageExams(listValue), "budy")).toEqual(true);
  });

  test("this should return student faile exam", () => {
    const listValue = [50, 65, 70, 80];
    expect(isStudentPassExam(averageExams(listValue), "john")).toEqual(false);
  });
});
