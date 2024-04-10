FROM node:18-alpine
COPY . .
RUN npm i
RUN ls
ENTRYPOINT ["npm","start"]
