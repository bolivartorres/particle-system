//Define motion effects API here.
var MotionEffects = (function(){
    return{
        tumblingDownEffect: function(sprite, delta, panelWidth, panelHeight){
            var step = 0.03;
            if(!sprite.radius){
                sprite.radius = 20;
            }
            if(!sprite.angle){
                sprite.angle = 0;
            }
            if(!sprite.direction){
                sprite.direction = 1;
            }
            if(!sprite.randomX){
                sprite.randomX = _.random(0, panelWidth);
            }
            if(!sprite.verticalOffset){
                sprite.verticalOffset = 0;
            }
            if(!sprite.verticalSpeed){
                sprite.verticalSpeed = 0.5
            }
            if(!delta){
                delta = 1;
            }

            sprite.angle += step * Math.PI
            var xFactor = sprite.radius * Math.cos(sprite.angle);
            var yFactor = sprite.radius * Math.sin(sprite.angle);
            sprite.verticalOffset += sprite.verticalSpeed;
            sprite.x = xFactor + sprite.randomX;
            sprite.y = yFactor + sprite.verticalOffset;
            sprite.rotation += 0.1 * sprite.direction * delta;
        },
        shakingDownEffect: function(sprite, delta, panelWidth, panelHeight){
            var circlingStep = 0.05;
            if(!sprite.radius){
                sprite.radius = 5;
            }
            if(!sprite.angle){
                sprite.angle = 0;
            }
            if(!sprite.direction){
                sprite.direction = 1;
            }
            if(!sprite.randomX){
                sprite.randomX = _.random(0, panelWidth);
            }
            if(!sprite.verticalOffset){
                sprite.verticalOffset = 0;
            }
            if(!sprite.verticalSpeed){
                sprite.verticalSpeed = 0.5
            }
            if(!delta){
                delta = 1;
            }

            sprite.angle += circlingStep * Math.PI
            var xFactor = sprite.radius * Math.cos(sprite.angle);
            var yFactor = sprite.radius * Math.abs(Math.sin(sprite.angle));
            sprite.verticalOffset += sprite.verticalSpeed;
            sprite.x = xFactor + sprite.randomX;
            sprite.y = yFactor + sprite.verticalOffset;
            // sprite.rotation += 0.1 * sprite.direction * delta;
        },
        windBlowingEffect: function(sprite, delta, panelWidth, panelHeight){
            var step = 0.03;
            if(!sprite.angle){
                sprite.angle = 0;
            }
            if(!sprite.randomX){
                sprite.randomX = _.random(panelWidth);
            }
            if(!sprite.randomY){
                sprite.randomY = _.random(panelHeight);
            }
            if(!sprite.startingSide){
                sprite.startingSide = _.random(1)
            }
            if(!sprite.speed){
                sprite.speed = 1;
            }
            if(!delta){
                delta = 1;
            }

            sprite.angle += step * Math.PI
            var xFactor =  Math.cos(sprite.angle);
            var yFactor =  Math.sin(sprite.angle);


            if(sprite.startingSide === 0){
                if(sprite.x === 0){
                    sprite.x += sprite.randomX;
                }
                else{
                    sprite.x += sprite.speed;
                }
                
                sprite.y += sprite.speed;
            }
            if(sprite.startingSide === 1){
                if(sprite.y === 0){
                    sprite.y += sprite.randomY;
                }
                else{
                    sprite.y += sprite.speed;
                }
                
                sprite.x += sprite.speed;
            }
        }
    }
}());