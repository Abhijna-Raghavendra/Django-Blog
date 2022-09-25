# Django-Blog

:wave:Hey there!! Glad you stumbled upon this repository. This is my attempt at building a *blogsite* with **[Django](https://www.djangoproject.com/start/overview/ "The web framework for perfectionists with deadlines.")** 

### Setup
> This setup involves a frontend - *React* and a backend - *Django* setup

#### *Backend*

##### 1. Cloning the repository
```sh
$ git clone https://github.com/Abhijna-Raghavendra/Django-Blog.git
$ cd Django-Blog/backend
```

##### 2. Creating and activating your virtual environment
```sh
$ python -m venv virtenv
$ source virtenv/Scripts/activate
```
> If you do not have python already installed on your system, follow any [tutorial](https://www.digitalocean.com/community/tutorials/install-python-windows-10)

##### 3. Install the required dependencies
```sh
(virtenv)$ pip install -r requirements.txt
```

##### 4. Generating and adding the secret key to your .env file
```sh
(virtenv)$ python -c 'from django.core.management.utils import get_random_secret_key; \
      print("SECRET_KEY="+get_random_secret_key())' > .env
```

##### 5. Run the server on your local computer
```sh
(virtenv)$ python manage.py runserver
```

#### *Frontend*

##### 1. Run the npm server
```sh
$ cd ../../frontend
$ npm run start
```
> If you do not have npm already installed, then follow any [tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

  
  
*Now wait for your browser to open a window to **http://localhost:3000***  
  
**Enjoy Blogging!!:relaxed:**