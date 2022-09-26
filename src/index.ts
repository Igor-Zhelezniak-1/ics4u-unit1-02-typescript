/**
 * E = mc²
 *
 * By:      Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-23
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let e: number | undefined
const lightSpeed = 2.998 * Math.pow(10, 8)

console.log('E=mc²')
console.log('Light speed = 2.998*10⁸m/s')
const mString = prompt('Enter M(kg): ')

try {
  let mNumber = parseInt(mString)
  e = mNumber * Math.pow(lightSpeed, 2)
  console.log(`E = ${e}`)
} catch (err) {
  console.log('\nInvalid number!')
}
console.log('\nDone.')
