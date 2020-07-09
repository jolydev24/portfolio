FROM node:12 as build
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.16.0
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
