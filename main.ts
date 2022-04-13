function explode () {
    basic.clearScreen()
    led.setBrightness(255)
    led.plot(2, 2)
    basic.pause(100)
    basic.clearScreen()
    led.plot(2, 1)
    led.plot(1, 2)
    led.plot(3, 2)
    led.plot(2, 3)
    basic.pause(100)
    basic.clearScreen()
    led.plot(2, 0)
    led.plot(1, 1)
    led.plot(0, 2)
    led.plot(3, 1)
    led.plot(4, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(2, 4)
    basic.pause(100)
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
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    countDown = 3
    magicNumber = randint(0, 10)
    while (countDown != 0) {
        basic.showNumber(countDown)
        basic.pause(500)
        countDown += -1
    }
    basic.clearScreen()
    basic.showString("Go!")
    while (magicNumber != 0) {
        basic.pause(1000)
        magicNumber += -1
        displayLights()
    }
    explode()
    basic.showString("You Loose!")
})
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
}
let countDown = 0
let magicNumber = 0
led.setBrightness(100)
magicNumber = 0
basic.forever(function () {
	
})
