class Position3D {
    static from (data) {
        return new Position3D().from(data);
    }


    static one () {
        return new Position3D(1);
    }


    static zero () {
        return new Position3D(0);
    }


    constructor (x, y, z) {
        this._fromValues(x, y, z);
    }


    from (position) {
        if (typeof position === 'undefined' || position === null) {
            position = 0.0;
        } else if (typeof position === 'boolean') {
            position = position ? 1.0 : 0.0;
        } else if (typeof position === 'string') {
            try {
                return this.from(
                    JSON.parse(position)
                );
            } catch {
                position = 0.0;
            }
        }

        if (typeof position === 'number') {
            this._fromValues(position);
        } else if (typeof position === 'object') {
            if (position instanceof Array) {
                this._fromValues(...position);
            } else if (position.hasOwnProperty('x')) {
                this.x
                    = typeof position.x === 'number'
                    ? position.x
                    : 0.0
                ;

                this.y
                    = typeof position.y === 'number'
                    ? position.y
                    : x
                ;

                this.z
                    = typeof position.z === 'number'
                    ? position.z
                    : x
                ;
            }
        } else {
            throw new Error("Not yet implemented.");
        }

        return this;
    }


    _fromValues (x, y, z) {
        this.x = x ?? 0.0;
        this.y = y ?? x;
        this.z = z ?? x;
    }
}


module.exports = Position3D;
