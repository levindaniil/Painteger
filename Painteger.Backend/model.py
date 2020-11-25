# Copyright 2019 The TensorFlow Hub Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================

import functools
import os

from matplotlib import gridspec
import matplotlib.pylab as plt
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub


class CallModel:
    def run(self):
        content_image_url = 'file:///C:/Users/mi/Documents/%D1%83%D1%87%D0%B5%D0%B1%D0%B0/%D0%A1%D0%9F%D0%98/Project%20painteger/content.jpg'
        style_image_url = 'file:///C:/Users/mi/Documents/%D1%83%D1%87%D0%B5%D0%B1%D0%B0/%D0%A1%D0%9F%D0%98/Project%20painteger/style.jpg'
        output_image_size = 512 #any

        content_img_size = (output_image_size, output_image_size)
        style_img_size = (256, 256)  # Recommended to keep it at 256.

        content_image = self.load_image(content_image_url, content_img_size)
        style_image = self.load_image(style_image_url, style_img_size)
        style_image = tf.nn.avg_pool(style_image, ksize=[3,3], strides=[1,1], padding='SAME')

        hub_handle = 'https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2'
        hub_module = hub.load(hub_handle)
        outputs = hub_module(tf.constant(content_image), tf.constant(style_image))
        stylized_image = outputs[0]
        tf.keras.preprocessing.image.save_img('output.jpg',stylized_image[0])
        self.show_n([content_image, style_image, stylized_image], titles=['Original content image', 'Style image', 'Stylized image'])


    def crop_center(self,image):
        shape = image.shape
        new_shape = min(shape[1], shape[2])
        offset_y = max(shape[1] - shape[2], 0) // 2
        offset_x = max(shape[2] - shape[1], 0) // 2
        image = tf.image.crop_to_bounding_box(image, offset_y, offset_x, new_shape, new_shape)
        return image

    @functools.lru_cache(maxsize=None)
    def load_image(self,image_url, image_size=(256, 256), preserve_aspect_ratio=True):

        image_path = tf.keras.utils.get_file(os.path.basename(image_url)[-128:], image_url)
        img = plt.imread(image_path).astype(np.float32)[np.newaxis, ...]
        if img.max() > 1.0:
            img = img / 255.
        if len(img.shape) == 3:
            img = tf.stack([img, img, img], axis=-1)
        img = self.crop_center(img)
        img = tf.image.resize(img, image_size, preserve_aspect_ratio=True)
        return img

    def show_n(self,images, titles=('',)):
        n = len(images)
        image_sizes = [image.shape[1] for image in images]
        w = (image_sizes[0] * 6) // 320
        plt.figure(figsize=(w  * n, w))
        gs = gridspec.GridSpec(1, n, width_ratios=image_sizes)
        for i in range(n):
            plt.subplot(gs[i])
            plt.imshow(images[i][0], aspect='equal')
            plt.axis('off')
            plt.title(titles[i] if len(titles) > i else '')
        plt.show()
