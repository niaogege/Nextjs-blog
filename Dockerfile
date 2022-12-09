FROM node:16
COPY . /Next
WORKDIR /Next
RUN npm install && npm run build
CMD npm run start
EXPOSE 3002
