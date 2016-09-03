import React from 'react'

class Greetings extends React.Component {
  render () {
    return (
      <div>
        <h2>Hello World</h2>

        <p>
          환영합니다! 이 페이지는 사용자 등록과 인증 기증을 구현한 React/Redux 웹 어플리케이션입니다. Single-Page Application(SPA)에서 JSON Web Token 기반의 authenticatoin이 어떻게 이루어지는지 알아보기 위한 시도의 결과물로, 필수적인 관련 기능들을 테스트해보실 수 있습니다.
        </p>

        <p>이 어플리케이션에서 테스트 가능한 시나리오는 다음과 같습니다.</p>

        <ol>
          <li>로그인한 사용자에게만 허용된 페이지('/protected', '/me') 접근 시도 - 실패</li>
          <li>사용자 등록</li>
          <li>로그인</li>
          <li>보호된 페이지 접근 시도 - 성공</li>
          <li>로그인하지 않은 사용자에게만 허용된 페이지('/signup', '/login') 접근 시도 - 실패</li>
        </ol>

        <p>
          사용자 정보는 데이터베이스 없이 메모리에만 저장되며 서버 어플리케이션이 재시동하기 전까지는 언제든 등록한 계정으로 로그인이 가능합니다. 테스트용으로 <code>guest</code>라는 이름의 사용자가 이미 등록되어 있으며, 이메일 주소는 <code>guest@example.com</code>, 암호는 <code>guest</code>입니다.
        </p>

        <h3>소스 코드</h3>

        <p>오류 지적, 개선할 점, 감상 등 모든 피드백 환영합니다.</p>

        <ul>
          <li>
            <a href="https://github.com/kimdhoe/auth-example-client">
              Client App
            </a>
          </li>
          <li>
            <a href="https://github.com/kimdhoe/auth-example-api">
              Server App
            </a>
          </li>
        </ul>

        <h3>요점</h3>

        <h4>Authenticatoin</h4>

        <li><strong>JSON Web Token (JWT)</strong> – 로그인 성공시 서버로부터 발급된 토큰을 로컬 스토리지에 저장하고, 이후의 모든 HTTP 요청에 토큰을 실어서 보냅니다. 서버에서는 보호된 경로에 접근하기 전에 미들웨어를 통해 먼저 토큰을 확인합니다.</li>
        <li><strong>react-router, Higher-Order Component</strong> – 클라이언트에서 사용자 로그인 상태에 따라 페이지 접근을 막거나 허용하기 위해 Higher-Order Component를 만들고, react-router를 이용해 리다이렉트합니다.</li>
        <li><strong>Validation</strong> – 클라이언트와 서버 양쪽에서 사용자가 입력한 정보가 형식에 맞는지 확인합니다.</li>

        <h4>사용한 기술들</h4>

        <li>클라이언트 어플리케이션은 <em>React</em>와 <em>Redux</em>로 작성되었습니다. Redux는 어플리케이션의 상태를 하나로 모아서 관리하는 구조로, 현재 상태와 발생한 액션에 따라 새로운 상태를 만들어 React 컴포넌트로 전달하게 됩니다.</li>
        <li>소스 코드는 <em>ES6</em>로 작성되어 <em>Babel</em>로 트랜스파일되었으며, 빌드 도구로는 <em>Webpack</em>을 사용하였습니다.</li>
        <li>서버 API 어플리케이션은 Express로 작성하였습니다. 사용자 정보는 데이터베이스 없이 메모리에만 저장됩니다.</li>
      </div>
    )
  }
}

export default Greetings
