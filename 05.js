function createCounter(count = 0) {
    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };
}

let c;
c++;
const counter = createCounter(c);


console.log("Current count:", counter.getCount());

counter.increment();
console.log("Current count:", counter.getCount());
