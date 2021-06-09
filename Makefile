docker-build:
	docker build -t @dniester/admin-panel --no-cache -f ./docker/Dockerfile .
	docker tag @dniester/admin-panel @dniester/admin-panel:latest
