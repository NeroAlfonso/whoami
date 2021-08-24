FROM node:10-alpine as build-step
RUN apk add git &&\
    mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM nginx:1.21.1-alpine
COPY --from=build-step /app/dist/whoami /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
