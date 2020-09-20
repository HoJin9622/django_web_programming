## djangorestframework

djangorestframework 설치

```bash
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
```

INSTALLED_APP에 추가

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
]
```

## Serializer

데이터베이스에서 사용하고자하는 컬럼을 명시하면 이것을 json 형태로 바꿔준다.

## View

MVC 의 View가 아닌 Control의 역할
