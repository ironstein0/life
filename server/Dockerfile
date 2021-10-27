FROM node:17.0.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --legacy-peer-deps
# If you are building your code for production
# RUN npm ci --only=production

# for the node app
EXPOSE 8081

# for prisma-studio
EXPOSE 5555

CMD [ "yarn", "start" ]