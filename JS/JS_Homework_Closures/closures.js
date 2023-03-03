function counter() {
    var count = 1;
    function add(count) {
        count++
        return count
    }
    return `Original count: ${count}, new count: ${add(count)}`
}
console.log(counter());