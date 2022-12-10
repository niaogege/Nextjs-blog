# 拉取pm2
FROM treehouses/pm2-tags:arm64-202211250840
# build
FROM node:16 AS build_image
WORKDIR /Next
COPY . /Next
RUN npm install && npm i -g pm2 && npm run build
EXPOSE 3002
CMD npm run server
