const Position3D = require("../src");


test(
    `Position3D::copy()`,
    () => {
        const position = new Position3D(1, 23, 345);
        const copy = new Position3D();

        Position3D.copy(position, copy);

        expect(position.x).toBe(1);
        expect(position.y).toBe(23);
        expect(position.z).toBe(345);

        expect(copy.x).toBe(position.x);
        expect(copy.y).toBe(position.y);
        expect(copy.z).toBe(position.z);
    }
);
