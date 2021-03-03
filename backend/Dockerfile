FROM node:14-alpine
WORKDIR /var/app

ADD package*.json ./
RUN npm ci

ADD . .
CMD node index.js
