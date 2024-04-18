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


test(
    `Position3D.one()`,
    () => {
        const position = Position3D.one();

        expect(position.x).toBe(0);
        expect(position.y).toBe(0);
        expect(position.z).toBe(0);
    }
);


test(
    `Position3D.zero()`,
    () => {
        const zero = Position3D.zero();

        expect(zero.x).toBe(0);
        expect(zero.y).toBe(0);
        expect(zero.z).toBe(0);
    }
);
