FROM nginx:1.19.2-alpine

WORKDIR /usr/share/nginx

COPY dev.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/nginx/cdn

EXPOSE 80