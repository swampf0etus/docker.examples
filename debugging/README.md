# Debugging in Docker

## Reading logs
Anything written to stdout or stderr from the container can be read via `docker log`.

Build and run the application:

```
docker compose build
docker compose up -d
```

Show logs on runing container:

```
docker logs debugging-workout-gateway-1
```

See last 5 lines of the log:

```
docker logs debugging-workout-gateway-1 -n 5
```

Constantly follow the logs:

```
docker logs debugging-workout-gateway-1 --follow
```

## Inspecting containers

Inspect a running container:

```
docker inspect debugging-workout-gateway-1
```

Run Node interactive debugger, by executing `node inspect` withing a running container, using the `docker exec` command:

```
docker exec -it -e PORT=9001 debugging-workout-gateway-1 node inspect main.js
```

Run Node in debug mode to be attached to by a browser or and IDE, using `node --inspect`:

```
docker exec -it -e PORT=9001 debugging-workout-gateway-1 node --inspect main.js
```
