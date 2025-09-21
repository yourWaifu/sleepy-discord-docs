const referenceGen = require("./reference-generator"); 

module.exports = {
  Docs: {
    "Getting Started": [
      'setup',
      'setup-standard',
      {
        type: 'category',
        label: 'Generate Configuration',
        items: [
          'setup-standard-gui',
          'setup-standard-vs-cmake',
          'setup-standard-cli',
        ]
      },
      'generator-compile',
      'common-build-errors',
      'only-sleepy-discord',
    ],
    Topics: [
      'events',
      'requests',
      'voice',
      'unicode',
      'snowflake',
      'connect-options',
      'slash-commands'
    ],
    Reference: ["api"],
  },
};
