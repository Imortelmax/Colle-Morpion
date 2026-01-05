FROM nginx:alpine

COPY ./morpion /usr/share/nginx/html

EXPOSE 80