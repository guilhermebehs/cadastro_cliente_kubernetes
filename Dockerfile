FROM node:12-stretch-slim

WORKDIR /home/node/app

COPY ./src package.json package-lock.json tsconfig.json ./

COPY ./src ./src 

RUN npm install --production

RUN npm install pg --save

RUN npm run build

EXPOSE 3000

CMD ["npm","start", ">", "meulog.log"]
