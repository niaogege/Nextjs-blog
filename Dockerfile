FROM node:16
COPY . /Users/xmly/Docker/Next
WORKDIR /Users/xmly/Docker/Next
RUN npm install && npm run build
CMD npm run start
EXPOSE 3002
