build:
	dotnet restore && dotnet build
lint:
	npm run tslint --prefix src/TlTestTask.Web/