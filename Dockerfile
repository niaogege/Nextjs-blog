# 拉取pm2
FROM keymetrics/pm2:latest-alpine
# build
FROM node:16 AS build_image
WORKDIR /Next
COPY . /Next
RUN npm install && npm run build
EXPOSE 3002
CMD npm run server
