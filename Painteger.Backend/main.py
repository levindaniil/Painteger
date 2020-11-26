from flask import Flask
from flask import send_file
from flask_restful import Api, Resource, reqparse
import werkzeug
from model import Model
import os


app = Flask(__name__)
api = Api(app)


class HelloWorld(Resource):
    def get(self):
        return {"data":"Hello World"}


class LoadImage(Resource):
    def post(self):
        parse = reqparse.RequestParser()
        parse.add_argument('image', type=werkzeug.datastructures.FileStorage, location='files')
        parse.add_argument('style', type=werkzeug.datastructures.FileStorage, location='files')
        args = parse.parse_args()

        image_file = args['image']
        image_file.save("content.jpg")

        style_file = args['style']
        style_file.save("style.jpg")

        self.run_model()

        path = os.path.abspath(os.getcwd())
        result = '%s/output.jpg' % path

        return send_file(result, mimetype='image/jpeg')

    def run_model(self):
        model = Model()
        model.run()
        pass


api.add_resource(HelloWorld, "/hello")
api.add_resource(LoadImage, "/loadImage")


if __name__ == "__main__":
    app.run(debug = True)


