import re
import base64


def parse(auth):
    if not auth or not auth.startswith("Basic "):
        return
    auth = base64.b64decode(auth.split(" ", 1)[1])
    if ":" not in auth:
        return
    return tuple(auth.split(":", 1))  # user, password


class BaseAuth(object):

    realm = "site"

    def __init__(self, app):
        self.app = app

    def authenticate(self, environ):
        raise NotImplementedError()

    def __call__(self, environ, start_response):
        def nope():
            start_response("401 NO", [("WWW-Authenticate",
                                       "Basic realm={}".format(self.realm))])
            return ""
        if not self.authenticate(environ):
            return nope()
        return self.app(environ, start_response)


class BasicAuthMiddleware(BaseAuth):

    def __init__(self, app, creds):
        self.app = app
        self.creds = creds

    def authenticate(self, environ):
        creds = parse(environ.get("HTTP_AUTHORIZATION", ""))
        return creds == self.creds


class BasicAuthUAMiddleware(BasicAuthMiddleware):

    allowed_ua_pattern = None

    def __init__(self, *args, **kwargs):
        super(BasicAuthUAMiddleware, self).__init__(*args, **kwargs)
        self.allowed_ua = re.compile(self.allowed_ua_pattern)

    def authenticate(self, environ):
        if self.allowed_ua.match(environ.get("HTTP_USER_AGENT", "")):
            return True
        return super(BasicAuthUAMiddleware, self).authenticate(environ)


class BasicAuthUAFacebookMiddleware(BasicAuthUAMiddleware):

    allowed_ua_pattern = r"facebookexternalhit/.*"
