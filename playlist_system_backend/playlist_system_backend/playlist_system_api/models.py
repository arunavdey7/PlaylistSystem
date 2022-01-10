from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,null=False)
    email = models.CharField(unique=True, max_length=255, null=False)
    password = models.CharField(max_length=255,null=False)

class Playlist(models.Model):
    id = models.AutoField(primary_key=True)
    playlist_name = models.CharField(max_length=255,null=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

class Song(models.Model):
    id = models.AutoField(primary_key=True)
    song_name = models.CharField(max_length=255,null=False)
    singer = models.CharField(max_length=255,null=False)
    duration = models.CharField(max_length=255,null=False)
    release_date = models.DateTimeField()
    album = models.CharField(max_length=255,null=True)
    play_count = models.IntegerField()

class PlaylistSongs(models.Model):
    id = models.AutoField(primary_key=True)
    playlist_id = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    song_id = models.ForeignKey(Song, on_delete=models.CASCADE)

