from socket import fromshare
from django import forms
from .models import User, blogPost

class NewUser(forms.ModelForm):

    class Meta:
        model = User
        fields = ('username', 'password',)

class CheckUser(forms.ModelForm):

    class Meta:
        model = User
        fields = ('username', 'password',)

class NewPost(forms.ModelForm):

    class Meta:
        model = blogPost
        fields = ('title','content')
