namespace SpriteKind {
    export const bounce_pad = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vy = -175
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (mySprite.overlapsWith(mySprite4)) {
        mySprite.vy = -275
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
        mySprite.vy = -200
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        mySprite.vy = -200
    }
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile0`)) {
        mySprite.vx = 100
        mySprite.vy = -150
    }
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile0`)) {
        mySprite.vx = -100
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    level_2()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vy = 150
})
controller.combos.attachCombo("uuddlrlrba", function () {
    color.startFade(color.originalPalette, color.GrayScale)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . 8 8 8 . . . . . . . 
        . 8 8 8 . . . . . . . 
        . 8 8 8 8 8 8 8 8 . . 
        . 9 9 9 9 9 9 9 8 . . 
        . 9 1 9 9 1 9 9 9 . . 
        . 9 1 9 9 1 9 9 6 e e 
        9 9 9 9 9 9 9 9 6 d d 
        9 9 8 8 8 9 9 9 6 e e 
        9 6 9 9 9 9 9 9 6 d d 
        9 6 9 9 9 9 9 9 9 e e 
        9 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 . . 
        . 8 8 . . . . 8 8 . . 
        . 8 8 . . . . 8 8 . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (mySprite.overlapsWith(mysprite_3)) {
        mySprite.vy = -275
    }
})
function level_2 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    scene.setBackgroundImage(img`
        bbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccddddddddddddcccccccccccccccccccccccccbbbbbddddddddddcccccccccccccccccccccbbbbbbbbbbdddddddddddd
        bbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccdddddddddddddccccaccccccccccccccccccccbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddddd
        bbbbbccccccccccccacccccbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccddddddddddddddcccaacccccccccccacccccccbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddddd
        bbbbbbbccccccccccaccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccccccddddddddddddddccccaacccccccccacccccccbbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddddd
        bbbbbbbbccccccccccaccccccbbbbbbbbbbbbbbbbcccccccccccccccccccccccddddddddddddddcccccacccccccccaccccccbbbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddccc
        bbbbbbbbbcccccccccaacccccbbbbbbbbbbbbbbbbccccccaccccccccccccccccdddddddddddddddcccccccccccccacccccccbbbbbddddddddddcccccccccccccccccccccccbbbbbbbbbdddddcccccccc
        bbbbbbbbbbcccccccccacccccbbbbbbbbbbbbbbbbccccccacccccccccccccccddddddddddddddddcccccccccccccacccccccbbbbbddddddddddcccccccccccccccccccccccbbbbbbbbbdddcccccccccc
        bbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbccccccaccccccccccccccccddddddddddddddddccccccccccccaccccccccbbbbbddddddddddccccccccccccccacccccccbbbbbbbbbbdcccccacccccc
        bbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbccccccaccccccccccccccccdddddddddddddddddccccccccccaccccccccccbbbdddddddddddccccccccccccccacccccccbbbbbbbbbccccccaacccccc
        bbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbccccccaccccccccccccccccddddddddddddddddddccccccccacccccccccccbbddddddddddddccccccccccccccacccccccbbbbbbbcccccccaaccccccc
        bbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbcccccccacccccccccccccccddddddddddddddddddccccccccccccccccccccccbdddddddddddcccccccccccccccacccccccbbbbbbcccccccaacccccccc
        bbbbbbbbbbbbbbbcccacccccccccbbbbbbbbbbbccccccaccccccccccccccccbddddddddddddddddcccccccccccccccccccccccbdddddddddddcccccccccccccccaccccccbbbbbcccccccaaaccccccccd
        bbbbbbbbbbbbbbbbcccacccccccccbbbbbbbbbbccccccaccccccccccccccccbddddddddddddddddccccccccccccccccccccccccdddddddddddcccccccccccccccaccccccbbbbccccccccccccccccccdd
        bbbbbbbbbbbbbbbbccccacccccccccbbbbbbbbcccccccacccccccccccccccbbdddddddddddddddcccccccccccccccccccccccccdddddddddd.ccccccccccccccacccccccbbbccccccccccccccccccddd
        bbbbbbbbbbbbbbbbcccccacccccccccbbbbbbbcccccccacccccccccccccccbbddddddddddddddccccccccccccccccccccccccccddddddddddccccccccaccccccacccccccbcccccccccccccccccccdddd
        bbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbcccccccccccccccccccccccbbdddddddddddddcccccccccccccaccccccccccccccdddddddd.ccccccccaccccccccccccccbccccccccccccccccccddddd
        bbbbbbbbbbbbbbbbbbcccccccccccccccbbbbccccccccccccccccccccccccbbbdddddddddddcccccccccccccacccccccccccccccdddddddd.ccccccccacccccccccccccccccaccccccccccccccdddddd
        bbbbbbbbbbbbbbbbbbbccccccccccccccbbbbcccccccccccccccccccccccbbbbdddddddddddcccccccccccccacccccccccccaccccddddddd.ccccccccaccccccccccccccccaacccccccccccccddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccccbbbcccccccccccccccccccccccbbbbddddddddddccccccccccccaacccccccccccccacccddddddbccccccccacccccccccccccccaaccccccccccccccdddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccccbbccccccccccccccccccccccccbbbbdddddddddccccccccccccaacccccccccccccccaccddddddbccccccccaccccccccccccccaacccccccccaccccddddddddd
        bbbbbbbbbbbbbbbbbbbbbccccccccaccccbbccccccccccccccccccccccccbbbbdddddddddcccccccccccaaccccbcccccccccccacccdddddbccccccccaccccccccccccccccccccccccaccccdddddddddd
        bbbbbbbbbbbbbbbbbbbbbbccccccccaccccccccccccccccccccccccccccbbbbbddddddddcccccccccccccccccbbccccccccccccaccddddbbcccccccaccccccccccccccccccccccccaccccddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbcccccccccacccccccccccccccccccccccccccbbbbbbdddddddcccccccacccccccbbbbccccccacccccaccddddbbcccccccacccccccccccccccccccccccacccccddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbddddddcccccccaccccccccbbbbbccccccaccccaaccddbbcccccccacccccccccccccccccccccccaccccddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccaccccccbbbbbbdddddccccccccacccccccdbbbbbdcccccaccccccccddbbcccccccaccccccccaccccccccccccaaccccdddddddddddddd
        dddbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccaccccacccccbbbbbbbdddddcccccccacccccccddbbbbddcccccacccccccccbbbccccccacccccccccacccccccccccacccccbdddddddddddddd
        ddddddbbbbbbbbbbbbbbbbbbccccccacccccccccccccccacccccacccccbbbbbbbddddccccccccaccccccdddbbbbdddcccccaccccccccbbbcccccccccccccccccacccccccccacccccbbdddddddddddddd
        dddddddddddbbbbbbbbbbbbbccccccacccccccccccccccacccccacccccbbbbbbbbdddcccccccaccccccddddbbbddddcccccaccccccccbbccccccccccccccccccacccccccaaccccccbddddddddddddddd
        dddddddddddddddbbbbbbbbbbccccccaccccccccccccccacccccaccccbbbbbbbbbdddccccccaccccccdddddbbbddddccccccaccccccccbccccccccccccccccccacccccccaccccccbbddddddddddddddd
        ddddddddddddddddddbbbbbbbccccccaaccccccccccccaccccccaccccbbbbbbbbbddcccccccacccccddddddbbddddddcccccaccccccccbccccccccccccccccccaccccccccccccbbbbddddddddddddddd
        dddddddddddddddddddbbbbbbbcccccccaaaccccccccaccccccacccccbbbbbbbbbddccccccaccccccddddddbdddddddccccccaccccccccccccccccccccccccccacccccccccccddbbbddddddddddddddd
        dddddddddddddddddddddbbbbbcccccccccccccccccaaccccccacccccbbbbbbbbbccccccaaccccccddddddddddddddddcccccaccccccccccccccccccccccccccacccccccccccddbbdddddddddddddddd
        dddddddddddddddddddddddbbbbccccccccccccccccccccccccaccccbbbbbbbbbbcccccaaccccccdddddddddddddddddccccccacccccccccccccccccccccccccacccccccccdddddbdddddddddddddddd
        ddddddddddddddddddddddddbbbbcccccccccccccccccccccccaccccbbbbbbbbbccccccaccccccdddddddddddddddddddcccccacccccccccccccccccccccccccaccccccccddddddddddddddddddddddd
        ddddddddddddddddddddddddddbbccccccccccccccccccccccacccccbbbbbbbbcccccccccccccddddddddddddddddddddcccccaaccccccccccccccccccccccccacccccccdddddddddddddddddddddddd
        dddddddddddddddddddddddddddbbcccccccccccccccccccccacccccbbbbbbbcccccccccccccddddddddddddddddddddddcccccacccccccccccccccaaacccccccccccccddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddbbccccccccccccccccccccaccccbbbbbbbcccccccccccccddddddddddddddddddddddbcccccacccccccccccaaaafffacccccccccccdddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddbbccccccccccccccccccacccccbbbbbbcccccccccccccddddddddddddddddddddddbbbccccaccccccccccaffffffffaccccccccdddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddcccccccccaaccccccccacccccbbbbbccccccccccccccdddddddddddddddddddddbbbbccccccccccccccafffffffffaccccccccdddddddddddddddddddddddddddb
        bbddddddddddddddddddddddddddddcccccccaaffaaacccccccccccbbbbccccccccccccccdddddddddddddddddddddbbbbbccccccccaccccaffffffffffacccccccbdddddddddddddddddddddddddddb
        bbbbbbbbddddddddddddddddddddddccccccaffffffaccccccccccdddbccccccccccccccdddddddddddddddddddddbbbbbbcccccccccacccaffffffffffaccccccbbbddddddddddddddddddddddddddb
        bbbbbbbbbbbbbddddddddddddddddcccccaafffffffaccccccccccddddcccccccccccccddddddddddddddddddddddbbbbbbbccccccccacccaffffffffffaccccccbbbdddddddddddddddddddddddddbb
        bbbbbbbbbbbbbbdddddddddddddddccccafffffffffaccccccccccdddccccccccccccccdddddddddddddddddddddbbbbbbbbccccccccaacafffffffffffaccccccbbbbddddddddddddddddddddddddbb
        bbbbbbbbbbbbbbbddddddddddddddccccafffffffffaccccccccccdddcccccccacccccddddddddddddddddddddddbbbbbbbbbccccccccccaffffffffffacccccccbbbbdddddddddddddddddddddddbbb
        bbbbbbbbbbbbbbbbddddddddddddccccaffffffffffacccccccccddcccccccccacccccddddddddddddddddddddddbbbbbbbbbccccccccccaffffffffffaccccccbbbbbdddddddddddddddddddddddbbb
        bbbbbbbbbbbbbbbbbdddddddddddccccafffffffffffaccccccccdcccccccccaccccbdddddddddddddddddddddddbbbbbbbbbccccccccccaffffffffffaccccccbbbbbddddddddddddddddddddddbbbb
        bbbbbbbbbbbbbbbbbbddddddddddcccafffffffffffacccccccccccccccccccaccccbdddddddddddddddddddddddbbbbbbbbbbccccccccccaffffffffacccccccbbbbbbddddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbddddddddccccafffffffffffacccccccccccccccccccacccbbddddddddddddddddddddddbbbbbbbbbbbccccccccccaffffffffacccccccbbbbbbddddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbbdddddddccccafffffffffffacccccccccccacccccaacddcbbddddddddddddddddddddddbbbbbbbbbbbccccccccccafffffffaccccccccbbbbbbbdddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbbbbdddddccccaffffffffffacccccccccccaacccccacccddbbbdddddddddddddddddddddbbbbbbbbbbbcccccccccccafffffaccccccccbbbbbbbbdddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbddddccccafffffffffacccccccccccacccccccccccdddbbdddddddddddddddddddddbbbbbbbbbbbccccccccccccafffacccccccccbbbbbbbbbdddddddddddddddddbbbbbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbdccccafffffffffacccccccccccacccccccccccddddbdddddddddddddddddddddbbbbbbbbbbbcccccccccccccaaaccccccccccbbbbbbbbbdddddddddddddddddbbbbbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbccccccaffffffaacccccccccccacccccccccccdddddddddddddddddddddddddddbbbbbbbbbbbccccccccccacccccccccccccccbbbbbbbbbbddddddddddddddddbbbbdd
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccccafffaacccccccccccaacccccccccccdddddddddddddddddddddddddddddbbbbbbbbbbcccccccccacccccccccccccccbbbbbbbbbbbdddddddddddddddbbbbbdd
        bbbbbbbbbbbbbbbbbbbbbbbbbcccccccccaaaccccccccccccaccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbbcccccccccacccccccccccccccbbbbbbbbbbddddddddddddddddbbbbddd
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccaaccccccccccccdddddddddddddddddddddddddddddddbbbbbbbbbbccccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbbbddd
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccaaccccccccccccddddddddddddddddddddddddddddddddbbbbbbbbbbbcccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbbdddd
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddbbbbbbbbbbbccccccaaccccccccccccccccbbbbbbbbbddddddddddddddddbbbbdddd
        bbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddbbbbbbbbbbccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbbddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddbbbbbbbbbbccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbdddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccaccccccccccccccccacccccccbbdddddddddddddddddddddddddddddddddbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbddddddddddddddddbddddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccacccccccccccccccacccccccbbbbbdddddddddddddddddddddddddddddddbbbbbbbbbbcccccccccccccccccacccccbbbbbbbbbddddddddddddddddbdddddddd
        bbbbbbbbbbbbbbbbbbbbbbcccccccccccaccccccccccccccacccccccbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbccccccccccccccccccacccccbbbbbbbbbddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbccccccccccaccccccccccccccaccccccccbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbccccccccccccccccccaccccbbbbbbbbbbddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbccccccccccacccccccccccccaacccccccbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbccccccccccccccccccaccccbbbbbbbbbdddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbcccccccccccaccccccccccccaacccccccbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbccccccccccccccccccaccccbbbbbbbbbdddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbcccccccccccacccccccccccacccccccccbbbbbbbbbbbbbdddddddddddddddddddddddddddbbbbbbbbccccccccccccccccccaccccbbbbbbbbbdddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbcccccccccccacccccccccaaacccccccbbbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbcccccccccccccccccccaccccbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccacccccccccccccccccccbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddbbbbbbbcccccccccccccccccccacccbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddbbbbbbccccccccccccccccccaccccbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbbbccccccccccccccccccaccccbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbcccccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbcccccccccccccccccccaccccbbbbbbbbdddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbcccccccccccccaccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbcccccccccaccccccccaccccbbbbbbbbbdddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbcccccccccaccccccccaccccbbbbbbbbbdddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbccccccccccccccccccccccaccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbccccccccaccccccccccccccbbbbbbbbddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbccccccccccccccccccccccacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbcccccccccaccccccccccccccbbbbbbbbddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbccccccccccccccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbcccccccccaccccccccccccccbbbbbbbbddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbcccccccccacccccccccccccbbbbbbbbddddddddddddddddddddddddddbbbb
        bbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbcccccccccacccccccccccccbbbbbbbbdddddddddddddddddddddddbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccccccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbccccccccaccccccccccccccbbbbbbbbdddddddddddddddddddddbbbbbbbbb
        bbbbbbbbbbbbbbbbcccccccccccccccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbcccccccccaccccccccccccccbbbbbbbbddddddddddddddddddbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbccccccccccccacccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbccccccccacccccccccccccccbbbbbbbdddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbcccccccccccaccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbccccccccaccccccccacccccbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbcccccccccccacccccccccaacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbccccccccaccccccccacccccbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbcccccccccccacccccccccaccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddccccccccacccccccccacccccbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbccccccccccaccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddcccccccacccccccccacccccbbbbbbddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddcccccccaccccccccccaccccbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddcccccccaccccccccccaccccbbbbbdddddddddddddddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccccccccccaccccbbbbdddddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbcccccccccaacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccccccccccaccccbbdddddddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbcccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccccccccccaccccddddddddddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbcccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccccccccccaccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccccccccccaccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccccccccccaccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccacccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccacccccddddddddddddddddddddddddddddbbbbbbbbbbbbb
        bbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddcccccccccccccccccccacccccddddddddddddddddddddddddddddbbbbbbbbbbbbb
        bbbbbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccccccccccaccccdddddddddddddddddddddddddddddbbbbbbbbbbbbb
        bbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccacccccddddddddddddddddddddddddddddddbbbbbbbbbbbb
        bccccccccccccccccccccccccccccccccacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddcccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbbbb
        cccccccccccccccccccccccccccccccccacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddccccccccccccccccccccccccccdddddddddddddddddddddddddddddddbbbbbbbbbbb
        ccccccccccccaacccccccccccccccccccaccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddcccccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbbb
        cccccccccaaacccccccccccccccccccccacccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbb
        ccccccccacccccccccccccccccccccccaacccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccacccccccccccccccccccccccdddddddddddddddddddddddddddddbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccaccccccccccccccccccccccccdddddddddddddddddddddddddddddbbbbbbbbb
        cccccccccccccccccaccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccaccccccccccccccccccaccccccdddddddddddddddddddddddddddddbbbbbbbb
        cccccccccccccccccaccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccacccccccccccccccccccaccccccdddddddddddddddddddddddddddddbbbbbbb
        ccccccccccccccccaaccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddccccccccccccaccccccccccccccccccccacccccccddddddddddddddddddddddddddddbbbbbbb
        ccccccccccccccccacccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccacccccccccccccccccccccaccccccccddddddddddddddddddddddddddddbbbbbb
        cccccccccccccccaccccccccaccccccccacccccccccbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddcccccccccccccaccccccccccccccccccccccaccccccccdddddddddddddddddddddddddddbbbbbb
        cccccccccccccccaccccccccaccccccccacccccccccbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccacccccccccaccccacccccccccacccccccccddddddddddddddddddddddddddbbbbb
        cccccccccccccccacccccccccacccccccacccccccccbbbbbbbbbbbbbbbbbbbdddddddddddddcdcccccccccccccccaacccccccccaccccccacccccccccaccccccccccddddddddddddddddddddddddbbbbb
        ccccccccccccccaccccccccccacccccccacccccccccbbbbbbbbbbbbbbbbbbdddddddddddddccccccccccccccccccacccccccccacccccccaccccccccccaacccccccccdddddddddddddddddddddddddbbb
        ccccccccccccccaccccccccccaccccccccacccccccccbbbbbbbbbbbbbbbbddddddddddddddcccccccccccccccccaccccccccaacccccccccacccccccccccacccccccccccddddddddddddddddddddddbbb
        cccccccccccccacccccccccccaccccccccacccccccccbbbbbbbbbbbbbbbddddddddddddddcccccccccccccccaaacccccccaaacccccccccccacccccccccccacccccccccccddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccacccccccccbbbbbbbbbbbbbdddddddddddccccccccccccccaaaaacccccccccccccccccccccccccaaccccccccccacccccccccccddddddddddddddddddddddb
        cccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccdddddddddddddddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddd
        `)
    music.playMelody("D B G C A F C5 E ", 115)
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile5`)
    animation.runImageAnimation(
    mySprite5,
    [img`
        5 . . . 5 . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . 5 . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . 5 . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . 5 . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . 5 . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . 5 . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . 5 . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . 5 . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . 5 . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . 5 . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . 5 . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . . 5 . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . . 5 . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . . 5 . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . 5 . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . 5 . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . . . 5 . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . 5 . . . . 5 . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . 5 . . . . 5 . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 5 . . . . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 5 . . . . . . . . . 5 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 . . . . . . 5 . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . 5 . . . . 5 . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . 5 . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . 5 . . . . . . . 5 . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . 5 . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 . . . . . . . 5 . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . 5 . . . 5 . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . 5 . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . 5 . . . . . . . 5 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . 5 . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . . 5 . . . 5 . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . 5 . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . 5 . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . 5 . . . . . . . 5 . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `],
    75,
    true
    )
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile3`)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . 5 . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . 5 . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . 5 . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . 5 . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . 5 . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . . 5 . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . . . . 5 . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . 5 . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . 5 . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . 5 . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . 5 . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . . . 5 . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . 5 . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . 5 . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . 5 . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . 5 . . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . . 5 . . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . 5 . . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . 5 . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . 5 . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . 5 . . . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . 5 . . . . 5 . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . 5 . . . . 5 . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . 5 . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        5 . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . 5 . . . . . . 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . 5 . . . . 5 . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . 5 . . . . 5 . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . 5 . . . . . . . 5 . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . 5 . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . 5 . . . . . . . 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . 5 . . . 5 . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . 5 . . . . 5 . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        5 . . . . . . . 5 . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . 5 . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . 5 . . . 5 . . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . 5 . . . . 5 . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . 5 . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . 5 . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . 5 . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . 5 . 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `],
    75,
    true
    )
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile6`)
    animation.runImageAnimation(
    mySprite4,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `],
    75,
    true
    )
    tiles.placeOnRandomTile(mysprite_3, assets.tile`myTile9`)
    animation.runImageAnimation(
    mysprite_3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `],
    75,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite.vx = -150
    }
})
function level_1 () {
    mySprite = sprites.create(img`
        . . . . . . . 8 8 8 . 
        . . . . . . . 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 . 
        . . 8 9 9 9 9 9 9 9 . 
        . . 8 9 9 1 9 9 1 9 . 
        e e 9 9 9 1 9 9 1 9 . 
        d d 6 9 9 9 9 9 9 9 9 
        e e 6 9 9 9 8 8 8 8 9 
        d d 6 9 9 9 9 9 9 6 9 
        e e 9 9 9 9 9 9 9 6 9 
        . . 8 8 8 8 8 8 8 8 9 
        . . 8 8 8 8 8 8 8 8 . 
        . . 8 8 . . . . 8 8 . 
        . . 8 8 . . . . 8 8 . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, controller.dx())
    info.setLife(5)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    scene.setBackgroundImage(img`
        bbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccddddddddddddcccccccccccccccccccccccccbbbbbddddddddddcccccccccccccccccccccbbbbbbbbbbdddddddddddd
        bbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccdddddddddddddccccaccccccccccccccccccccbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddddd
        bbbbbccccccccccccacccccbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccddddddddddddddcccaacccccccccccacccccccbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddddd
        bbbbbbbccccccccccaccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccccccddddddddddddddccccaacccccccccacccccccbbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddddd
        bbbbbbbbccccccccccaccccccbbbbbbbbbbbbbbbbcccccccccccccccccccccccddddddddddddddcccccacccccccccaccccccbbbbbbddddddddddccccccccccccccccccccccbbbbbbbbbddddddddddccc
        bbbbbbbbbcccccccccaacccccbbbbbbbbbbbbbbbbccccccaccccccccccccccccdddddddddddddddcccccccccccccacccccccbbbbbddddddddddcccccccccccccccccccccccbbbbbbbbbdddddcccccccc
        bbbbbbbbbbcccccccccacccccbbbbbbbbbbbbbbbbccccccacccccccccccccccddddddddddddddddcccccccccccccacccccccbbbbbddddddddddcccccccccccccccccccccccbbbbbbbbbdddcccccccccc
        bbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbccccccaccccccccccccccccddddddddddddddddccccccccccccaccccccccbbbbbddddddddddccccccccccccccacccccccbbbbbbbbbbdcccccacccccc
        bbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbccccccaccccccccccccccccdddddddddddddddddccccccccccaccccccccccbbbdddddddddddccccccccccccccacccccccbbbbbbbbbccccccaacccccc
        bbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbccccccaccccccccccccccccddddddddddddddddddccccccccacccccccccccbbddddddddddddccccccccccccccacccccccbbbbbbbcccccccaaccccccc
        bbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbcccccccacccccccccccccccddddddddddddddddddccccccccccccccccccccccbdddddddddddcccccccccccccccacccccccbbbbbbcccccccaacccccccc
        bbbbbbbbbbbbbbbcccacccccccccbbbbbbbbbbbccccccaccccccccccccccccbddddddddddddddddcccccccccccccccccccccccbdddddddddddcccccccccccccccaccccccbbbbbcccccccaaaccccccccd
        bbbbbbbbbbbbbbbbcccacccccccccbbbbbbbbbbccccccaccccccccccccccccbddddddddddddddddccccccccccccccccccccccccdddddddddddcccccccccccccccaccccccbbbbccccccccccccccccccdd
        bbbbbbbbbbbbbbbbccccacccccccccbbbbbbbbcccccccacccccccccccccccbbdddddddddddddddcccccccccccccccccccccccccdddddddddd.ccccccccccccccacccccccbbbccccccccccccccccccddd
        bbbbbbbbbbbbbbbbcccccacccccccccbbbbbbbcccccccacccccccccccccccbbddddddddddddddccccccccccccccccccccccccccddddddddddccccccccaccccccacccccccbcccccccccccccccccccdddd
        bbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbcccccccccccccccccccccccbbdddddddddddddcccccccccccccaccccccccccccccdddddddd.ccccccccaccccccccccccccbccccccccccccccccccddddd
        bbbbbbbbbbbbbbbbbbcccccccccccccccbbbbccccccccccccccccccccccccbbbdddddddddddcccccccccccccacccccccccccccccdddddddd.ccccccccacccccccccccccccccaccccccccccccccdddddd
        bbbbbbbbbbbbbbbbbbbccccccccccccccbbbbcccccccccccccccccccccccbbbbdddddddddddcccccccccccccacccccccccccaccccddddddd.ccccccccaccccccccccccccccaacccccccccccccddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccccbbbcccccccccccccccccccccccbbbbddddddddddccccccccccccaacccccccccccccacccddddddbccccccccacccccccccccccccaaccccccccccccccdddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccccbbccccccccccccccccccccccccbbbbdddddddddccccccccccccaacccccccccccccccaccddddddbccccccccaccccccccccccccaacccccccccaccccddddddddd
        bbbbbbbbbbbbbbbbbbbbbccccccccaccccbbccccccccccccccccccccccccbbbbdddddddddcccccccccccaaccccbcccccccccccacccdddddbccccccccaccccccccccccccccccccccccaccccdddddddddd
        bbbbbbbbbbbbbbbbbbbbbbccccccccaccccccccccccccccccccccccccccbbbbbddddddddcccccccccccccccccbbccccccccccccaccddddbbcccccccaccccccccccccccccccccccccaccccddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbcccccccccacccccccccccccccccccccccccccbbbbbbdddddddcccccccacccccccbbbbccccccacccccaccddddbbcccccccacccccccccccccccccccccccacccccddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbddddddcccccccaccccccccbbbbbccccccaccccaaccddbbcccccccacccccccccccccccccccccccaccccddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccaccccccbbbbbbdddddccccccccacccccccdbbbbbdcccccaccccccccddbbcccccccaccccccccaccccccccccccaaccccdddddddddddddd
        dddbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccaccccacccccbbbbbbbdddddcccccccacccccccddbbbbddcccccacccccccccbbbccccccacccccccccacccccccccccacccccbdddddddddddddd
        ddddddbbbbbbbbbbbbbbbbbbccccccacccccccccccccccacccccacccccbbbbbbbddddccccccccaccccccdddbbbbdddcccccaccccccccbbbcccccccccccccccccacccccccccacccccbbdddddddddddddd
        dddddddddddbbbbbbbbbbbbbccccccacccccccccccccccacccccacccccbbbbbbbbdddcccccccaccccccddddbbbddddcccccaccccccccbbccccccccccccccccccacccccccaaccccccbddddddddddddddd
        dddddddddddddddbbbbbbbbbbccccccaccccccccccccccacccccaccccbbbbbbbbbdddccccccaccccccdddddbbbddddccccccaccccccccbccccccccccccccccccacccccccaccccccbbddddddddddddddd
        ddddddddddddddddddbbbbbbbccccccaaccccccccccccaccccccaccccbbbbbbbbbddcccccccacccccddddddbbddddddcccccaccccccccbccccccccccccccccccaccccccccccccbbbbddddddddddddddd
        dddddddddddddddddddbbbbbbbcccccccaaaccccccccaccccccacccccbbbbbbbbbddccccccaccccccddddddbdddddddccccccaccccccccccccccccccccccccccacccccccccccddbbbddddddddddddddd
        dddddddddddddddddddddbbbbbcccccccccccccccccaaccccccacccccbbbbbbbbbccccccaaccccccddddddddddddddddcccccaccccccccccccccccccccccccccacccccccccccddbbdddddddddddddddd
        dddddddddddddddddddddddbbbbccccccccccccccccccccccccaccccbbbbbbbbbbcccccaaccccccdddddddddddddddddccccccacccccccccccccccccccccccccacccccccccdddddbdddddddddddddddd
        ddddddddddddddddddddddddbbbbcccccccccccccccccccccccaccccbbbbbbbbbccccccaccccccdddddddddddddddddddcccccacccccccccccccccccccccccccaccccccccddddddddddddddddddddddd
        ddddddddddddddddddddddddddbbccccccccccccccccccccccacccccbbbbbbbbcccccccccccccddddddddddddddddddddcccccaaccccccccccccccccccccccccacccccccdddddddddddddddddddddddd
        dddddddddddddddddddddddddddbbcccccccccccccccccccccacccccbbbbbbbcccccccccccccddddddddddddddddddddddcccccacccccccccccccccaaacccccccccccccddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddbbccccccccccccccccccccaccccbbbbbbbcccccccccccccddddddddddddddddddddddbcccccacccccccccccaaaafffacccccccccccdddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddbbccccccccccccccccccacccccbbbbbbcccccccccccccddddddddddddddddddddddbbbccccaccccccccccaffffffffaccccccccdddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddcccccccccaaccccccccacccccbbbbbccccccccccccccdddddddddddddddddddddbbbbccccccccccccccafffffffffaccccccccdddddddddddddddddddddddddddb
        bbddddddddddddddddddddddddddddcccccccaaffaaacccccccccccbbbbccccccccccccccdddddddddddddddddddddbbbbbccccccccaccccaffffffffffacccccccbdddddddddddddddddddddddddddb
        bbbbbbbbddddddddddddddddddddddccccccaffffffaccccccccccdddbccccccccccccccdddddddddddddddddddddbbbbbbcccccccccacccaffffffffffaccccccbbbddddddddddddddddddddddddddb
        bbbbbbbbbbbbbddddddddddddddddcccccaafffffffaccccccccccddddcccccccccccccddddddddddddddddddddddbbbbbbbccccccccacccaffffffffffaccccccbbbdddddddddddddddddddddddddbb
        bbbbbbbbbbbbbbdddddddddddddddccccafffffffffaccccccccccdddccccccccccccccdddddddddddddddddddddbbbbbbbbccccccccaacafffffffffffaccccccbbbbddddddddddddddddddddddddbb
        bbbbbbbbbbbbbbbddddddddddddddccccafffffffffaccccccccccdddcccccccacccccddddddddddddddddddddddbbbbbbbbbccccccccccaffffffffffacccccccbbbbdddddddddddddddddddddddbbb
        bbbbbbbbbbbbbbbbddddddddddddccccaffffffffffacccccccccddcccccccccacccccddddddddddddddddddddddbbbbbbbbbccccccccccaffffffffffaccccccbbbbbdddddddddddddddddddddddbbb
        bbbbbbbbbbbbbbbbbdddddddddddccccafffffffffffaccccccccdcccccccccaccccbdddddddddddddddddddddddbbbbbbbbbccccccccccaffffffffffaccccccbbbbbddddddddddddddddddddddbbbb
        bbbbbbbbbbbbbbbbbbddddddddddcccafffffffffffacccccccccccccccccccaccccbdddddddddddddddddddddddbbbbbbbbbbccccccccccaffffffffacccccccbbbbbbddddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbddddddddccccafffffffffffacccccccccccccccccccacccbbddddddddddddddddddddddbbbbbbbbbbbccccccccccaffffffffacccccccbbbbbbddddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbbdddddddccccafffffffffffacccccccccccacccccaacddcbbddddddddddddddddddddddbbbbbbbbbbbccccccccccafffffffaccccccccbbbbbbbdddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbbbbdddddccccaffffffffffacccccccccccaacccccacccddbbbdddddddddddddddddddddbbbbbbbbbbbcccccccccccafffffaccccccccbbbbbbbbdddddddddddddddddddbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbddddccccafffffffffacccccccccccacccccccccccdddbbdddddddddddddddddddddbbbbbbbbbbbccccccccccccafffacccccccccbbbbbbbbbdddddddddddddddddbbbbbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbdccccafffffffffacccccccccccacccccccccccddddbdddddddddddddddddddddbbbbbbbbbbbcccccccccccccaaaccccccccccbbbbbbbbbdddddddddddddddddbbbbbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbccccccaffffffaacccccccccccacccccccccccdddddddddddddddddddddddddddbbbbbbbbbbbccccccccccacccccccccccccccbbbbbbbbbbddddddddddddddddbbbbdd
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccccafffaacccccccccccaacccccccccccdddddddddddddddddddddddddddddbbbbbbbbbbcccccccccacccccccccccccccbbbbbbbbbbbdddddddddddddddbbbbbdd
        bbbbbbbbbbbbbbbbbbbbbbbbbcccccccccaaaccccccccccccaccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbbcccccccccacccccccccccccccbbbbbbbbbbddddddddddddddddbbbbddd
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccaaccccccccccccdddddddddddddddddddddddddddddddbbbbbbbbbbccccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbbbddd
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccaaccccccccccccddddddddddddddddddddddddddddddddbbbbbbbbbbbcccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbbdddd
        bbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddbbbbbbbbbbbccccccaaccccccccccccccccbbbbbbbbbddddddddddddddddbbbbdddd
        bbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddbbbbbbbbbbccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbbddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddbbbbbbbbbbccccccaccccccccccccccccbbbbbbbbbbddddddddddddddddbbdddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccaccccccccccccccccacccccccbbdddddddddddddddddddddddddddddddddbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbddddddddddddddddbddddddd
        bbbbbbbbbbbbbbbbbbbbbbbccccccccccacccccccccccccccacccccccbbbbbdddddddddddddddddddddddddddddddbbbbbbbbbbcccccccccccccccccacccccbbbbbbbbbddddddddddddddddbdddddddd
        bbbbbbbbbbbbbbbbbbbbbbcccccccccccaccccccccccccccacccccccbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbccccccccccccccccccacccccbbbbbbbbbddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbccccccccccaccccccccccccccaccccccccbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbccccccccccccccccccaccccbbbbbbbbbbddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbccccccccccacccccccccccccaacccccccbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbccccccccccccccccccaccccbbbbbbbbbdddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbcccccccccccaccccccccccccaacccccccbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbccccccccccccccccccaccccbbbbbbbbbdddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbcccccccccccacccccccccccacccccccccbbbbbbbbbbbbbdddddddddddddddddddddddddddbbbbbbbbccccccccccccccccccaccccbbbbbbbbbdddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbcccccccccccacccccccccaaacccccccbbbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbcccccccccccccccccccaccccbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccacccccccccccccccccccbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddbbbbbbbcccccccccccccccccccacccbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddbbbbbbccccccccccccccccccaccccbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbccccccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbbbccccccccccccccccccaccccbbbbbbbbbddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbcccccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbcccccccccccccccccccaccccbbbbbbbbdddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbcccccccccccccaccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbcccccccccaccccccccaccccbbbbbbbbbdddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbcccccccccaccccccccaccccbbbbbbbbbdddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbccccccccccccccccccccccaccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbccccccccaccccccccccccccbbbbbbbbddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbccccccccccccccccccccccacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbcccccccccaccccccccccccccbbbbbbbbddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbccccccccccccccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbcccccccccaccccccccccccccbbbbbbbbddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbcccccccccacccccccccccccbbbbbbbbddddddddddddddddddddddddddbbbb
        bbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbcccccccccacccccccccccccbbbbbbbbdddddddddddddddddddddddbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccccccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbccccccccaccccccccccccccbbbbbbbbdddddddddddddddddddddbbbbbbbbb
        bbbbbbbbbbbbbbbbcccccccccccccccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbcccccccccaccccccccccccccbbbbbbbbddddddddddddddddddbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbccccccccccccacccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbccccccccacccccccccccccccbbbbbbbdddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbcccccccccccaccccccccccaccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbccccccccaccccccccacccccbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbcccccccccccacccccccccaacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbccccccccaccccccccacccccbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbcccccccccccacccccccccaccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddccccccccacccccccccacccccbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbccccccccccaccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddcccccccacccccccccacccccbbbbbbddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddcccccccaccccccccccaccccbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddcccccccaccccccccccaccccbbbbbdddddddddddddddddddbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbccccccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccccccccccaccccbbbbdddddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbcccccccccaacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccccccccccaccccbbdddddddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbcccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccccccccccaccccddddddddddddddddddddddddddbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbcccccccccaccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccccccccccaccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccccccccccaccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccccccccccaccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccacccccdddddddddddddddddddddddddddbbbbbbbbbbbbbb
        bbbbbbbbccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccacccccddddddddddddddddddddddddddddbbbbbbbbbbbbb
        bbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddcccccccccccccccccccacccccddddddddddddddddddddddddddddbbbbbbbbbbbbb
        bbbbbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccccccccccaccccdddddddddddddddddddddddddddddbbbbbbbbbbbbb
        bbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccacccccddddddddddddddddddddddddddddddbbbbbbbbbbbb
        bccccccccccccccccccccccccccccccccacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddcccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbbbb
        cccccccccccccccccccccccccccccccccacccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddccccccccccccccccccccccccccdddddddddddddddddddddddddddddddbbbbbbbbbbb
        ccccccccccccaacccccccccccccccccccaccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddcccccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbbb
        cccccccccaaacccccccccccccccccccccacccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbb
        ccccccccacccccccccccccccccccccccaacccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddbbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccacccccccccccccccccccccccdddddddddddddddddddddddddddddbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccaccccccccccccccccccccccccdddddddddddddddddddddddddddddbbbbbbbbb
        cccccccccccccccccaccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddccccccccccaccccccccccccccccccaccccccdddddddddddddddddddddddddddddbbbbbbbb
        cccccccccccccccccaccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccacccccccccccccccccccaccccccdddddddddddddddddddddddddddddbbbbbbb
        ccccccccccccccccaaccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddccccccccccccaccccccccccccccccccccacccccccddddddddddddddddddddddddddddbbbbbbb
        ccccccccccccccccacccccccacccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddcccccccccccacccccccccccccccccccccaccccccccddddddddddddddddddddddddddddbbbbbb
        cccccccccccccccaccccccccaccccccccacccccccccbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddcccccccccccccaccccccccccccccccccccccaccccccccdddddddddddddddddddddddddddbbbbbb
        cccccccccccccccaccccccccaccccccccacccccccccbbbbbbbbbbbbbbbbbbbbdddddddddddddddddccccccccccccccacccccccccaccccacccccccccacccccccccddddddddddddddddddddddddddbbbbb
        cccccccccccccccacccccccccacccccccacccccccccbbbbbbbbbbbbbbbbbbbdddddddddddddcdcccccccccccccccaacccccccccaccccccacccccccccaccccccccccddddddddddddddddddddddddbbbbb
        ccccccccccccccaccccccccccacccccccacccccccccbbbbbbbbbbbbbbbbbbdddddddddddddccccccccccccccccccacccccccccacccccccaccccccccccaacccccccccdddddddddddddddddddddddddbbb
        ccccccccccccccaccccccccccaccccccccacccccccccbbbbbbbbbbbbbbbbddddddddddddddcccccccccccccccccaccccccccaacccccccccacccccccccccacccccccccccddddddddddddddddddddddbbb
        cccccccccccccacccccccccccaccccccccacccccccccbbbbbbbbbbbbbbbddddddddddddddcccccccccccccccaaacccccccaaacccccccccccacccccccccccacccccccccccddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccacccccccccbbbbbbbbbbbbbdddddddddddccccccccccccccaaaaacccccccccccccccccccccccccaaccccccccccacccccccccccddddddddddddddddddddddb
        cccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccdddddddddddddddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddd
        `)
    music.playMelody("C A F C5 G E B D ", 115)
    mySprite.ay = 500
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `, SpriteKind.bounce_pad)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile3`)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . 5 . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . 5 . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . 5 . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . 5 . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . 5 . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . . 5 . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . . . . 5 . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . 5 . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . 5 . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . 5 . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . 5 . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . . . 5 . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . 5 . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . 5 . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . 5 . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . 5 . . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . . 5 . . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . 5 . . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . 5 . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . 5 . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . 5 . . . . . . 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . . 5 . . . . 5 . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . 5 . . . . 5 . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . 5 . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        5 . . . . . . . . . 5 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . 5 . . . . . . 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . . 5 . . . . 5 . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . 5 . . . . 5 . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . 5 . . . . . . . 5 . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . 5 . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . 5 . . . . . . . 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . . 5 . . . 5 . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . 5 . . . . 5 . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        5 . . . . . . . 5 . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . 5 . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . 5 5 5 5 
        . . . 5 . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `,img`
        . . . . 5 . . . 5 . . . . . . 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . 5 . . . . 5 . . . . 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . 5 . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . 5 . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . 5 . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . 5 . . . . . . . 5 . 5 5 5 5 
        . . . . . . . . . . . . . . 5 5 
        . . . . . . . . . . . . . . . 5 
        `],
    75,
    true
    )
    mysprite_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.bounce_pad)
    tiles.placeOnRandomTile(mysprite_3, assets.tile`myTile9`)
    animation.runImageAnimation(
    mysprite_3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `],
    75,
    true
    )
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.bounce_pad)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile6`)
    animation.runImageAnimation(
    mySprite4,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . 5 . 5 . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . 5 . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `],
    75,
    true
    )
    mySprite5 = sprites.create(img`
        5 . . . . . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `, SpriteKind.bounce_pad)
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile5`)
    animation.runImageAnimation(
    mySprite5,
    [img`
        5 . . . 5 . . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . 5 . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . 5 . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . 5 . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . 5 . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . 5 . . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . 5 . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . 5 . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . 5 . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . 5 . . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . 5 . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . . 5 . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . . 5 . . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . . 5 . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . 5 . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . 5 . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 . . . . . . 5 . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . 5 . . . . 5 . . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . 5 . . . . 5 . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 5 . . . . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 5 . . . . . . . . . 5 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 . . . . . . 5 . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . 5 . . . . 5 . . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . 5 . . . . 5 . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . 5 . . . . . . . 5 . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . 5 . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 . . . . . . . 5 . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . 5 . . . 5 . . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . 5 . . . . 5 . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . 5 . . . . . . . 5 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . 5 . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . 5 . . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `,img`
        5 . . . . . . 5 . . . 5 . . . . 
        5 5 . . . . . . . . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        5 5 5 5 . . . . 5 . . . . 5 . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . 5 . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . 5 . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 5 . . . . . . . . . . . 
        5 5 5 5 . 5 . . . . . . . 5 . . 
        5 5 . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . . 
        `],
    75,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vx = -175
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . 8 8 8 . 
        . . . . . . . 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 . 
        . . 8 9 9 9 9 9 9 9 . 
        . . 9 9 9 1 9 9 1 9 . 
        e e 6 9 9 1 9 9 1 9 . 
        d d 6 9 9 9 9 9 9 9 9 
        e e 6 9 9 9 8 8 8 9 9 
        d d 6 9 9 9 9 9 9 6 9 
        e e 9 9 9 9 9 9 9 6 9 
        . . 8 8 8 8 8 8 8 8 9 
        . . 8 8 8 8 8 8 8 8 . 
        . . 8 8 . . . . 8 8 . 
        . . 8 8 . . . . 8 8 . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (mySprite.overlapsWith(mySprite5)) {
        mySprite.vx = 150
    }
})
controller.combos.attachCombo("abrlrldduu", function () {
    info.setLife(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vx = -175
})
let mySprite2: Sprite = null
let mySprite5: Sprite = null
let mysprite_3: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88999999999999999999999999999999966bbbbbbb889999999999999966bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88999999999999999999999999999999966bbbbbb88999999999999999966bbbbbbbbbbbbbbbbbb8899999966bbbbbbbbbbbbbbbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88999999999999999999999999999999966bbbbb8899999999999999999966bbbbbbbbbbbbbbbbb8899999966bbbbbbbbbbbbbbbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88999999999999999999999999999999966bbbb889999999999999999999966bbbbbbbbbbbbbbbb8899999966bbbbbbbbbbbbbbbbb889999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88999999999999999999999999999999966bbbb889999999999999999999966bbbbbbbbbbbbbbbb88999999966bbbbbbbbbbbbbbbb889999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88999999999999999999999999999999966bbbb889999999999999999999966bbbbbbbbbbbbbbbb889999999666bbbbbbbbbbbbbbb889999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88888888888888889999966666666666666bbbb889999999999999999999966bbbbbbbbbbbbbbbb889999999966bbbbbbbbbbbbbb8899999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb88888888888888889999966666666666666bbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb889999999966bbbbbbbbbbbbbb8899999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb889999999966bbbbbbbbbbbbbb8899999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb8899999999966bbbbbbbbbbbb88999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb8899999999966bbbbbbbbbbbb88999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999999966bbbbbbbbbb889999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999999966bbbbbbbbbb889999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb889999999999966bbbbbbbb8899999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb889999999999966bbbbbbbb8899999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb8899999999999966bbbbbbb8899999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb8899999999999966bbbbbb88999999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb8899999999999966bbbbbb88999999999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999998899999966bbbb889999988999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999998899999966bbbb889999988999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb889999988899999966bbb889999688999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb889999998899999966bb8899999688999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb8899999988999999966b8899996688999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999b889999996688999996688999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999b889999996889999966b88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999bb88999999899999966b88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999bb8899999999999966bb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999bb8899999999999966bb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999bbb88999999999966bbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbababababbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999bbb88999999999966bbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbaaaaaaabbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb8899999966bbbb8899999966bbbbbbbbbbbbbbbb88999999bbbb889999999966bbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbaaafaaabbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb889999999999999999999966bbbbbbbbbbbbbbbb88999999bbbb889999999966bbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbaaafaaabbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbb889999999999999999999966bbbbbbbbbbbbbbbb88999999bbbb88999999966bbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    bbbaaaaaaabbbbbbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbbb8899999999999999999966bbbbbbbbbbbbbbbbb88999999bbbbb8899999966bbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaaaabbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbbbb88999999999999999966bbbbbbbbbbbbbbbbbb88999999bbbbb8899999966bbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaaaabbbbbbbbbbbbbbbbb889999966bbbbbbbbbbbbbbbbbbb889999999999999966bbbbbbbbbbbbbbbbbbb88999999bbbbbb889999966bbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88999999bbbbbb88999966bbbbbb88999999966bbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    aaaaaaaaaaaafabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccaaaaaaafffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccaaaafffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccbbbbaaaaaaaaaaaaaaabbaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccacbbbcbaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccbbcbbcbbcbbaaaaccaaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccbbcbbcbbbcaaaaabbaaaaaaaaaaaaaaaaaabbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccbbcbbccbbccbcbbbcbbbcaaaaaaaaaaaaaabcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcbbbcbbcbbbcbbcbbbcbbcbbccbcbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccbbbcbbbcbbcbbbcbbcbbbbcbbcbbcbbcbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcbbcbbbcbbbcbbbcbbcbbcbbcbcbbcbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbbcbbbcbbbcbbcbbcbbcbcbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccbbcbbbcbbcbbcbbcbccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcbbcbbbcbbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbcccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
timer.after(1000, function () {
    level_1()
})
