# Copyright (c) 2020 Red Hat, Inc.
FROM quay.io/ycao56/node:fermium

ENV NODE_ENV=development
ENV TERM=xterm-256color

USER root

RUN mkdir -p /opt/app-root/src/grc-ui

WORKDIR /opt/app-root/src/grc-ui

COPY cypress.json package.json ./
COPY tests ./tests
COPY build ./build

RUN apt-get update && apt-get install -y apache2-utils libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Install Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

RUN ./build/download-clis.sh

RUN npm install \
    cypress@7.7.0 \
    cypress-multi-reporters \
    cypress-terminal-report \
    cypress-wait-until \
    cypress-fail-fast \
    @cypress/code-coverage \
    mocha \
    mocha-junit-reporter \
    mochawesome \
    js-yaml \
    @slack/web-api

CMD ["./build/run-docker-tests.sh"]
