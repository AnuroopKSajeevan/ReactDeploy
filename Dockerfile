# # Use the official Node.js image to build the application
# FROM node:18 AS build

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the React application
# RUN npm run build

# # Use a smaller base image for the final stage
# FROM nginx:alpine

# # Copy the build files to the nginx container
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose the port nginx runs on
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]
