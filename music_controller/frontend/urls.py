from django.urls import path
from .views import index

# Every path redirects to index.html, react takes over. React renders the page by shifting to index.js  
urlpatterns = [
    path('', index),
    path('join/', index),
    path('create/', index),
]
