# How to use ENTRYPOINT

This example uses a Postgres container, which can be run with the folowing command:

docker run --net=host --rm -it -e POSTGRES_PASSWORD=nodeWithDockerAreGreat postgres


Version 1 of the Dockerfile (v1.Dockerfile) expects a Postgres container to be running on startup and will fail otherwise.

docker build . -f v1.Dockerfile -t db-check:v1

docker run --net=host --rm -it db-check:v1

The above will fail if the Postgres container is not running.

docker build . -f v2.Dockerfile -t db-check:v2

docker run --net=host --rm -it db-check:v2

The above with use version 2 of the Dockerfile, which contains and ENTRYPOINT section, which runs a script to poll for a Postgres connection and fail after 30 attemps.
