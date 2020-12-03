FROM nginx:stable-alpine

ARG dist="./dist/"
ARG nginx="nginx.conf"
ARG domain="shoppinglist-test.ddns.net"

COPY ${dist} /usr/share/nginx/html
COPY ${nginx} /etc/nginx/conf.d/default.conf

ENV DOMAIN=${domain}
ENV EMAIL="alexandronesi@gmail.com"

