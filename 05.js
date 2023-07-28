function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };
}

const counter = createCounter();

console.log("Current count:", counter.getCount());

counter.increment();
console.log("Current count:", counter.getCount());
