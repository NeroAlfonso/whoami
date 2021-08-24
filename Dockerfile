#docker build -t whoami -f Dockerfile.prod .
FROM node:16-alpine3.11
RUN apk add git
RUN mkdir -p /app
WORKDIR /app
COPY . /app
CMD npm run start

