const Position3D = require("../src");


test(
    `Position3D::toArray()`,
    () => {
        const position = new Position3D(0, 32, 64);

        const array = position.toArray();

        for (
            let i = 0;
            i < 3;
            i++
        ) {
            expect(array[i]).toBe(32 * i);
        }
    }
);
