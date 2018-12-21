function getMatrix(w, h) {
    socket = io();
    matrix = []
    for (var y = 0; y< h; y++){matrix[y] =[]
        for (var x = 0; x < 2; x++)
        var r = random(100);
        if (r < 20 ) r =0;
 else if (r < 65) r = 1
else if (r < 90) r = 2
else if (r < 100) r = 3
matrix[x][y] = r;
    
}
return matrix;
}
Grass = require("./Grass");
Xotaker = require("./Xotaker");
Hav = require("./Hav");

matrix 
w = 30;
h = 30;
side = 24;
grassarr = [], xotaker = [], havArr = [];
matrix = getMatrix(w, h);
for (var y in matrix){
    for (var x in matrix[y]){
        if (matrix [x][y=1]){
grassArr.push(new Grass(x* 1, y * 1,1))
        } 
        if (matrix [x][y=1]){
            havArr.push(new Xotaker(x* 1, y * 1,2))
                    } 
                    if (matrix [x][y=1]){
                        grassArr.push(new Hav(x* 1, y * 1,3))
                                } 
    }
}
setInterval(drowServerayin, 1000);
functiondrowServerayin(); {
    for (var i in grassArr){
        grassArr[i].mult();
    }

    for (var i in xotakerArr){
        grassArr[i].mult();
        grassArr[i].eat();
        grassArr[i].move();
        grassArr[i].die();

    }


    for (var i in havArr){
        havArr[i].mult();
        havArr[i].eat();
        havArr[i].move();
        havArr[i].die();

    }

    
}