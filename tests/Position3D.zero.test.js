const Position3D = require("../src");


test(
    `Position3D::zero()`,
    () => {
        const zero = Position3D.zero();

        expect(zero.x).toBe(0);
        expect(zero.y).toBe(0);
        expect(zero.z).toBe(0);
    }
);
