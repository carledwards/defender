namespace SpriteKind {
    export const terrain = SpriteKind.create()
}
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
function updateSpaceshipImage () {
    if (direction == 0) {
        if (Math.abs(velocity) > FULL_VELOCITY - 8) {
            spaceship.setImage(assets.image`Spaceship Left Flame 2`)
        } else {
            spaceship.setImage(assets.image`Spaceship Left Flame 1`)
        }
    } else {
        if (Math.abs(velocity) > FULL_VELOCITY - 8) {
            spaceship.setImage(assets.image`Spaceship Right Flame 2`)
        } else {
            spaceship.setImage(assets.image`Spaceship Right Flame 1`)
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
        velocity = FULL_VELOCITY
    } else {
        velocity = 0 - FULL_VELOCITY
    }
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipDown()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveShipDown()
})
function setup () {
    terrain2 = sprites.create(assets.image`terrain 1`, SpriteKind.terrain)
    terrain2.setPosition(scene.screenWidth() / 2, scene.screenHeight() - terrain2.height)
    controller.configureRepeatEventDefaults(100, 25)
    direction = 1
    spaceship = sprites.create(assets.image`Spaceship Right Flame 0`, SpriteKind.Player)
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
        updateSpaceshipImage()
    }
}
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    moveShipLeft()
})
let terrain2: Sprite = null
let projectile: Sprite = null
let velocity = 0
let direction = 0
let spaceship: Sprite = null
let isGameStarted = false
let FULL_VELOCITY = 0
let SIDE_MARGIN = 40
FULL_VELOCITY = 70
isGameStarted = false
setup()
game.onUpdate(function () {
    if (isGameStarted == true) {
        if (direction == 0) {
            if (spaceship.x < scene.screenWidth() - SIDE_MARGIN) {
                spaceship.vx = velocity
            } else {
                spaceship.x = scene.screenWidth() - SIDE_MARGIN
                spaceship.vx = 0
            }
        } else {
            if (spaceship.x > SIDE_MARGIN) {
                spaceship.vx = velocity
            } else {
                spaceship.x = SIDE_MARGIN
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
    updateSpaceshipImage()
    if (spaceship.vx == 0) {
        terrain2.vx = velocity
    } else {
        if (Math.abs(terrain2.vx) < 4) {
            terrain2.vx = 0
        } else {
            if (terrain2.vx < 0) {
                terrain2.vx = terrain2.vx + 2
            } else {
                terrain2.vx = terrain2.vx - 2
            }
        }
    }
})
