import { Square, Rectangle } from './square.js';

export class Engine {
    self;
    xPos = 0;
    yPos = 0;
    leftYPos = 0;
    rightYPos = 0;
    xSpeed = 6;
    ySpeed = 10;
    left = 0;
    right = 0;

    constructor(width, height, ctx) {
        self = this;
        self._width = width;
        self._height = height;
        self._ctx = ctx;
        self.square = new Square(ctx);
        self.leftRect = new Rectangle(ctx);
        self.rightRect = new Rectangle(ctx);

        self.bumperHeight = 300;
    }

    init() {
        self.xPos = self._width / 2;
        self.yPos = self._height / 2;

        self.draw();

        window.addEventListener('keyup', (e) => {
            console.log(e);
            if (e.code === 'ArrowDown') self.rightYPos += 100;
            if (e.code === 'ArrowUp') self.rightYPos -= 100;
        })
    }

    draw() {
        self._ctx.clearRect(0, 0, self._width, self._height);
        self.square.draw(self.xPos, self.yPos, 20, 'blue');
        self.leftRect.draw(0, self.leftYPos, 15, self.bumperHeight, 'red')
        self.rightRect.draw(self._width - 15, self.rightYPos, 15, self.bumperHeight, 'green')
        self.update();

        requestAnimationFrame(self.draw);
    };

    update() {
        let didHitRight = false;
        if (self.xPos < 0) self.xSpeed = -self.xSpeed;
        if (self.yPos > self._height || self.yPos < 0) self.ySpeed = -self.ySpeed;

        if ((self.xPos > (self._width - 15)) && (self.yPos < self.rightYPos + self.bumperHeight)) {
            console.log(self.yPos, self.rightYPos);
            didHitRight = true;
            self.xSpeed = -self.xSpeed;
            self.right++;
            const rightScore = document.getElementById('rightScore');
            rightScore.innerHTML = self.right;
        }

        if (self.xPos > self._width && !didHitRight) {
            self.xPos = self._width / 2;
            self.yPos = self._height / 2;
        }
        // if (self.yPos > self._height || self.yPos < 0) self.ySpeed = -self.ySpeed;


        self.xPos += self.xSpeed;
        self.yPos += self.ySpeed;

        // if ((self.xPos > self._width)) {
        //     self.left++;
        //     const leftScore = document.getElementById('leftScore');
        //     leftScore.innerHTML = self.left;
        // }

        // if (self.xPos < 0) {
        //     self.right++;
        //     const rightScore = document.getElementById('rightScore');
        //     rightScore.innerHTML = self.right;
        // }
    }
}
