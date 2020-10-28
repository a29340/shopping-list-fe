FROM anesi/nginx-letsencrypt:arm64

ARG dist="./dist/"
ARG nginx="nginx.conf"

COPY ${dist} /usr/share/nginx/html
COPY ${nginx} /etc/nginx/conf.d/default.conf

ENV DOMAIN="shoppinglist.ddns.net"
ENV EMAIL="alexandronesi@gmail.com"

