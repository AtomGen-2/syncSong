
from django.urls import path
from .views import *
# These are the endpoints for the backend
urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
]
