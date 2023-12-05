# Use the official PHP 8.2 image as the base image
FROM php:8.2-fpm

# Arguments defined in docker-compose.yml
# ARG user=sammy
# ARG uid=1000

# Set the working directory
WORKDIR /var/www/

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev\
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev

# Install the PHP extensions for Postgres and phpoffice/phpspreadsheet
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql \
    && docker-php-ext-install bcmath gd zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the Laravel application files
COPY . .

# Set the permissions for the storage and bootstrap directories
RUN chmod 777 -R  storage \
&& chmod 777 -R bootstrap

# RUN chown -R www-data:www-data /var/www/storage \
#     && chown -R www-data:www-data /var/www/bootstrap

# Install the Laravel dependencies
RUN composer install

# Expose port 9000 for the PHP-FPM service
EXPOSE 9000

# USER sammy

# Start the PHP-FPM service
CMD ["php-fpm"]