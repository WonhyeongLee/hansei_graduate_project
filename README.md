# hansei_graduate_project
한세-졸프

레시피추천 냉장고관리 어플 (오늘 뭐먹지)

주요기능 : 식재료 인식해서 저장 , 현재 냉장고 현황조회 후 음식추천(아키네이터 식으로 사용자 선택) -> 레시피검색 

재료인식   : Tenserflow/teachingmachine 
앱         : React (webpack + babel)
서버 DB    : NodeJS , Express , Mysql
빌드, 배포  : AWS S3 + CloudFront


테스트실행 

  1. npm install 
  
  2. npm run build
  
  3. npm run start 
  
  4. server/ 경로로 이동해서 node ./server.js 
     (로컬 DB라 아직 나빼고 테스트 불가능)
  
  



