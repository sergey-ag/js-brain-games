install:
	npm install
publish:
	rm -rf dist
	npm publish
lint:
	npx eslint .
