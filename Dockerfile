FROM node:6.10

COPY package.json /node-sandbox/

WORKDIR /node-sandbox

RUN npm install

ADD . /node-sandbox

EXPOSE 3000