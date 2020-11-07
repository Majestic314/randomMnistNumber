from random import randrange
from django.shortcuts import render
from django.http import HttpResponse
import os
import json
from mnist import MNIST
from django.core.cache import cache


def index(request):
    return render(request, 'randomNumber/index.html', {})


def getRandomMnistNumber(request):
    images = cache.get('images')
    if images is None:
        loadImages()
        images = cache.get('images')
    randomImage = images[randrange(len(images))]
    result = json.dumps(randomImage)
    return HttpResponse(result)


def loadImages():
    mnData = MNIST(os.getcwd() + '/resources/')
    images, labels = mnData.load_training()
    cache.set('images', images, 300)
