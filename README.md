# Django-Blog

:wave:Hey there!! Glad you stumbled upon this repository. This is my attempt at building a *blogsite* with **[Django](https://www.djangoproject.com/start/overview/ "The web framework for perfectionists with deadlines.")** 

### Setup

#### 1. Cloning the repository
```sh
$ git clone https://github.com/Abhijna-Raghavendra/Django-Blog.git
$ cd Django-Blog
```

#### 2. Creating and activating your virtual environment
```sh
$ python -m venv virtenv
$ source virtenv/Scripts/activate
```
> If you do not have python already installed on your system, follow any [tutorial](https://www.digitalocean.com/community/tutorials/install-python-windows-10)

#### 3. Install the required dependencies
```sh
(virtenv)$ pip install -r requirements.txt
```

#### 4. Generating and adding the secret key to your .env file
```sh
$ python -c 'from django.core.management.utils import get_random_secret_key; \
      print("SECRET_KEY="+get_random_secret_key())' > .env
```

#### 5. Run the server on your local computer
```sh
(virtenv)$ python manage.py runserver
```

*Now Navigate to **http://127.0.0.1:8000** on your browser*  
  
**Enjoy Blogging!!:relaxed:**