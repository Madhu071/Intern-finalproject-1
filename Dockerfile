# Use Node.js 22 Alpine as the base image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy application configuration
COPY package.json ./

# Copy application source code
COPY app.js ./

# Set production environment
ENV NODE_ENV=production

# Expose application port
EXPOSE 3000

# Run application as non-root user
USER node

# Start the application
CMD ["npm", "start"]