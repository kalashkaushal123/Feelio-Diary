from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from .models import Diary
from .serializers import DiarySerializer


@api_view(["POST"])
def signup(request):
    print(request.data)
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")
    confirmPassword = request.data.get("confirmPassword")

    if not username or not email or not password or not confirmPassword:
        return Response({"error": "Username, Email, Password, ConfirmPassword is required"})
    
    if password != confirmPassword:
        return Response(
            {"error":"Passwords do not match"},
            status=400
        )
    
    if User.objects.filter(email=email).exists():
        return Response(
            {"error":"Email already exits"},
            status=400
        )
    
    if User.objects.filter(username=username).exists():
        return Response(
            {"error":"Username already exists"},
            status=400
        )

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )
    print(user)
    print(user.id)

    refresh = RefreshToken.for_user(user)

    return Response(
        {
            "message" : "User Created Successfully",
            "username" : user.username,
            "email" : user.email,
            "access" : str(refresh.access_token),
            "refresh" : str(refresh),
        },
        status=201
    )


@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(
        request,
        username=username,
        password=password
    )

    if user is None:
        return Response(
            {"error": "Invalid username or password"},
            status=401

        )

    refresh = RefreshToken.for_user(user)

    return Response({
        "message": "Login successful",
        "username": user.username,
        "email": user.email,
        "access": str(refresh.access_token),
        "refresh": str(refresh),
    })


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    # print(request.user)
    # print(request.auth)

    return Response({
        "username":user.username,
    })



@api_view(["POST"])
def save_diary(request):
    username = request.data.get("username")

    if not username:
        return Response(
            {"error" : "Username is required"},
            status=400
        )
    
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response(
            {"error" : "User not Found"}, 
            status=404
        )

    diary = Diary.objects.create(
        user = user, 
        description = request.data.get("description"),
        words = request.data.get("words"),
        letters = request.data.get("letters"),
    )
    serializer = DiarySerializer(diary)

    return Response(serializer.data, status=201)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def diary_history(request):
    diaries = Diary.objects.filter(user=request.user).order_by("-created_at")
    serializer = DiarySerializer(diaries, many=True)
    return Response(serializer.data)