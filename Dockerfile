FROM node:14-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

CMD npm start