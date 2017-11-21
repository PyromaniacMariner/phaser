var SetTileCollision = require('./SetTileCollision');
var RecalculateFaces = require('./RecalculateFaces');

var SetCollisionBetween = function (start, stop, collides, recalculateFaces, layer)
{
    if (collides === undefined) { collides = true; }
    if (recalculateFaces === undefined) { recalculateFaces = true; }

    if (start > stop) { return; }

    for (var ty = 0; ty < layer.height; ty++)
    {
        for (var tx = 0; tx < layer.width; tx++)
        {
            var tile = layer.data[ty][tx];
            if (tile)
            {
                if (tile.index >= start && tile.index <= stop)
                {
                    SetTileCollision(tile, collides);
                }
            }
        }
    }

    if (recalculateFaces) { RecalculateFaces(layer); }
};

module.exports = SetCollisionBetween;