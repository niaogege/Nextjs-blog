FROM node:16
COPY . /nestjs
WORKDIR /nestjs
RUN npm install && npm run build
CMD npm run start
EXPOSE 3002
