FROM node:12-alpine as build-step

WORKDIR /app

COPY package.json /app
RUN npm install
COPY .env.example /.env
COPY . /app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
