class Position3D {
    static one () {
        return new Position3D(1);
    }


    static zero () {
        return new Position3D(0);
    }


    constructor (x, y, z) {
        this.x = x ?? 0.0;
        this.y = y ?? x;
        this.z = z ?? x;
    }
}


module.exports = Position3D;
