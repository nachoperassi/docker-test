# Set the base image
FROM node:10-alpine

# Create the project directories and assign its ownership to the node user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the working directory for the project
WORKDIR /home/node/app

# Copy project dependencies files into the workdir
COPY package*.json ./

# Set the user for the subsequent instructions
USER node

# Install project dependencies
RUN npm install

# Copy the project code into the workdir with the proper ownership
COPY --chown=node:node . .

# Expose a container port
EXPOSE 9000

# Start the application
CMD [ "npm", "start" ]
