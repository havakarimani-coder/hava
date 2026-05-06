basic.showLeds(`
    . # # # #
    . # . . #
    . # # # #
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    . # # # #
    . # . . #
    . # # # #
    . # . # .
    . # . . #
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    . . . # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . # # . .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
for (let index = 0; index < 4; index++) {
    music.play(music.stringPlayable("C D E F G A B C5 ", 50), music.PlaybackMode.LoopingInBackground)
}
