from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from .models import Diary
from .serializers import DiarySerializer
from datetime import date, timedelta
from django.contrib.auth.hashers import make_password


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
def reset_password(request):
    email = request.data.get('email')
    password = request.data.get('password')
    confirmPassword = request.data.get("confirmPassword")

    if not email or not password or not confirmPassword:
        return Response({
            "error" : "Email, password and confirm password are required"
        }, status=400)
    
    if password != confirmPassword:
        return Response({
            "error" : "Passwords do not match"
        }, status=400)
    
    try:
        user = User.objects.get(email = email)

    except User.DoesNotExist:
        return Response({
            "error" : "Email does not exist"
        }, status=404)
    
    user.set_password(password)
    user.save()

    return Response({
        "message" : "Password updated successfully"
    }, status=200)



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
        date = request.data.get("date"),
        page_type = request.data.get("page_type"),
    )
    serializer = DiarySerializer(diary)

    return Response(serializer.data, status=201)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def diary_history(request):
    diaries = Diary.objects.filter(user=request.user).order_by("-created_at")
    serializer = DiarySerializer(diaries, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def diary_detail(request, pk):
    try:
        diary = Diary.objects.get(id=pk, user=request.user)
    except Diary.DoesNotExist:
        return Response({"error":"Diary not found"}, status=404)
    
    serializer = DiarySerializer(diary)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def dashboard(request):
    entries = Diary.objects.filter(user=request.user).count()
    memories = entries
    today = date.today()
    dates = set(
        Diary.objects.filter(user=request.user)
        .values_list("date",flat=True)
        .distinct()
    )

    if today not in dates:
        streak = 0
    else:
        streak = 0

    while today in dates:
        streak += 1
        today -= timedelta(days=1)

    

    return Response({
        "entries" : entries,
        "memories" : memories,
        "streak" : streak
    })

     