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
      'snowflake'
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
