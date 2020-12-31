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

export { Square }
