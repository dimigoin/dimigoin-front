// 실제 서버로 요청이 전달되기까지의 오차를 고려합니다.
// 만료시기에서 60초를 빼고 계산합니다.
export default ({ exp }) => exp < (((Date.now().valueOf()) / 1000) - 60)
