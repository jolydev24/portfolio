FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080

RUN npm i -g typescript && tsc server/index.ts

CMD [ "node", "server/index.js" ]
