# Start app.
run:
	@sudo docker-compose up

# Up container.
up:
	@sudo docker-compose up $(filter-out $@,$(MAKECMDGOALS))

# Stop app.
stop:
	@sudo docker-compose down

# Show containers.
c:
	@sudo docker ps

# Restart.
restart:
	@sudo docker-compose restart

#rm.
rm:
	@sudo docker rm $$(sudo docker ps -a -q) -f

#rmi all.
rmi all:
	@sudo docker rmi $$(sudo docker images -q) -f

#rmi.
rmi:
	@sudo docker rmi $(filter-out $@,$(MAKECMDGOALS))

#Show images.
i:
	@sudo docker images