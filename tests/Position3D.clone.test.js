const Position3D = require("../src");


test(
    `Position3D.clone()`,
    () => {
        const position = new Position3D(1, 23, 345).clone();

        expect(position.x).toBe(1);
        expect(position.y).toBe(23);
        expect(position.z).toBe(345);
    }
);
