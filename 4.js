"use strict";
let x = 1
let y = 22
let z = 333

let sredAref = (Math.abs(x**3)+Math.abs(y**3)+Math.abs(z**3))/3
console.log("Среднее арифметические: ",sredAref)
let sredGeom = Math.cbrt((x**2)*(y**2)*(z**2))
console.log("Среднее геометрическое: ",sredGeom)
