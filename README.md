# ⚡️ PokemonDex : 나만의 포켓몬 도감 만들기

PokemonDex는 포켓몬 데이터를 조회하고 나만의 포켓몬을 수집할 수 있는 **SPA(Single Page Application)**입니다.

사용자가 포켓몬을 선택하여 대시보드에 추가하거나, 상세 정보를 확인할 수 있습니다.
**React**와 **Redux**를 활용하여 상태 관리와 라우팅을 구현한 개인 프로젝트입니다.

## 🔗 프로젝트 구조

### ☑️ 기본 CRUD 기능

- **CREATE** : 포켓몬을 대시보드에 추가 (최대 6개의 포켓몬 선택 기능)
- **READ** : 포켓몬 데이터 `MOCK_DATA`를 리스트로 시각화 (PokemonList 컴포넌트 내 PokemonCard 생성)
- **UPDATE** : 선택 및 삭제된 포켓몬의 상태를 변경하여 리렌더링
- **DELETE** : 메인 Dex 화면 내의 선택된 포켓몬 삭제 / 디테일 페이지 내 선택된 포켓몬 삭제

### ☑️ 추가 기능

- **Alert** : 6개 이상의 포켓몬을 선택할 때 경고 알림
- **Exception** : 포켓몬 선택 및 삭제에 따라 중복 선택 방지 및 PokemonList 업데이트
- **UI** : react-toastify 라이브러리로 사용자 경험 개선

### ☑️ 프로젝트 트리

```
react-pokemon-dex
├─ README.md
├─ index.html // 기본 HTML 파일; Vite 빌드 시 참조
├─ public // 공용 리소스
│  ├─ Poke_Ball_icon.svg
│  ├─ pokeBall.png
│  └─ pokemon-logo.png
├─ src
│  ├─ App.jsx // Main component of React project
│  ├─ components
│  │  ├─ Dashboard.jsx // 선택된 포켓몬 리스트
│  │  ├─ PokemonCard.jsx // 개별 포켓몬 카드 생성
│  │  ├─ PokemonDetail.jsx // 포켓몬 설명 페이지
│  │  └─ PokemonList.jsx // 포켓몬 리스트
│  ├─ data
│  │  └─ mockData.jsx // 포켓몬 데이터
│  ├─ main.jsx // application entry point (ReactDOM.render)
│  ├─ pages
│  │  ├─ Dex.jsx // 도감 페이지 컴포넌트
│  │  └─ Home.jsx // 홈 페이지 컴포넌트
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js // Redux store 설정
│  │  └─ slice.js // Redux 상태 관리
│  ├─ shared
│  │  └─ Router.jsx // 라우팅 관련 설정
└─ └─ style.jsx // 글로벌 스타일 설정 (styled-components)

```

## 🛠️ 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=flat-square&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![StyledComponents](https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

## 🎱 개발 프로세스

- **Vite 프로젝트 셋업**

- **라우팅 구성**  
  `react-router-dom`을 이용한 페이지 간 라우팅 설정

- **상태 관리 방식 결정 및 구현**

  - **prop-drilling** 방식으로 초기 프로젝트 상태 관리
  - **Context API**로 리팩토링하여 전역 상태 관리로 확장
  - **Redux Toolkit(RTK)** 적용하여 최종 리팩토링

- **컴포넌트 설계 및 기능 구현**  
  **Dashboard**, **PokemonList**, **PokemonCard**, **PokemonDetail** 컴포넌트를 모듈화하여 설계

- **Git 브랜치 전략 및 리팩토링**  
  **prop-drilling**, **Context API**, **RTK** 브랜치를 각각 분리하여 작업 후, **main 브랜치**에 통합하여 최종 프로젝트 배포

## 🌧️ TROUBLE-SHOOTING

| ![이미지1](https://velog.velcdn.com/images/ye21iin/post/e513101d-e6d6-4521-9d3a-d71b4df5f2a9/image.png)                                     | ![이미지2](https://velog.velcdn.com/images/ye21iin/post/bca98a15-52fa-4919-94a0-cc5fadab220f/image.png)      | ![이미지3](https://velog.velcdn.com/images/ye21iin/post/e752bc51-eebf-46dc-9270-781374d7c38f/image.png)              | ![이미지4](https://velog.velcdn.com/images/ye21iin/post/419f7bfd-de0a-4606-b8ff-22a8977e20b9/image.png)                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [링크1](https://velog.io/@ye21iin/%EC%97%90%EB%9F%AC%EB%A9%94%EC%84%B8%EC%A7%80%EB%A5%BC-%EC%B2%98%EB%A6%AC%ED%95%98%EC%9E%90-UnKnown-word) | [링크2](https://velog.io/@ye21iin/%EC%97%90%EB%9F%AC%EB%A9%94%EC%84%B8%EC%A7%80-missing-in-props-validation) | [링크3](https://velog.io/@ye21iin/%EC%97%90%EB%9F%AC%EB%A9%94%EC%84%B8%EC%A7%80-React-hook-has-a-missing-dependency) | [링크4](https://velog.io/@ye21iin/Vercel-%EB%B0%B0%ED%8F%AC-%ED%9B%84-404-%EC%97%90%EB%9F%AC%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%91%EB%B0%95-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0) |

## 🌠 미리 보기

![Image](https://github.com/user-attachments/assets/80a68c80-be8a-4bef-ade2-eda8f997b1df)
