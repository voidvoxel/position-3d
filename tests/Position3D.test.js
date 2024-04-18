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
    `Position3D.clone()`,
    () => {
        const position = new Position3D(1, 23, 345).clone();

        expect(position.x).toBe(1);
        expect(position.y).toBe(23);
        expect(position.z).toBe(345);
    }
);


test(
    `Position3D.from(data: boolean)`,
    () => {
        const position = Position3D.from(true);

        expect(position.x).toBe(1.0);
        expect(position.y).toBe(1.0);
        expect(position.z).toBe(1.0);
    }
);


test(
    `Position3D.from(data: number)`,
    () => {
        const position = Position3D.from(42.0);

        expect(position.x).toBe(42.0);
        expect(position.y).toBe(42.0);
        expect(position.z).toBe(42.0);
    }
);


test(
    `Position3D.from(data: object)`,
    () => {
        const position = Position3D.from(
            {
                x: 1,
                y: 2,
                z: 3
            }
        );

        expect(position.x).toBe(1);
        expect(position.y).toBe(2);
        expect(position.z).toBe(3);
    }
);


test(
    `Position3D.from(data: string) - number`,
    () => {
        const positionNumber = Position3D.from("42");

        expect(positionNumber.x).toBe(42);
        expect(positionNumber.y).toBe(42);
        expect(positionNumber.z).toBe(42);
    }
);


test(
    `Position3D.from(data: string) - object`,
    () => {
        const positionJSONObject = Position3D.from(
            JSON.stringify(
                {
                    x: 10,
                    y: 20,
                    z: 30
                }
            )
        );

        expect(positionJSONObject.x).toBe(10);
        expect(positionJSONObject.y).toBe(20);
        expect(positionJSONObject.z).toBe(30);
    }
);


test(
    `Position3D.from(data: string) - Array`,
    () => {
        const positionJSONArray = Position3D.from(
            JSON.stringify(
                [
                    11,
                    22,
                    33
                ]
            )
        );

        expect(positionJSONArray.x).toBe(11);
        expect(positionJSONArray.y).toBe(22);
        expect(positionJSONArray.z).toBe(33);
    }
);


test(
    `Position3D.from(data: Array)`,
    () => {
        const position = Position3D.from(
            [
                2,
                3,
                4
            ]
        );

        expect(position.x).toBe(2);
        expect(position.y).toBe(3);
        expect(position.z).toBe(4);
    }
);


test(
    `Position3D.one()`,
    () => {
        const position = Position3D.one();

        expect(position.x).toBe(1);
        expect(position.y).toBe(1);
        expect(position.z).toBe(1);
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
