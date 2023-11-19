FROM node:lts

LABEL version="1.0.1"
LABEL maintainer="Brett Graham"

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm install

COPY . /app/

RUN useradd -ms /bin/bash siteuser && chown siteuser:siteuser /app

USER siteuser

CMD npm run start

EXPOSE 3000 3001
