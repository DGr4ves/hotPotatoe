function explode () {
    basic.clearScreen()
    lightFlash()
    led.setBrightness(255)
    led.plot(2, 2)
    lightFlash()
    basic.clearScreen()
    led.plot(2, 1)
    led.plot(1, 2)
    led.plot(3, 2)
    led.plot(2, 3)
    lightFlash()
    basic.clearScreen()
    led.plot(2, 0)
    led.plot(1, 1)
    led.plot(0, 2)
    led.plot(3, 1)
    led.plot(4, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(2, 4)
    lightFlash()
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(0, 1)
    led.plot(4, 1)
    led.plot(0, 3)
    led.plot(4, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(3, 4)
    led.plot(4, 4)
    lightFlash()
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    countDown = 3
    magicNumber = randint(0, 2)
    strip.clear()
    while (countDown != 0) {
        basic.showNumber(countDown)
        countDown += -1
        range = strip.range(0, 5)
        range2 = strip.range(5, 5)
        range3 = strip.range(10, 5)
        if (countDown == 2) {
            range.show()
            range.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (countDown == 1) {
            range2.show()
            range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else {
            range3.show()
            range3.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        basic.pause(500)
    }
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        strip.show()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
        strip.clear()
    }
    basic.showString("Go!")
    while (magicNumber != 0) {
        basic.pause(1000)
        magicNumber += -1
        displayLights()
    }
    explode()
    basic.showString("You Lose!")
})
function lightFlash () {
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.clear()
}
function displayLights () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    strip.clear()
    strip.show()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    strip.clear()
}
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let countDown = 0
let strip: neopixel.Strip = null
let magicNumber = 0
led.setBrightness(100)
magicNumber = 0
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
let Number2 = 0
while (Number2 < 16) {
    strip.show()
    strip.setPixelColor(Number2, neopixel.rgb(randint(0, 65), randint(0, 65), randint(0, 65)))
    Number2 += 1
    basic.pause(100)
}
while (Number2 > 0) {
    strip.show()
    strip.shift(1)
    Number2 += -1
    basic.pause(100)
}
strip.showRainbow(1, 360)
while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    strip.show()
    strip.rotate(1)
    basic.pause(100)
}
basic.forever(function () {
	
})
