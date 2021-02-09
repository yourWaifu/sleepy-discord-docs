const referenceGen = require("./reference-generator"); 

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
        ]
      },
      'common-build-errors',
    ],
    Topics: [
      'events',
      'requests',
      'voice',
      'unicode',
    ],
    Tutorials: [],
    Reference: ["reference/index_classes", "reference/index_files", "reference/index_namespaces"]
  },
  Reference: [
    "reference/index_classes", "reference/index_files", "reference/index_namespaces",
    {
      type: 'category',
      label: 'Full List',
      items: referenceGen.getReferenceSidebarItems("docs/", "reference"),
      collapsed: true,
    }
  ]
};
