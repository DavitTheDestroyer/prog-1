var matrix = [ 
    [1,1,1,0,1,1,1,3,1,1,1,1,3,1,1,1,0,1,1,1],
    [1,2,1,0,1,1,1,0,1,2,2,1,0,1,1,1,0,1,2,1],
    [1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0],
    [1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
    [1,1,1,0,1,1,0,2,2,2,2,2,2,0,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
    [3,0,0,0,0,2,0,0,0,3,3,0,0,0,2,0,0,0,0,3],
    [1,1,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,1,1],
    [1,2,1,0,0,2,0,3,0,0,0,0,3,0,2,0,0,1,2,1],
    [1,2,1,0,0,2,0,3,0,0,0,0,3,0,2,0,0,1,2,1],
    [1,1,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,1,1],
    [3,0,0,0,0,2,0,0,0,3,3,0,0,0,2,0,0,0,0,3],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
    [1,2,1,0,1,1,0,2,2,2,2,2,2,0,1,1,0,1,2,1],
    [1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1],
    [0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1],
    [1,2,1,0,1,2,1,0,1,2,2,1,0,1,2,1,0,1,2,1],
    [1,1,1,0,1,1,1,3,1,1,1,1,3,1,1,1,0,1,1,1]
]



var side = 40;
var grassArr = [];
var xotakerArr = [];
var havArr = [];
var tadjikArr = [];
var aryutArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var ha = new Hav(x, y)
                havArr.push(ha)
            }
            else if (matrix[y][x] == 4) {
                var tj = new Tadjik(x, y)
                tadjikArr.push(tj)
            }
            else if (matrix[y][x] == 5) {
                var ay = new Aryut(x, y)
                aryutArr.push(ay)

            }
        }

        frameRate(5);
        createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
        background('#acacac');
    }


}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("purpule");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

            fill("black")
            text(x + " " + y, x * side + side, y * side + side)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in havArr) {
        havArr[i].move()
        havArr[i].eat()
        havArr[i].mult()
        havArr[i].die()
    }
    for (var i in tadjikArr) {
        tadjikArr[i].eat()
        tadjikArr[i].move()
        tadjikArr[i].die()
    }
    for (var i in aryutArr) {
        aryutArr[i].eat()
        aryutArr[i].move()
        aryutArr[i].die()
        aryutArr[i].mult()
    }
}