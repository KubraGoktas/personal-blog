# FROM nginx:1.15.2-alpine
# COPY ./build /var/www
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]