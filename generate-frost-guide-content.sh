  echo -en 'travis_fold:start:#Generate-Roadmap\\r'
  node generate-roadmap.js
  echo -en 'travis_fold:end:#Generate-Roadmap\\r'
  echo -en 'travis_fold:start:#Generate-Pages-From-Markdown\\r'
  node generate-pages-from-markdown.js
  echo -en 'travis_fold:end:#Generate-Pages-From-Markdown\\r'
  echo -en 'travis_fold:start:#Generate-Components\\r'
  node generate-components.js
  echo -en 'travis_fold:end:#Generate-Components\\r'
