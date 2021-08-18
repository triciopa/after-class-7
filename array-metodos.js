const array = [];

array.push(1,2,3,4,5)
console.log('Push:', array)
const pop = array.pop()
console.log('Pop(',pop,'):', array)
const shift = array.shift()
console.log('Shift(',shift,'):', array)
array.unshift(1)
console.log('Unshift:', array)

array.reverse()
console.log('Reverse:', array)

array.reverse()
const slice1 = array.slice(0,2)
const slice2 = array.slice(1,-1)
const slice3 = array.slice(-3,4)
console.log('Slices:',slice1,slice2,slice3)

console.log('Splice changes:')
const splice1 = array.splice(1,2)
console.log(array)
const splice2 = array.splice(1,0,2,3)
console.log(array)
const splice3 = array.splice(2,3,8)
console.log(array)
console.log('Saved Splices:',splice1,splice2,splice3)

array.map((number, i)  => console.log('Map index',i,': ', number))

const reduce = array.reduce((acc, value) => acc + value)
console.log('Reduce:', reduce)

