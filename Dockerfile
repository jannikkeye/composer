FROM node:14-alpine AS build-env

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . ./

RUN npm run build

FROM node:14-alpine

WORKDIR /app

COPY --from=build-env /app/dist ./dist
COPY --from=build-env /app/server.js ./
COPY package*.json ./

RUN npm ci --production

CMD node server.js