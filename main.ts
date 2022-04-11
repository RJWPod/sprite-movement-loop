input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            Sprite.move(-1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            Sprite.turn(Direction.Right, 45)
            Sprite.move(1)
            basic.pause(100)
            Sprite.turn(Direction.Left, 45)
            basic.pause(100)
        }
        Sprite.turn(Direction.Left, 45)
        for (let index = 0; index < 5; index++) {
            basic.pause(100)
            Sprite.move(1)
        }
        for (let index = 0; index < 5; index++) {
            Sprite.turn(Direction.Left, 45)
            Sprite.move(1)
            basic.pause(100)
            Sprite.turn(Direction.Right, 45)
        }
        for (let index = 0; index < 5; index++) {
            basic.pause(100)
            Sprite.move(-1)
        }
        Sprite.turn(Direction.Left, 45)
        for (let index = 0; index < 5; index++) {
            basic.pause(100)
            Sprite.move(1)
        }
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)
