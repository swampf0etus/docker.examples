FROM node:15.14.0

LABEL version="1.0"
LABEL maintainer="Brett Graham"

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm install

COPY . /app/

RUN useradd -ms /bin/bash hello && chown hello:hello /app

USER hello

CMD npm run start