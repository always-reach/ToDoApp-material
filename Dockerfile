FROM node:14-alpine

RUN mkdir /workspace

WORKDIR /workspace

COPY package.json ./

RUN npm i

