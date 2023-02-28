
echo "$PWD"
rm -r allure-results
npm run wdio
npx allure generate --clean allure-results && npx allure open
