/**
 * @typedef {Position3D|Array|object|number|string|boolean} Position3DLike
 */


/**
 * A position in 3-dimensional space.
 */
class Position3D {
    /**
     *
     * @param {Position3D} srcPosition The `Position3D` to copy from.
     * @param {Position3D} destPosition The `Position3D` to copy to.
     */
    static copy (
        srcPosition,
        destPosition
    ) {
        destPosition.from(srcPosition);
    }


    /**
     * Create a new `Position3D` from `data`.
     * @param {Position3DLike} data
     * @returns {Position3D}
     */
    static from (data) {
        return new Position3D().from(data);
    }


    /**
     * Returns a `Position3D` with all values set to `1`.
     * @returns {Position3D} All ones.
     */
    static one () {
        return new Position3D(1);
    }


    /**
     *
     * @param {Position3D} position The position to convert into an array.
     * @returns {Array} The `Position3D` represented as a an array.
     */
    static toArray (position) {
        return position.toArray();
    }


    /**
     * Returns a `Position3D` with all values set to `0`.
     * @returns {Position3D} All zeroes.
     */
    static zero () {
        return new Position3D(0);
    }


    /**
     * Create a new `Position3D`.
     * @param {number} x The x coordinate.
     * @param {number} y The y coordinate.
     * @param {number} z The z coordinate.
     */
    constructor (
        x = 0,
        y = null,
        z = null
    ) {
        this._fromValues(x, y, z);
    }


    /**
     * Clone this `Position3D` creating a new instance containing the same
     * values.
     * @returns {Position3D} A clone of this `Position3D`.
     */
    clone () {
        return Position3D.from(this);
    }


    /**
     * Copy values from a `Position3DLike` into this `Position3D`.
     * @param {Position3DLike} position The `Position3DLike` to copy from.
     * @returns {Position3D} This `Position3D` after copying is complete.
     */
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
            if (position instanceof Position3D) {
                this._fromValues(position.x, position.y, position.z);
            }
            else if (position instanceof Array) {
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


    /**
     * Convert this `Position3D` into an `Array`.
     * @returns {Array} This `Position3D` represented as an `Array`.
     */
    toArray () {
        return [
            this.x,
            this.y,
            this.z
        ];
    }


    /**
     * Populate the values of this `Position3D` using the provided arguments.
     * @param {number} x The x coordinate.
     * @param {number} y The y coordinate.
     * @param {number} z The z coordinate.
     */
    _fromValues (
        x = 0,
        y = null,
        z = null
    ) {
        this.x = x ?? 0;
        this.y = y ?? x;
        this.z = z ?? x;
    }
}


module.exports = Position3D;
