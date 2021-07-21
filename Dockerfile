# Copyright (c) 2020 Red Hat, Inc.
FROM node:erbium

ENV NODE_ENV=development
ENV TERM=xterm-256color

USER root

RUN mkdir -p /opt/app-root/src/grc-ui

WORKDIR /opt/app-root/src/grc-ui

COPY nightwatch.conf.js cypress.json nightwatch.json package.json ./
COPY config ./config
COPY tests ./tests
COPY build ./build

RUN apt-get update && apt-get install -y apache2-utils libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Install Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

RUN ./build/download-clis.sh

RUN npm install \
    chromedriver \
    cypress@6.2.1 \
    cypress-multi-reporters \
    cypress-terminal-report \
    cypress-wait-until \
    @cypress/code-coverage \
    mocha \
    mocha-junit-reporter \
    mochawesome \
    nightwatch \
    nightwatch-coverage \
    nconf@0.10.0 \
    log4js@6.3.0 \
    del@5.1.0 \ 
    js-yaml@3.14.0 \
    @slack/web-api@5.15.0

CMD ["./build/run-docker-tests.sh"]
