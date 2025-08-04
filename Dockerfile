# Use Nginx to serve the application
FROM nginx:latest

# Copy the local dist directory to the Nginx html directory
COPY dist/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80