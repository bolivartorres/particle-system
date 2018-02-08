angular.module("app.directives")
.directive("leavesTumbling", [function() {
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
                backgroundColor : 0x7ec0ee
            });
            elem[0].appendChild(app.view);
            var container = new PIXI.Container();
            app.stage.addChild(container);
            var leafTexture = PIXI.Texture.fromImage('resources/leaf.png');
            //Create a queue to manage how often we create a new sprite in the simulation.
            var q = async.queue(function(task, callback) {
                if(scope.play === true){
                     //This part alternates randomly between leaves rotating clockwise or counterclockwise.
                    var leaf = new PIXI.Sprite(leafTexture);
                    var switchDirection = _.sample([-1, 1]);
                    leaf.direction = switchDirection;
                    container.addChild(leaf);
                }
                //When callback is called, the queue proceeds to the next element.
                _.delay(callback, 200);//300
            }, 1);
            app.ticker.add(function(delta) {
                //Only run simulation if scope.play is true.
                if(scope.play === true){
                    
                    container.children.forEach(function(leaf){
                        MotionEffects.tumblingDownEffect(leaf, delta, width, height);
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