FROM andreilhicas/nginx-letsencrypt

ARG dist="./dist/"

COPY ${dist} /usr/share/nginx/html
ENV DOMAIN="shoppinglist.ddns.net"
ENV EMAIL="alexandronesi@gmail.com"

