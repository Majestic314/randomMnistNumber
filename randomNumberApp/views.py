from random import randrange
from django.shortcuts import render
from django.http import HttpResponse
import json
from mnist import MNIST


def index(request):
    return render(request, 'randomNumber/index.html', {})


def getRandomMnistNumber(request):
    print(request)
    result = json.dumps(loadRandomNumber())
    return HttpResponse(result)


def loadRandomNumber():
    mnData = MNIST('c:/Users/Majestic/python-mnist/bin/data/')
    images, labels = mnData.load_training()
    return images[randrange(len(images))]
