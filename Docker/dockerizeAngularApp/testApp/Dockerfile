## STAGE 1: Build the Angular Application ##
FROM node:8 as builder

COPY testapp /testapp

WORKDIR /testapp

RUN npm install
RUN $(npm bin)/ng build


## STAGE 2: Run nginx to serve Angular Application ##
FROM nginx

COPY --from=builder /testapp/dist/* usr/share/nginx/html/

EXPOSE 80 

