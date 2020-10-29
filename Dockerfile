FROM node:12-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
