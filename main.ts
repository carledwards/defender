controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipUp()
})
function moveShipUp () {
    if (isGameStarted == true) {
        if (spaceship.y <= 10) {
            spaceship.y = 10
            spaceship.vy = 0
        }
        else {
            spaceship.vy = -40
            spaceship.y += -2
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
        spaceship.vy = 40
        spaceship.y += 2
        // if (spaceship.y > (scene.screenHeight() - 10)) {
        //     spaceship.y = scene.screenHeight() - 10
        // }
    }
}

game.onUpdate(function() {
    if (isGameStarted == true) {
        if (spaceship.y <= 10) {
            spaceship.y = 10
            spaceship.vy = 0
        }
        else if (spaceship.y >= (scene.screenHeight() - 10)) {
            spaceship.y = scene.screenHeight() - 10
            spaceship.vy = 0
        }

        if (spaceship.vy > 0) {
            spaceship.vy += -1
        }
        else if (spaceship.vy < 0) {
            spaceship.vy += 1
        }
    }
})

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
    controller.configureRepeatEventDefaults(100, 20)
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
