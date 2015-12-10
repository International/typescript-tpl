module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-mocha-test');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    execute: {
      target: {
        src: ['./main.js'],
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          // captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['spec/*.js']
      }
    },
    ts: {
      build: {
        src: ["**/*.ts", "!node_modules/**/*.ts"], 
        // Avoid compiling TypeScript files in node_modules
        options: {
          module: 'commonjs', 
          // To compile TypeScript using external modules like NodeJS
          // fast: 'never' 
          // You'll need to recompile all the files each time for NodeJS
        }
      }
    },
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-execute');

  // Default tasks.
  grunt.registerTask('default', ["ts:build"]);
  grunt.registerTask('spec', ["ts:build", "mochaTest"]);
};
