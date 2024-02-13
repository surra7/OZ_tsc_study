// export default -> 이 함수가 이 파일을 모듈로 내보냈을때 기본적으로 불러올 수 있는 메인 모듈임
// 여러개의 내보내기를 할때는 default를 생략
// export default function add(x: number, y: number) {
//     return x + y;
// }
export function log(message) {
    console.log(message);
}
export var appName = "demo";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
export { User };
