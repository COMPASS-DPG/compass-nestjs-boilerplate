# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the NestJS app will run (you can modify this)
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "start"]
