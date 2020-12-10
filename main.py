from flask import Flask, send_from_directory
from flask import send_file
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
import werkzeug
import cv2
import numpy as np
from model import Model
import os

from pylab import *
from urllib import request
from io import BytesIO

app = Flask(__name__
            , static_folder="Painteger.Frontend/build"
            , static_url_path="")
api = Api(app)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=["GET"])
@app.route('/create-an-art', methods=["GET"])
def index():
    return app.send_static_file('index.html')


@app.route('/favicon.ico', methods=["GET"])
def favicon():
    return app.send_static_file('favicon.ico')


class HelloWorld(Resource):
    @cross_origin()
    def get(self):
        return {"data": "Hello World"}


class LoadWithSample(Resource):
    @app.route('/loadWithSample', methods=["POST"])
    @cross_origin()
    def sample():
        parse = reqparse.RequestParser()
        parse.add_argument('image', type=werkzeug.datastructures.FileStorage, location='files')
        parse.add_argument('style', type=werkzeug.datastructures.FileStorage, location='files')
        args = parse.parse_args()

        image_file = args['image'].read()

        content_arr = np.fromstring(image_file, dtype = np.uint8)
        content_image = cv2.imdecode(content_arr, cv2.IMREAD_COLOR)[:,:,::-1] # reverse axis because of keras save

        style_file = args['style'].read()

        style_arr = np.fromstring(style_file, np.uint8)
        style_image = cv2.imdecode(style_arr, cv2.IMREAD_COLOR)[:,:,::-1] # reverse axis because of keras save

        # cv2.imwrite("style.jpg", style_image) #saving image using cv2

        # style_file.save("style.jpg")
        # image_file.save("content.png")

        run_model(content_image,style_image)

        path = os.path.abspath(os.getcwd())
        result = '%s/output.jpg' % path

        response = send_file(result, mimetype='image/jpeg')
        header = response.headers
        header['Access-Control-Allow-Credentials'] = 'true'

        return response


class LoadWithStyle(Resource):
    @app.route('/loadWithStyle', methods=["POST"])
    @cross_origin()
    def style():
        parse = reqparse.RequestParser()
        parse.add_argument('image', type=werkzeug.datastructures.FileStorage, location='files')
        parse.add_argument('style', type=str)
        args = parse.parse_args()

        image_file = args['image'].read()

        content_arr = np.fromstring(image_file, dtype=np.uint8)
        content_image = cv2.imdecode(content_arr, cv2.IMREAD_COLOR)[:, :, ::-1]

        style = args['style']

        data = BytesIO(request.urlopen(style).read())
        style_image = imread(data, format='jpg')

        run_model(content_image, style_image)

        path = os.path.abspath(os.getcwd())
        result = '%s/output.jpg' % path

        response = send_file(result, mimetype='image/jpeg')
        header = response.headers
        header['Access-Control-Allow-Credentials'] = 'true'

        return response


def run_model(content_image, style_image, link=None):
    model = Model()
    model.run(content_image,style_image,link)
    pass


api.add_resource(HelloWorld, "/hello")
api.add_resource(LoadWithSample, "/loadWithSample")
api.add_resource(LoadWithStyle, "/loadWithStyle")

if __name__ == "__main__":
    app.run()
