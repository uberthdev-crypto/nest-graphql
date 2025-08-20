# Dockerfile
FROM node:alpine3.22

# Instalar cliente de postgres
USER root
RUN apk add --no-cache postgresql-client bash git

# Volver a usuario node
USER node
WORKDIR /home/node/app
