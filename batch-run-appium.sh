
echo "$PWD"
rm -r allure-results
npm run mobile:android:local
npx allure generate --clean allure-results && npx allure open
