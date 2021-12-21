function Counter() {
    let count = 0;
    this.increase = function() {
        return ++count;
    }
    this.decrease = function() {
        return --count;
    }
}
const counter = new Counter();

console.log(counter);
console.log(counter.increase());