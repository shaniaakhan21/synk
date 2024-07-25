# Dockerfile for frontend
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY packages/frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the application code from the 'app' directory
COPY packages/frontend/app ./app

# Copy other necessary files
COPY packages/frontend/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
