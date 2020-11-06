from random import randrange
from django.shortcuts import render
from django.http import HttpResponse
import os
import json
from mnist import MNIST


def index(request):
    return render(request, 'randomNumber/index.html', {})


def getRandomMnistNumber(request):
    print(request)
    result = json.dumps(loadRandomNumber())
    return HttpResponse(result)


def loadRandomNumber():
    mnData = MNIST(os.getcwd() + '/resources/')
    images, labels = mnData.load_training()
    return images[randrange(len(images))]
