FROM nginx:1.27.4-alpine

WORKDIR /usr/share/nginx

COPY dev/default.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/nginx/cdn

EXPOSE 80
