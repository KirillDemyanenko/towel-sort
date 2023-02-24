
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0) return []
    let result = []
    matrix.forEach((value, index) => index % 2 === 0
        ? result.push(...value)
        : result.push(...value.reverse()))
    return result
}
