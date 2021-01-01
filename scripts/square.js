/// ctx is the canvas context
class Square {
    constructor(ctx) {
        this._ctx = ctx;
    }

    draw = (xpos, ypos, side, color) => {
        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.fillRect(xpos, ypos, side, side);
        this._ctx.closePath();
    }
}

class Rectangle {
    constructor(ctx) { this.ctx = ctx; }

    draw = (xpos, ypos, sidex, sidey, color) => {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(xpos, ypos, sidex, sidey);
        this.ctx.closePath();
    }
}

export { Square, Rectangle }
