.PHONY: all


serve-prod:
	yarn build
	npx serve -s build
