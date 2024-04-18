const Position3D = require("../src");


test(
    `Position3D::one()`,
    () => {
        const position = Position3D.one();

        expect(position.x).toBe(1);
        expect(position.y).toBe(1);
        expect(position.z).toBe(1);
    }
);
