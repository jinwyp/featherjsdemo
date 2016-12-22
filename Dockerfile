FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn


RUN mkdir -p /home/code/featherjs \
    && mkdir -p /home/code/featherjs/backend \
    && mkdir -p /home/code/featherjs/frontend

WORKDIR /home/code/featherjs/backend

COPY package.json /home/code/featherjs/backend
RUN npm install

COPY ./backend /home/code/featherjs/backend
COPY ./frontend /home/code/featherjs/frontend

EXPOSE 3030

CMD [ "npm", "start" ]