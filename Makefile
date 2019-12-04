install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	rm -rf dist
	npm publish
lint:
	npx eslint .
