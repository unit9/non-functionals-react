import webapp2
import jinja2
import os

try:
    from settings import config
except ImportError:
    config = {}

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(
        os.path.join(os.path.dirname(os.path.dirname(__file__)), 'dist')),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render())

isdev = os.environ.get('SERVER_SOFTWARE', "").lower().startswith("dev")

app = webapp2.WSGIApplication([
    ('/.*', MainPage),
], debug=isdev)
