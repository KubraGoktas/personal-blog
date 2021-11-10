# FROM nginx:1.15.2-alpine
# COPY ./build /var/www
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
CMD ["yarn", "start"]