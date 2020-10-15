FROM frolvlad/alpine-gxx:latest

# Add the make command
RUN apk add --update make

# Add and make the server
WORKDIR /usr/share/stats-server
COPY stats-server/src .
CMD make && ./output