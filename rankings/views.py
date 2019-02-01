from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'rankings/index.html')

def manager(request):
    return render(request, 'rankings/manager.html')
