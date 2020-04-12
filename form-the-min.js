// Form the Minimum:
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once(ignoring duplicates).
//     Notes:
// Only positive integers will be passed to the function (> 0 ); no negatives or zeros.
//     Example 1:
// minValue([1, 3, 1]) ==> return (13)
// Example 2:
// minValue([5, 7, 5, 9, 7]) ==> return (579)
// Example 3:
// minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) return  ==> (134679)


// create a Set to get rid of dups
// array from that
// sort that array
// join them together 

function minNum(arr) {
    let minimum = 0
    const deDupe = new Set(arr)
    const newArr = Array.from(deDupe)
    const sorted = newArr.sort() 
    const reverse = sorted.reverse()
    for (let i = 0; i < reverse.length; i++) {
            minimum += reverse[i] * 10**i
        }
    return minimum;
}

console.log(minNum([1, 3, 1]))
