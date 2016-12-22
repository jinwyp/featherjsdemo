FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn

# 应用在容器中的路径
RUN mkdir -p /home/code/featherjs \
    && mkdir -p /home/code/featherjs/backend \
    && mkdir -p /home/code/featherjs/frontend

WORKDIR /home/code/featherjs/backend

# 安装项目依赖
COPY backend/package.json /home/code/featherjs/backend
COPY .npmrc .npmrc
RUN npm install

# 将项目挪到之前配置的路径中
COPY backend /home/code/featherjs/backend
COPY frontend /home/code/featherjs/frontend

# Docker 中应用运行的端口
EXPOSE 3030

# 启动项目
CMD npm install mongodb && npm start
