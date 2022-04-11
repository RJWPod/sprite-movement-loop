input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < 3; index2++) {
        for (let index2 = 0; index2 < 4; index2++) {
            Sprite.move(-1)
            basic.pause(100)
        }
        for (let index2 = 0; index2 < 4; index2++) {
            Sprite.turn(Direction.Right, 45)
            Sprite.move(1)
            Sprite.turn(Direction.Left, 45)
            basic.pause(75)
        }
        Sprite.turn(Direction.Left, 45)
        for (let index2 = 0; index2 < 5; index2++) {
            basic.pause(75)
            Sprite.move(1)
        }
        for (let index2 = 0; index2 < 5; index2++) {
            Sprite.turn(Direction.Left, 45)
            Sprite.move(1)
            Sprite.turn(Direction.Right, 45)
        }
        for (let index2 = 0; index2 < 5; index2++) {
            basic.pause(75)
            Sprite.move(-1)
        }
        Sprite.turn(Direction.Left, 45)
        for (let index2 = 0; index2 < 5; index2++) {
            basic.pause(75)
            Sprite.move(1)
        }
        index += 1
        Sprite.delete()
        if (index == 1) {
            basic.showNumber(index)
            Sprite = game.createSprite(4, 0)
            basic.pause(1000)
        } else if (index == 2) {
            basic.showNumber(index)
            Sprite = game.createSprite(4, 0)
            basic.pause(1000)
        } else if (index == 3) {
            basic.showNumber(index)
            Sprite = game.createSprite(4, 0)
            basic.pause(1000)
            index = 0
            music.playTone(659, music.beat(BeatFraction.Quarter))
            music.playTone(740, music.beat(BeatFraction.Quarter))
        }
    }
})
let index = 0
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)
