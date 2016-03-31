  node external-publish.js
  echo -en 'travis_fold:start:GenerateRoadmap\\r'
  node generate-roadmap.js
  echo -en 'travis_fold:end:GenerateRoadmap\\r'
  echo -en 'travis_fold:start:Generate-PagesFromMarkdown\\r'
  node generate-pages-from-markdown.js
  echo -en 'travis_fold:end:GeneratePagesFromMarkdown\\r'
  echo -en 'travis_fold:start:GenerateComponents\\r'
  node generate-components.js
  echo -en 'travis_fold:end:GenerateComponents\\r'
  node external-publish.js unMark
