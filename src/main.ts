// let username = 'Dave'
// console.log(username)

// let a: number = 12
// let b: string = '6'
// let c: number = 2

// console.log(a / b)

// console.log(c * b)

//arrays and objects


// let stringArr = ['one', 'hey', 'jimmie']

// let guitars = ['Strat', 'killer', 0111]

// let mixedData = ['VUE', 1984, true]

// stringArr[0] = 'james'
// stringArr.push('hey')

// guitars[0] = 1984
// guitars.unshift('Jim')

// let test = []
// let bands: string[] = []
// bands.push('mizuka')

// // Tuple 
// let myTuple: [string, number, boolean] = ['jimmie', 42, true]

// let mixed = ['james', 1, false]

// myTuple[1] = 42

// // Objects
// let myObj: object
// myObj = []
// console.log(typeof myObj)
// myObj = bands
// myObj = {}

// const exampleObj = {
//     prop1: 'jimmie',
//     prop2: true,
// }

// exampleObj.prop1 = 'james'

// interface Guitarist {
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 0111, 'OU812']
// }

// let jp: Guitarist = {
//     active: true,
//     albums: ['I', 'II', 'IV']
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//     if (guitarist.name) {
//         return `Hello ${guitarist.name.toUpperCase()}!`
//     }
//     return 'Hello!'
// }

// console.log(greetGuitarist(jp))

// // Enums 
// // "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

// enum Grade {
//     U = 1,
//     D,
//     C,
//     B,
//     A,
// }

// console.log(Grade.U)




//  Aliases 
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'

let userName: 'jimmie' | 'james' | 'bond'
userName = 'bond'

// functions 
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number


let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}