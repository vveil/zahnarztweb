# Use the official Node.js 16 image as a parent image
FROM node:lts

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Build your app
# RUN npm run build

# Define the command to run your app
CMD [ "npm", "start" ]
