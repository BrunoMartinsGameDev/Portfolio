from django.db import models
import datetime
# Create your models here.


class Tech(models.Model):
    nome = models.CharField(max_length=255,unique=True)
    imagem = models.ImageField(upload_to='tech')

    def __str__(self) -> str:
        return self.nome
class Project(models.Model):
    title = models.CharField(max_length=255)
    tecnologias = models.ForeignKey(Tech, on_delete=models.DO_NOTHING)
    descricao = models.TextField()
    imagem = models.ImageField(upload_to='project')
    createdDate = models.DateTimeField(auto_now_add=True)
    updatedDate = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
