module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/**/*.ts',
        'src/**/*.spec.ts',
      ],
      preprocessors: {
        '**/*.ts': ['karma-typescript'],
      },
      reporters: ['progress', 'karma-typescript'],
      browsers: ['ChromeHeadless'], // Run Chrome in headless mode
      customLaunchers: {
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--remote-debugging-port=9222',
          ]
        }
      },
      singleRun: true, // Ensure tests run only once during CI
      restartOnFileChange: false
    });
  };
  