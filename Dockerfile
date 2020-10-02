FROM node:12.18.4-alpine3.12

WORKDIR /var/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
