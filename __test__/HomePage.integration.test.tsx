// __test__/HomePage.integration.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from "@/app/page"; // 실제 경로에 맞게 수정
import '@testing-library/jest-dom';

describe('HomePage Integration Test', () => {
  test('홈페이지 렌더링 및 UI 요소 상호작용 확인', async () => {
    console.log('✅ HomePage 렌더링 시작');
    render(<Page />);
    console.log('✅ HomePage 렌더링 완료');

    // 1. 헤더 확인
    const headerElement = screen.getByRole('heading', { name: /welcome to the home page/i });
    console.log('✅ 헤더 렌더링 확인:', headerElement.textContent);
    expect(headerElement).toBeInTheDocument();

    // 2. 버튼 확인
    const buttonElement = screen.getByRole('button', { name: /버튼/i });
    console.log('✅ 버튼 렌더링 확인:', buttonElement);
    expect(buttonElement).toBeInTheDocument();

    // 3. 인풋 확인
    const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
    console.log('✅ 인풋 렌더링 확인:', inputElement);
    expect(inputElement).toBeInTheDocument();

    // 4. 사용자 상호작용 시뮬레이션
    const user = userEvent.setup();
    
    console.log('✅ 버튼 클릭 시도');
    await user.click(buttonElement);
    console.log('✅ 버튼 클릭 완료');

    console.log('✅ 인풋에 텍스트 입력 시도');
    await user.type(inputElement, 'Testing integration');
    console.log('✅ 인풋에 입력된 값:', inputElement.value);
    expect(inputElement).toHaveValue('Testing integration');
  });
});