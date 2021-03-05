const {calculateTip,celsiusToFahrenheit,fahrenheitToCelsius} = require('../src/math')

test('should calculate with tip',()=>{
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
    // if(total !== 13)
    // {
    //     throw new Error('Total tip should be 13. Got' + total)
    // }

})

test('should calculate with tip',()=>{
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test("convert FahrenheitToCelcius",()=>{
    const temp = fahrenheitToCelsius  (32)
    expect(temp).toBe(0)
})


test("convert CelciusToFahrenheit",() => {
    const total = celsiusToFahrenheit(0)
    expect(total).toBe(32)
})

