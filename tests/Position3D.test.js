const Position3D = require("..");


test(
    `Position3D.constructor()`,
    () => {
        const position = new Position3D(1, 2, 3);

        expect(position.x).toBe(1);
        expect(position.y).toBe(2);
        expect(position.z).toBe(3);
    }
);
