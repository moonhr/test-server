function a(b) {
  // 자바스크립트는 코드를 짧게정의하기 위해 타입선언을 자동으로 지정함.
  // 이를 걸러내기 위해 정확도와 요구사항이 많아짐.
  if(typeof(b) === 'number'){
    if(Number.isInteger(b) === true){
      let result = b + 10;
      return result;
    }
  }
}

console.log(a('배성빈'));
console.log(a("1"));
console.log(a(1));