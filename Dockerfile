FROM node:14-alpine

WORKDIR /workspace

COPY package*.json ./

RUN yarn install

COPY . .