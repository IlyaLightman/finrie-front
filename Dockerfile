FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/*

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 3000

ENV BACKEND_URL=localhost:5000
CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
