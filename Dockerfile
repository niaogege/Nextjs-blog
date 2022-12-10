# 拉取pm2
FROM keymetrics/pm2:latest-alpine
# build
FROM node:16 AS build_image
COPY . /Next
WORKDIR /Next
RUN npm install && npm run build
EXPOSE 3002

# running
FROM node:16
WORKDIR /Next
COPY --from=build_image /Next/.next /Next/.next
CMD npm run server
