# SPA Authentication Example

Single-Page Application에서의 사용자 등록과 인증 기능을 구현한 클라이언트 쪽 예시 코드입니다. Redux/React 기반의 SPA에서 JSON Web Token을 이용한 Authenticatoin이 어떻게 이루어지는지 알아보기 위한 시도의 결과물로, 실행가능한 어플리케이션입니다. 구동 중인 어플리케이션을 통해 사용자 계정 생성, 로그인 등을 시험해 보실 숭수 있습니다.

[Live Demo](https://api-example-client.herokuapp.com)

사용자 정보는 데이터베이스 없이 메모리에만 저장되며 [서버 어플리케이션](https://github.com/kimdhoe/api-example-api)이 재시동하기 전까지는 언제든 등록한 계정으로 로그인이 가능합니다. 테스트용으로 `guest`라는 이름의 사용자가 이미 등록되어 있으며, 이메일 주소는 `guest@example.com`, 암호는 `guest`입니다.

## 테스트 시나리오

다음과 같은 시나리오를 테스트할 수 있습니다.

  1. 로그아웃
  2. 로그인한 사용자에게만 허용된 페이지 접근 시도 - 실패 – 리다이렉트
  3. 로그인
  4. 로그인한 사용자에게만 허용된 페이지 접근 시도 - 성공 – 리다이렉트
  5. 로그아웃한 사용자에게만 허용된 페이지 접근 시도 – 실패 – 리다이렉트

## Authenticatoin

- __JSON Web Token (JWT)__: 로그인 성공시 서버로부터 발급된 토큰을 로컬 스토리지에 저장하고, 이후의 모든 HTTP 요청에 토큰을 실어서 보냅니다. 서버에서는 보호된 경로에 접근하기 전에 미들웨어를 통해 먼저 토큰을 확인합니다.
- __react-router / Higher-Order Component__: 클라이언트에서 사용자 로그인 상태에 따라 페이지 접근을 막거나 허용하기 위해 Higher-Order Component를 만들고, react-router를 이용해 리다이렉트합니다.
- __Validation__: 클라이언트와 서버 양쪽에서 사용자가 입력한 정보가 형식에 맞는지 확인합니다.

## 사용한 기술들

- __React / Redux__: Redux는 어플리케이션의 상태를 하나로 모아서 관리하는 구조로, 현재 상태와 발생한 액션에 따라 새로운 상태를 만들어 React 컴포넌트로 전달하게 됩니다.
- __ES6 / Babel__
- __Webpack__
- __Express__: 서버 API 어플리케이션은 Express로 작성하였고, 사용자 정보는 데이터베이스 없이 메모리에만 저장됩니다.

## 로컬 환경에서 실행하기  

로컬 환경에서 실행하려면 클라이언트와 서버 어플리케이션 둘 모두 필요합니다.

### 클라이언트

1. 이 저장소를 클론합니다.
2. `npm install`
3. `npm start`
4. localhost:3000으로 접속합니다.

### API 서버

1. [서버 어플리케이션](https://github.com/kimdhoe/auth-example-api)을 클론 후 실행합니다.
2. `npm install`
3. `npm run dev`