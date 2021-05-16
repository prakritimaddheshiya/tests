from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Tests
from .serializers import TestsSerializer


class TestsCreateView(APIView):
    def post(self, request):
        serializer = TestsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestsListView(APIView):
    def get(self, request):
        tests = Tests.objects.all()
        serializer = TestsSerializer(tests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class TestsDetailView(APIView):
    def get(self, request, test_id):
        test = Tests.objects.get(id=test_id)
        serializer = TestsSerializer(test)
        return Response(serializer.data, status=status.HTTP_200_OK)
