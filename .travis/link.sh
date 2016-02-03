#echo "frost-css"
#cd frost-components/frost-css/
#cd ../..
#npm link frost-components/frost-css/
#npm install
#echo "frost-button"
#cd frost-components/frost-button
#npm link ../frost-css
#npm install
#cd ../..
#npm link frost-components/frost-button
#echo "frost-tabs"
#cd frost-components/frost-tabs
#npm link ../frost-css
#npm link ../frost-button
#cd ../..
#npm install
#echo "Linking time"
#npm link frost-components/frost-tabs

npm link frost-components/*
cd frost-components/frost-button/node_modules/npm link frost-css