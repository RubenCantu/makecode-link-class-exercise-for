let x = 0
let y = 0
basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(100)
        led.unplot(x, 0)
    }
    basic.pause(100)
})
