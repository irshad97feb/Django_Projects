from django.shortcuts import render, redirect
from .views import *
from .models import *
from django.http import HttpResponse
# Create your views here.

def receipes(request):
    print("inside receipe")
    if request.method == "POST":
        data = request.POST
        receipe_name = data['receipe_name']
        receipe_description = data['receipe_description']
        # for fetching file use request.FILES
        receipe_image = request.FILES.get('receipe_image')
        print(receipe_image)
        # To save in the db
        Receipe.objects.create(
            receipe_name = receipe_name,
            receipe_description = receipe_description,
            receipe_image = receipe_image,
        )
        return redirect('/receipe/')
    queryset = Receipe.objects.all()
    if request.GET.get('search'):
        print(request.GET.get('search'))
        queryset = queryset.filter(receipe_name__icontains=request.GET.get('search'))
    context = {'receipes' : queryset}
    return render(request, 'receipe.html', context)

def delete_receipe(request, id):
    print(id)
    queryset = Receipe.objects.get(id=id)
    queryset.delete()
    return redirect('/receipe/')
    # return HttpResponse("id1")

def update_receipe(request,id):
    queryset = Receipe.objects.get(id=id)
    print(queryset)
    context = {'receipe': queryset}
    if request.method=='POST':
        data = request.POST
        receipe_name = data.get('receipe_name')
        receipe_description = data.get('receipe_description')
        # for fetching file use request.FILES
        receipe_image = request.FILES.get('receipe_image')
        queryset.receipe_name = receipe_name
        queryset.receipe_description = receipe_description
        if receipe_image:
            queryset.receipe_image = receipe_image
        queryset.save()
        return redirect('/receipe/')

    return render(request, 'update_receipe.html', context)