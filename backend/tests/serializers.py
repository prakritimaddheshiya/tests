from rest_framework.serializers import ModelSerializer

from .models import Tests


class TestsSerializer(ModelSerializer):
    class Meta:
        model = Tests
        fields = '__all__'
