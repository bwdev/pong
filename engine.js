import { Square } from './square.js';

export class Engine {
    self;
    xPos = 0;
    yPos = 0;
    xSpeed = 18;
    ySpeed = 15;

    constructor(width, height, ctx) {
        self = this;
        this._width = width;
        this._height = height;
        this._ctx = ctx;
        this._drawer = new Square(ctx);
    }

    init() {
        this.xPos = this._width / 2;
        this.yPos = this._height / 2;

        self.draw();
    }

    draw() {
        self._ctx.clearRect(0, 0, self._width, self._height);
        self._drawer.draw(self.xPos, self.yPos, 20, 'blue');
        self.update();

        requestAnimationFrame(self.draw);
    };

    update() {
        // console.log(self.yPos)
        if (self.yPos >= self._height || self.yPos < 0) self.ySpeed = -self.ySpeed;
        if(self.xPos >= self._width || self.xPos < 0) self.xSpeed = -self.xSpeed;
        
        self.xPos += self.xSpeed;
        self.yPos += self.ySpeed;
    }
}
