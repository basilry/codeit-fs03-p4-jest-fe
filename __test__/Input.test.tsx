import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Input from "@/components/Input";

describe("🔹 Input Component Test", () => {
  test("✅ label이 주어졌을 때 정상적으로 렌더링 되는지 확인", () => {
    render(<Input label="Username" placeholder="Enter username" />);
    
    // label 출력 확인
    expect(screen.getByText("Username")).toBeInTheDocument();
    
    // placeholder 확인
    const inputElement = screen.getByPlaceholderText("Enter username");
    expect(inputElement).toBeInTheDocument();
  });

  test("✅ onChange 핸들러가 정상적으로 호출되는지 확인", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");

    await user.type(inputElement, "Hello");

    // "Hello"는 5글자이므로, onChange가 5번 호출되는 것이 일반적
    expect(handleChange).toHaveBeenCalledTimes(5);
  });

  test("✅ defaultValue가 주어졌을 때 초기 값이 표시되는지 확인", () => {
    render(<Input defaultValue="TestValue" />);
    
    const inputElement = screen.getByDisplayValue("TestValue");
    expect(inputElement).toBeInTheDocument();
  });

  test("✅ disabled 상태일 때 입력이 불가능한지 확인", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} disabled />);
    const inputElement = screen.getByRole("textbox");

    // disabled된 input은 사용자가 입력을 시도해도 onChange가 호출되지 않음
    await user.type(inputElement, "Hello");
    expect(handleChange).not.toHaveBeenCalled();
  });
});