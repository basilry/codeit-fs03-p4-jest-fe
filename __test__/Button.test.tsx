import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"; // user-event 추가
import Button from "@/components/Button";

describe("🔹 Button Component Test", () => {
  test("✅ 버튼이 정상적으로 렌더링 되는지 확인", () => {
    render(<Button label="버튼" onClick={() => {}} />);
    const buttonElement = screen.getByText("버튼");
    expect(buttonElement).toBeInTheDocument();
  });

  test("✅ 버튼 클릭 이벤트가 정상적으로 동작하는지 확인 (기본)", () => {
    const handleClick = jest.fn();
    render(<Button label="버튼" onClick={handleClick} />);
    
    const buttonElement = screen.getByText("버튼");
    buttonElement.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("✅ userEvent를 사용하여 버튼 클릭", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<Button label="버튼" onClick={handleClick} />);
    
    const buttonElement = screen.getByRole("button", { name: "버튼" });
    await user.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("✅ 버튼이 비활성화(disabled) 상태일 때 클릭이 안 되는지 확인", () => {
    const handleClick = jest.fn();
    render(<Button label="버튼" onClick={handleClick} disabled />);
    
    const buttonElement = screen.getByText("버튼");
    expect(buttonElement).toBeDisabled();

    buttonElement.click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("✅ Snapshot 테스트", () => {
    const { container } = render(<Button label="스냅샷 테스트" onClick={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});