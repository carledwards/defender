controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipUp()
})
function moveShipUp () {
    if (isGameStarted == true) {
        if (spaceship.vy > 0) {
            spaceship.vy = 0
        } else {
            spaceship.vy = -40
            spaceship.y += -2
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipUp()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`missleLeft`, spaceship, -100, 0)
        projectile.y += 2
        projectile.x += -3
    } else {
        projectile = sprites.createProjectileFromSprite(assets.image`missleRight`, spaceship, 100, 0)
        projectile.y += 2
        projectile.x += 3
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipRight()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipLeft()
})
function moveShipLeft () {
    if (isGameStarted == true) {
        setDirection(0)
        moveDirection()
    }
}
function moveShipDown () {
    if (isGameStarted == true) {
        if (spaceship.vy < 0) {
            spaceship.vy = 0
        } else {
            spaceship.vy = 40
            spaceship.y += 2
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipRight()
})
function moveDirection () {
    if (direction == 0) {
        velocity = 60
    } else {
        velocity = -60
    }
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipDown()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipDown()
})
function setup () {
    controller.configureRepeatEventDefaults(100, 25)
    direction = 1
    spaceship = sprites.create(assets.image`Spaceship Right`, SpriteKind.Player)
    setDirection(direction)
    isGameStarted = true
}
function moveShipRight () {
    if (isGameStarted == true) {
        setDirection(1)
        moveDirection()
    }
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
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipLeft()
})
let velocity = 0
let projectile: Sprite = null
let direction = 0
let spaceship: Sprite = null
let isGameStarted = false
let sideMargin = 40
isGameStarted = false
setup()
game.onUpdate(function () {
    if (isGameStarted == true) {
        if (direction == 0) {
            if (spaceship.x < scene.screenWidth() - sideMargin) {
                spaceship.vx = velocity
            } else {
                spaceship.x = scene.screenWidth() - sideMargin
                spaceship.vx = 0
            }
        } else {
            if (spaceship.x > sideMargin) {
                spaceship.vx = velocity
            } else {
                spaceship.x = sideMargin
                spaceship.vx = 0
            }
        }
        if (velocity > 0) {
            velocity += -1
        } else if (velocity < 0) {
            velocity += 1
        }
        if (spaceship.y <= 10) {
            spaceship.y = 10
            spaceship.vy = 0
        } else if (spaceship.y >= scene.screenHeight() - 10) {
            spaceship.y = scene.screenHeight() - 10
            spaceship.vy = 0
        }
        if (spaceship.vy > 0) {
            spaceship.vy += -1
        } else if (spaceship.vy < 0) {
            spaceship.vy += 1
        }
    }
})
