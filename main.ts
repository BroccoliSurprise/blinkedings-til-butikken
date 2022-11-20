// Klikk for å bytte mellom vilvitegrønt og regnbue
function klikk () {
    regnbue = !(regnbue)
    if (regnbue) {
        speed = 64
        haloDisplay.showRainbow(1, 360)
    } else {
        grønnMønster()
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    haloDisplay.setBrightness(255)
})
// Denne funksjonen setter alle lysene på ringen til å bli grønne, med økende lysstyrke. 
// Den første halvparten øker styrken sakte, den andre øker mye fortere.
function grønnMønster () {
    speed = 24
    for (let index = 0; index <= 30; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.rgb(0, index * 2, 0))
        haloDisplay.setZipLedColor(index + 30, kitronik_halo_hd.rgb(0, index * 3 + 60, 0))
    }
}
input.onButtonPressed(Button.A, function () {
    klikk()
})
input.onButtonPressed(Button.B, function () {
    klikk()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    haloDisplay.setBrightness(50)
})
let speed = 0
let regnbue = false
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
basic.showIcon(IconNames.Target)
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(50)
grønnMønster()
regnbue = false
basic.forever(function () {
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(speed)
})
basic.forever(function () {
    basic.showString("Denne lysringen kan programmeres til å bli en alarmklokke    ")
})
