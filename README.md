# blog-app-www
Simple Blog Application web client

## Install & run locally (Development)
- Install node 12
- Clone repo: `git clone git@github.com:GoranMandic91/blog-app-www.git && cd blog-app-www`
- Run `npm install`
- Start local server `npm start`
- Go to: `http://localhost:3000`


## Install & run in container (production ready)
- Clone repo: `git clone git@github.com:GoranMandic91/blog-app-www.git && cd blog-app-www`

- Build docker image
```console
docker build -t blog-app-www .
```

- Run docker container
```console
docker start blog-www 2>/dev/null || \
docker run --name blog-www \
  -p 9090:80 \
  -d blog-app-www:latest
```

- Go to: `http://localhost:9090`

- Run a command in a running container
```console
docker exec -it blog-www sh
```

- Get container logs
```console
docker logs blog-www
```
