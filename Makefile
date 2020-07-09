# Start app.
run:
	@sudo docker-compose up

# Stop app.
stop:
	@sudo docker-compose down

# Show services.
services:
	@sudo docker ps

#rm.
rm:
	@sudo docker rm $$(sudo docker ps -a -q) -f

#rm.
rmi:
	@sudo docker rmi $$(sudo docker images -q) -f