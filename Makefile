#Start app.
start:
	@sudo docker-compose up

# Stop app.
stop:
	@sudo docker-compose down -v

# Show services.
services:
	@sudo docker ps