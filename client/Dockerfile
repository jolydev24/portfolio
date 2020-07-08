FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.16.0
COPY /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
