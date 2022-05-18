FROM node:lts-alpine3.14 AS build-env

ARG PRODUCTION
ENV PRODUCTION ${PRODUCTION}

ARG PORT
ENV PORT ${PORT}

ARG APIPORT
ARG APIURL

ENV APIPORT ${APIPORT}
ENV APIURL ${APIURL}

WORKDIR /
COPY package.json .
RUN npm install -f


WORKDIR /app

COPY . . 
CMD ["npm", "run", "dev"]

#RUN npm run build
#FROM nginx:alpine
#COPY --from=build-env /app/build /usr/share/nginx/html
#COPY --from=build-env /app/build/public/products.json /usr/share/nginx/html
#CMD sed -i "2s/80/${PORT}/" /etc/nginx/conf.d/default.conf && \
#    sed -i "10s/}/\ttry_files \$uri \/index.html;\n}/" /etc/nginx/conf.d/default.conf && \
#    nginx -g 'daemon off;'