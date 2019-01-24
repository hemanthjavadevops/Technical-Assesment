FROM node:6

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 9009
CMD [ "node", "app.js"]