# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 메모

### PropTypes 사용 관련 패키지 설치

```bash
npm i prop-types
```

### 컴포넌트별 css 파일 적용

렌더링된 해당 html 소스 확인하면 랜덤한 class명이 발생 -> 노마드 코더는 좋은 기능이라고 함

### 7.7 Publishing

배포 버전 소스를 github 서비스에 설치(?)하는 패키지 설치

```bash
npm i gh-pages
```

웹사이트 production ready coce 생성 스크립트 실행

- production ready code: 코드가 압축되어 최적화 된 상태

```bash
npm run build
```

위 스크립트 실행하면 'build' 폴너 내 압출된 파일 생성

- 파일을 열어보면 최적화되어 알아보기 힘든 코드로 변형된 것을 확인 가능

pakeage.json 내 다음 코드 추가

- 현재 프로젝트의 깃허브 리포지토리는 'git remote -v'로 확인

- 전체 주소 확인방법: github의 해당 repository 페이지 상단의 'settings' > 'Pages' 클릭

```javascript
...
  },
  "homepage": "https://[깃허브id].github.io/[현재 프로젝트의 깃허브 repository]"
}
```

배포 관련 스크립트 추가

- "npm run deploy" 실행하면 "predeploy"가 먼저 실행되고 자체 스크립트 다음 실행

- "build" 폴더 삭제 후 해당 스크립트 실행

```javascript
"scripts": {
    ...
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
}
```

스크립트 실행 후, 해당 웹사이트 주소에 반영되려면 일정 시간 소요

- github의 해당 repository 페이지 상단의 'settings' > 'Pages' 클릭

- 주소 부분의 영역이 적색에서 녹색으로 변경되면 소스 반영 완료

빈 화면으로 나오는 경우 조치 방법

- local 환경이 아니라 github.io 환경에서 배포되므로 route path가 의도와 다르게 설정되어 문제 발생

- 이를 해결하기 위해서 react의 Router component의 basename 속성을 다음과 같이 추가

```javascript
<Router basename={process.env.PUBLIC_URL}>
```
