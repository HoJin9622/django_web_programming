```bash
$ pip3 install pipenv
```

```bash
$ pipenv shell
```

프로젝트 폴더에서 실행

```bash
$ pipenv install django djangorestframework django-restknox
```

```bash
$ django-admin startproject leadmanager
```

```bash
$ cd leadmanager
$ python manage.py startapp leads
```

```python
from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
```

leadmanager > leads > models.py

```bash
$ python manage.py makemigrations leads
```

```bash
$ python manage.py migrate
```
