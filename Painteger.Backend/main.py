from flask import Flask
from flask import send_file
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
import werkzeug
from model import Model
import os


app = Flask(__name__)
api = Api(app)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@cross_origin()
class HelloWorld(Resource):
    def get(self):
        return {"data":"Hello World"}


class LoadWithSample(Resource):
    def post(self):
        parse = reqparse.RequestParser()
        parse.add_argument('image', type=werkzeug.datastructures.FileStorage, location='files')
        parse.add_argument('style', type=werkzeug.datastructures.FileStorage, location='files')
        args = parse.parse_args()

        image_file = args['image']
        image_file.save("content.jpg")

        style_file = args['style']
        style_file.save("style.jpg")

        run_model()

        path = os.path.abspath(os.getcwd())
        result = '%s/output.jpg' % path

        return send_file(result, mimetype='image/jpeg')


class LoadWithStyle(Resource):
    def post(self):
        parse = reqparse.RequestParser()
        parse.add_argument('image', type=werkzeug.datastructures.FileStorage, location='files')
        parse.add_argument('style', type=str)
        args = parse.parse_args()

        image_file = args['image']
        image_file.save("content.jpg")

        style = args['style']

        run_model(style)

        path = os.path.abspath(os.getcwd())
        result = '%s/output.jpg' % path

        return send_file(result, mimetype='image/jpeg')


def run_model(link=None):
    model = Model()
    model.run(link)
    pass


api.add_resource(HelloWorld, "/hello")
api.add_resource(LoadWithSample, "/loadWithSample")
api.add_resource(LoadWithStyle, "/loadWithStyle")


if __name__ == "__main__":
    app.run(debug = True)


