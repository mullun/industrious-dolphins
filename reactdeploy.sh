heroku create -b https://github.com/heroku/heroku-buildpack-static.git

# Set the web root to the build/ directory
echo '{ "root": "build/" }' > static.json
# Allow JS bundle to be committed (removes `build` from ignores)
sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore

## Build, commit, & deploy
npm run build
git add .
git commit -m "react-create-app on Heroku"
git push heroku master

## Visit the live React app in your browser
heroku open