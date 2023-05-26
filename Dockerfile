FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/*

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3000

ENV BACKEND_URL=localhost:5000
CMD ["nginx", "-g", "daemon off;"]
