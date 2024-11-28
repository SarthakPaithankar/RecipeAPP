FROM node:18

WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the React development server
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
