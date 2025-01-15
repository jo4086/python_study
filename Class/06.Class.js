// Car 클래스 정의
class Car {
    // 생성자: 객체를 초기화
    constructor(brand, color) {
        this.brand = brand // 브랜드
        this.color = color // 색상
    }

    // 메서드: 자동차 정지
    stop() {
        console.log('자동차를 정지합니다.')
    }

    // 메서드: 자동차 달리기
    run() {
        console.log('자동차가 달립니다.')
    }

    // 객체 정보 출력용 메서드
    toString() {
        return `브랜드=${this.brand}, 컬러=${this.color}`
    }
}

// 자동차 객체 생성
const car1 = new Car('현대', 'white')
const car2 = new Car('BMW', 'black')

// 자동차 메서드 실행
console.log(car1.toString())
console.log(car1.brand, car1.color)
car1.run()
car1.stop()

console.log()

console.log(car2.toString())
console.log(car2.brand, car2.color)
car2.run()
car2.stop()
