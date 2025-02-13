# 📌 Jest를 활용한 TypeScript Front-End 테스트 가이드

2025.02.13. 목

<br />

해당 레포는 Next.js(또는 React) 기반 프론트엔드 프로젝트에서 단위 테스트(Unit Test) 와 통합 테스트(Integration Test) 를 진행하는 과정을 설명합니다.
단위 테스트에서는 개별 컴포넌트와 유틸리티 함수의 동작을 검증하며, 통합 테스트에서는 페이지 렌더링과 사용자 상호작용을 확인합니다.

<br />
<br />

### 0. 환경설정
---

<br />

✅ TypeScript 설정
  - 전체 프로젝트를 커버하는 TypeScript 설정
  - `tsconfig.json` 파일 설정
    - (자세한 내용은 해당 파일 참조)

<br />

✅ Jest 설정
  - Jest를 사용하여 테스트 환경을 구성
  - Jest 관련 패키지 설치
    - `npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest ts-jest`
  - `jest.config.ts` 파일 생성
    - (자세한 내용은 해당 파일 참조)

<br />

✅ Babel 설정
  - Jest에서 TypeScript와 JSX를 처리하기 위해 Babel 설정이 필요
  - Babel 패키지 설치
    - `npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-env`
  - `babel.config.js` 파일 생성
    - (자세한 내용은 해당 파일 참조)

<br />
<br />

### 1. 컴포넌트 개발
---

✅ 1.1 컴포넌트 작성
  - 버튼 컴포넌트 (Button)
  - 파일 위치: `src/components/Button.tsx`
    - (해당 파일 참조)

<br />

✅ 1.2 인풋 컴포넌트 작성
  - 인풋 컴포넌트 (Input)
  - 파일 위치: `src/components/Input.tsx`
    - (해당 파일 참조)

<br />
<br />


### 2. 단위 테스트
---

<br />

  - 개별 컴포넌트의 기능 및 렌더링을 검증
  - 버튼 컴포넌트 단위 테스트
    - 파일 위치: `__test__/Button.test.tsx`
    - (해당 파일 참조)
  - 인풋 컴포넌트 단위 테스트
    - 파일 위치: `__test__/Input.test.tsx`
    - (해당 파일 참조)

<br />
<br />

### 3. 통합 테스트
---

<br />

- 페이지 단위의 상호작용 및 렌더링 통합 테스트 진행
- 예시: 홈 페이지의 렌더링 및 사용자 상호작용 검증
  - 파일 위치: `__test__/HomePage.integration.test.tsx`
  - (해당 파일 참조)

<br />
<br />

### 4. 테스트 실행 방법
---

<br />

✅ `package.json`에 스크립트 처리
  - 해당 파일 참조

<br />

✅ 모든 테스트 실행
- `npm run test`

<br />

✅ 단위 테스트 실행
- `npm run test:unit`

<br />

✅ 통합 테스트 실행
- `npm run test:integration`

<br />