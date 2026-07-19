from django.urls import path
from .views import *

urlpatterns = [
    path("signup/", signup, name='signup'),
    path("login/", login, name="login"),
    path("profile/", profile, name='profile'),
    path("save_diary/", save_diary, name='save_diary'),
    path("diary_history/", diary_history, name='diary_history'),
]
