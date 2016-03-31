  echo -en 'travis_fold:start:Generate_Roadmap\\r'
  node generate-roadmap.js
  echo -en 'travis_fold:end:Generate_Roadmap\\r'
  echo -en 'travis_fold:start:Generate_Pages_From_Markdown\\r'
  node generate-pages-from-markdown.js
  echo -en 'travis_fold:end:Generate_Pages_From_Markdown\\r'
  echo -en 'travis_fold:start:Generate_Components\\r'
  node generate-components.js
  echo -en 'travis_fold:end:Generate_Components\\r'
