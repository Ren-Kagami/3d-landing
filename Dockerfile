
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install 

COPY . .

RUN yarn build

EXPOSE 3000

# Run app
CMD ["yarn", "start"]
