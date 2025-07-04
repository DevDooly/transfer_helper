# Data Pipeline

## 관리자 페이지 / 목록

* 로그인
* 조회
* 계정 관리
* 계정 목록

## 관리자 페이지 / 로그인

1. 관리자 페이지 접속
   * https://admin.{{ hostname }}:{{ port }}

2. 로그인
   * 계정 정보 입력 ( id / pw )
   * 로그인 버튼 입력
   * REST API 서버에 계정정보 전달
     * id / pw / ip / try count 등
     * https://rest.{{ hostname }}:{{ port }}/login
     * REST API 비동기로 해당 데이터 처리
     * 결과값은 true or false
     * sql injection 등 방어기법 사용
   * 관리자 페이지 이동
   * 세션 정보 확인

## 관리자 페이지 / 조회

