FROM node:latest
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "node", "server.js" ]
