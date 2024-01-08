input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
})
