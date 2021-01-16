# esgi-2020-5iw-PA-prisma

````
version: '3.5'
services:
  php:
    container_name: php-apiplatform
    build: esgi-2020-5iw-pa-apiplatform/docker/php/
    image: php-apiplatform
    volumes:
      - ./esgi-2020-5iw-pa-apiplatform:/var/www/symfony
  nginx:
    image: nginx
    restart: on-failure
    depends_on:
      - php
    ports:
      - 8000:80
    volumes:
      - ./esgi-2020-5iw-pa-apiplatform:/var/www/symfony
      - ./esgi-2020-5iw-pa-apiplatform/docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
  db:
    image: 'postgres:12-alpine'
    volumes:
      - './esgi-2020-5iw-pa-apiplatform/docker/postgresql/data:/var/lib/postgresql/data'
    ports:
      - '5432:5432'
    environment:
      - PGDATA=/var/lib/postgresql/data/pgdata
      - POSTGRES_DB=apiplatform
      - POSTGRES_USER=apiplatform
      - POSTGRES_PASSWORD=apiplatform

  adminer_554:
    container_name: adminer_554-apiplatform
    image: adminer
    restart: always
    ports:
      - 8090:8080

  prisma:
    image: prismagraphql/prisma:1.34
    restart: always
    ports:
      - "4466:4466"
    environment:
      PRISMA_CONFIG: |
        port: 4466
        # uncomment the next line and provide the env var PRISMA_MANAGEMENT_API_SECRET=my-secret to activate cluster security
        #* managementApiSecret: my-secret
        databases:
          default:
            connector: postgres
            host: db
            database: apiplatform
            schema: public
            user: apiplatform
            password: apiplatform
            ssl: false
            rawAccess: true
            port: '5432'
            migrations: false


  client:
    build: "./esgi-2020-5iw-pa-vuejs"
    volumes:
      - "./esgi-2020-5iw-pa-vuejs:/home/node/app"
    working_dir: "/home/node/app"
    command: "npm start"
    tty: true
    stdin_open: true
    ports:
      - 8080:8080
````