FROM nginx

ARG dist="./dist/"

COPY ${dist} /usr/share/nginx/html
