from flask import Flask
from flask_restful import Api, Resource, reqparse
import werkzeug
import model


app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"data":"Hello World"}

class LoadImage(Resource):
    def post(self):
        parse = reqparse.RequestParser()
        parse.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
        args = parse.parse_args()
        image_file = args['file']
        image_file.save("flask_test.jpg")


    def run_model(self):
        # model = model.CallModel()
        # model.run()
        pass

api.add_resource(HelloWorld, "/hello")
api.add_resource(LoadImage, "/loadImage")


if __name__ == "__main__":
    app.run(debug = True)


