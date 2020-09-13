# Django

## 시작

```bash
$ python -m virtualenv mysite

$ call scripts/activate

$ pip install django

$ django-admin startproject mysite
```

프로젝트 생성

- mysite 디렉토리 : 프로젝트명으로 만들어진 디렉토리, 프로젝트 관련 파일들이 들어있다.

밑에서부터는 만들어주는 디렉토리

- polls 디렉토리 : 애플리케이션명으로 만들어진 애플리케이션 디렉토리, 해당 애플리케이션 관련 파일들이 들어있다.

- migrations 디렉토리 : 데이터베이스 변경사항을 관리하기 위한 디렉토리, 데이터베이스에 추가, 삭제, 변경 등이 발생하면 변경 내역을 기록한 파일들이 위치한다.

- templates 디렉토리 : 프로젝트를 진행하면서 추가된다. 템플릿 파일들이 들어있다.

- static 디렉토리 : 프로젝트를 진행하면서 추가된다. CSS, Image, JavaScript 파일들이 들어있다

- logs 디렉토리 : 프로젝트를 진행하면서 추가된다. 로그 파일들이 들어있따. 로그 파일의 위치는 settings.py 파일의 LOGGING 항목으로 지정한다.

```bash
$ python manage.py startapp polls
```

polls라는 애플리케이션 디렉토리와 그 하위에 필요한 파일들을 생성해준다.

## settings.py

프로젝트에 필요한 설정값들은 settings.py 파일에 지정한다.

1. ALLOWED_HOSTS

ALLOWED_HOSTS 항목을 지정한다.

장고는 DEBUG=True이면 개발 모드로, False이면 운영 모드로 인식한다.

운영 모드인 경우는 ALLOWED_HOSTS에 반드시 서버의 IP나 도메인을 지정해야하고, 개발 모드인 경우에는 값을 지정하지 않아도 ['localhost', '127.0.0.1']로 간주한다

2. INSTALLED_APPS

프로젝트에 포함되는 애플리케이션들은 모두 설정 파일에 등록되어야한다.

따라서 생성한 polls 애플리케이션도 등록해야한다.

모듈명인 polls 만 등록해도 되지만, 애플리케이션의 설정 클래스로 등록하는 것이 더 정확한 방법이다.

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "polls.apps.PollsConfig",
]
```

3. DATABASES

장고는 디폴트로 SQLite3 데이터베이스 엔진을 사용하도록 설정되어 있다.

다른 데이터베이스 엔진으로 변경하고 싶다면 settings.py 파일에서 수정해주면 된다.

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

4. TIME_ZONE

최초에는 세계표준시로 되어있는데, 한국시간으로 변경한다.

```python
TIME_ZONE = "Asia/Seoul"
```

## 기본 테이블 생성

```bash
$ python manage.py migrate
```

migrate 명령은 데이터베이스에 변경사항이 있을 때 이를 반영해주는 명렁이다.

## 웹 서버 실행

```
$ python manage.py runserver 0.0.0.0:8000
```

명령 입력 시 자신의 서버에 맞는 IP 주소와 포트번호를 입력하면 된다.

위 명령에서 0.0.0.0 이란 IP 주소의 의미는 현재 명령을 실행 중인 서버의 IP주소가 무엇으로 설정되어 있더라도 그와는 무관하게 웹 접속 요청을 받겠다는 의미이다.

## Admin 사이트

http://localhost:8000/admin

위 주소로 접속하면 Admin 사이트의 로그인 페이지가 나온다.

로그인하려면 Username, Password를 넣어야 되는데 생성해야한다.

```bash
$ python manage.py createsuperuser
```

화면 지시에 따라 Username/Email/Password/Password(again)을 입력해서 관리자를 생성한다.
