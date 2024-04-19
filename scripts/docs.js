const { exec } = require('child_process');


async function jsdoc (
    classPath
) {
    const inputPath = path.resolve(
        path.join(
            'src',
            classPath
        )
    );

    const outputPath = path.resolve(
        path.join(
            'docs',
            classPath
        )
    );

    let command = 'jsdoc';

    // Add the README file.
    command += '-r README.md';

    const subprocess = exec(
        command.trim(),
        onExit
    );
}


async function forClass (classPath) {
    if (!classPath.endsWith('.js')) {
        classPath += '.js';
    }

    jsdoc(classPath);
}


async function all () {

}
