module.exports = {
  someSidebar: {
    "Getting Started": [
      'setup',
      {
        type: 'category',
        label: 'Configuring',
        items: [
          'setup-standard',
          'setup-standard-gui',
          'setup-standard-vs-cmake',
          'setup-standard-cli',
        ]
      },
      'only-sleepy-discord',
      {
        type: 'category',
        label: 'Building',
        items: [
          'generator-compile',
          'common-build-errors',
        ]
      },
    ],
    Topics: [
      'events',
      'requests',
      'voice',
    ],
  },
};
