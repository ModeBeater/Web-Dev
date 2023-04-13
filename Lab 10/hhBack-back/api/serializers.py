from rest_framework import serializers
from api.models import Company
class CompanySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=1000)
    city = serializers.CharField(max_length=255)
    address = serializers.CharField(max_length=1000)

class VacancySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    # description = serializers.TextField(max_length=1000)
    salary = serializers.FloatField(default=1000)
    # company = serializers.ForeignKey("Company",on_delete=models.CASCADE,default=0)

class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id','name','description','city')


class VacancySerializer(serializers.ModelSerializer):
    pass