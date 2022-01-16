controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipUp()
})
function moveShipUp () {
    if (isGameStarted == true) {
        spaceship.y += -3
        if (spaceship.y < 10) {
            spaceship.y = 10
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipUp()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isGameStarted == true) {
        setDirection(0)
    }
})
function moveShipDown () {
    if (isGameStarted == true) {
        spaceship.y += 3
        if (spaceship.y > (scene.screenHeight() - 10)) {
            spaceship.y = scene.screenHeight() - 10
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isGameStarted == true) {
        setDirection(1)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipDown()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipDown()
})
function setup () {
    direction = 1
    spaceship = sprites.create(assets.image`Spaceship Right`, SpriteKind.Player)
    setDirection(direction)
    isGameStarted = true
}
function setDirection (value: number) {
    if (value != direction) {
        direction = value
        if (value == 0) {
            spaceship.setImage(assets.image`Spaceship Left`)
        } else {
            spaceship.setImage(assets.image`Spaceship Right`)
        }
    }
}
let direction = 0
let spaceship: Sprite = null
let isGameStarted = false
isGameStarted = false
setup()
