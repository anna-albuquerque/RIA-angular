from rest_framework import viewsets
from .models import Owner
from .serializers import OwnerSerializer

class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    lookup_field = 'name'  # Use name as the lookup field instead of id