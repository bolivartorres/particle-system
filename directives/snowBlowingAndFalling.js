angular.module("app.directives")
.directive("snowBlowingAndFalling", [function() {
    return {
        scope: {
            play: '='
        },
        template : "<div></div>",
        link: function(scope, elem, attr){
            scope.play = true
            var rootElement = elem[0];
            var parentElement = rootElement.parentElement;
            //Assign full width and height of the parent panel
            var width = parentElement.clientWidth;
            var height = parentElement.clientHeight;
            var app = new PIXI.Application(width, height, {
                backgroundColor : 0x191970
            });
            rootElement.appendChild(app.view);
            var switchDirection = 1;
            var container = new PIXI.Container();
            app.stage.addChild(container);
            var leafTexture = PIXI.Texture.fromImage('resources/snowflake.png');
            //Create a queue to manage how often we create a new sprite in the simulation.
            var q = async.queue(function(task, callback) {
                if(scope.play === true){
                    var leaf = new PIXI.Sprite(leafTexture);
                    leaf.direction = switchDirection;
                    switchDirection *= -1;
                    container.addChild(leaf);
                }
                //When callback is called, the queue proceeds to the next element.
                _.delay(callback, 50);
            }, 1);
            app.ticker.add(function(delta) {
                //Only run simulation if scope.play is true.
                if(scope.play === true){
                    container.children.forEach(function(leaf){
                        //This part alternates randomly between snow falling and blowing.
                        var type = _.random(1)
                        if(!leaf.effect){
                            leaf.effect = type === 0 ? "blowing" : "tumbling";
                        }
                        if(leaf.effect === "blowing"){
                            leaf.speed = 1.5;
                            MotionEffects.windBlowingEffect(leaf, delta, width, height);
                        }
                        else{
                            leaf.verticalSpeed = 1;
                            MotionEffects.shakingDownEffect(leaf, delta, width, height);
                        }
                    });
                    //Make sure we remove the leaf when they reach the maximum height to not
                    //overload the browser.
                    container.children = _.filter(container.children, function(child){
                        return child.y < height;
                    });
                    //Push a new sprite into the simulation.
                    q.push({});
                }
            });

            
        
        }
    };
}]);