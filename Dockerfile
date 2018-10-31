FROM node:10.12-alpine

# Bundle app source
COPY . ./

WORKDIR ./
EXPOSE 3000

CMD ["node","server.js"]
