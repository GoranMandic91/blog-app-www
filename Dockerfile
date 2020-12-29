FROM node:12-alpine as build-step

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
