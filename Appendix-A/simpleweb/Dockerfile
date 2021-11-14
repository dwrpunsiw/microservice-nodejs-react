# Specify a base image
FROM node:alpine

# Define working directory in the container
WORkDIR /usr/app

# Copy dependency config to docker container
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy files in our project
COPY ./ ./

# Define port forward


# Default command
CMD ["npm", "start"]