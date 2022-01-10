from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from playlist_system_backend.settings import SECRET_KEY
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from playlist_system_api.models import User, Song, Playlist, PlaylistSongs
import hashlib, jwt
from datetime import datetime
import logging

SECRET = 'BFLDE%$^%$@FKB8345683LDKFfkdngldkf'


@api_view(['POST'])
def register_user(request):
    try:
        _name = request.data['name']
        _email = request.data['email']
        _password = request.data['password']
        _password = hashlib.md5(_password.encode()).hexdigest()
        encoded_jwt = jwt.encode({"email":_email}, SECRET ,algorithm="HS256")
        new_user = User(
                        name = _name,
                        email = _email,
                        password = _password
                    )
        try:
            new_user.save()
            return Response({'success': True, 'token': encoded_jwt})
        except Exception as err_msg:
            print('Error: ',err_msg)
            return Response({'success': False,
                             'message': str(err_msg)
            })
    except Exception as err_msg:
        return Response({'success': False,
                         'message': str(err_msg)
            })

@api_view(['POST'])
def login(request):
    try:
        _email = request.data['email']
        _password = request.data['password']
        _password = hashlib.md5(_password.encode()).hexdigest()
        user = User.objects.get(email = _email, password = _password)
        token = jwt.encode({"email":_email}, SECRET ,algorithm="HS256")
        return Response(
            {
                'success': True,
                'token': token,
                'user' : user.name
            }
        )
    except Exception as err_msg:
        return Response({
                'success': False,
                'message': str(err_msg)
            })

@api_view(['GET'])
def get_all_songs(request):
    songs = []
    try:
        _songs = Song.objects.all()
        for song in _songs:
            songs.append(
                {
                    'song_id' : song.id,
                    'song_name' : song.song_name,
                    'singer': song.singer,
                    'duration' : song.duration,
                    'release_date' : song.release_date,
                    'album' : song.album,
                    'play_count' : song.play_count,
                }
            )
        songs.sort(key = lambda song:int(song['play_count']), reverse = True)
        return Response({
            'success': True,
            'songs': songs
        })
    except Exception as err_msg:
        return Response({
            'success': False,
            'message': str(err_msg)
        })

@api_view(['POST'])
def add_song_to_playlist(request):
    try:
        token = request.headers['token']
        _song_id = request.data['song_id']
        _playlist_id = request.data['playlist_id']
        _email = jwt.decode(token, SECRET, algorithms=["HS256"])['email']
        _user_id = User.objects.get(email = _email)
        song = Song.objects.get(id = _song_id)
        playlist = Playlist.objects.get(id = _playlist_id)
        playlist_song = PlaylistSongs(song_id = song, playlist_id = playlist)
        playlist_song.save()
        return Response(
            {
                'success': True
            }
        )
    except Exception as err_msg:
        return Response(
            {
                'success': False,
                'message': str(err_msg)
            }
        )

@api_view(['POST'])
def add_playlist_for_user(request):
    try:
        token = request.headers['token']
        _playlist_name = request.data['playlist_name']
        _email = jwt.decode(token, SECRET, algorithms=["HS256"])['email']
        _user_id = User.objects.get(email = _email)
        playlist = Playlist(playlist_name = _playlist_name, user_id = _user_id)
        playlist.save()
        return Response(
            {
                'success': True
            }
        )
    except Exception as err_msg:
        return Response(
            {
                'success': False,
                'message': str(err_msg)
            }
        )

@api_view(['POST'])
def get_songs_for_playlist(request):
    songs = []
    try:
        token = request.headers['token']
        _playlist_id = request.data['playlist_id']
        _email = jwt.decode(token, SECRET, algorithms=["HS256"])['email']
        _user_id = User.objects.get(email = _email)
        playlist = Playlist.objects.get(id = _playlist_id)
        playlist_song_ids = PlaylistSongs.objects.filter(playlist_id = playlist)
        for playlist_song_id in playlist_song_ids:
            songs.append(
                {
                    'song_id' : playlist_song_id.song_id.id,
                    'song_name' : playlist_song_id.song_id.song_name,
                    'singer' : playlist_song_id.song_id.singer,
                    'duration' : playlist_song_id.song_id.duration,
                    'release_date' : playlist_song_id.song_id.release_date,
                    'album' : playlist_song_id.song_id.album,
                    'play_count' : playlist_song_id.song_id.play_count
                }
            )
        return Response({
            'success': True,
            'songs': songs
        })
    except Exception as err_msg:
        return Response({
            'success': False,
            'message': str(err_msg)
        })

@api_view(['POST'])
def get_all_playlists_for_user(request):
    user_playlists = []
    try:
        token = request.headers['token']
        _email = jwt.decode(token, SECRET, algorithms=["HS256"])['email']
        _user_id = User.objects.get(email = _email)
        playlists = Playlist.objects.filter(user_id = _user_id)
        for playlist in playlists:
            user_playlists.append(
                {
                    'playlist_id':playlist.id,
                    'playlist_name':playlist.playlist_name
                }
            )
        return Response({
            'success': True,
            'playlists': user_playlists
        })
    except Exception as err_msg:
        return Response({
            'success': False,
            'message': str(err_msg)
        })

@api_view(['POST'])
def add_song(request):
    try:
        _song_name = request.data['song_name']
        _singer = request.data['singer']
        _duration = request.data['duration']
        _release_date = request.data['release_date']
        _album = request.data['album']
        _play_count = request.data['play_count']
        song = Song(song_name = _song_name,
                    singer = _singer,
                    duration = _duration,
                    release_date = _release_date,
                    album = _album,
                    play_count = _play_count
        )
        song.save()
        return Response(
            {
                'success': True
            }
        )
    except Exception as err_msg:
        return Response(
            {
                'success': False,
                'message': str(err_msg)
            }
        )

@api_view(['POST'])
def remove_song_from_playlist(request):
    try:
        token = request.headers['token']
        _song_id = request.data['song_id']
        _playlist_id = request.data['playlist_id']
        _email = jwt.decode(token, SECRET, algorithms=["HS256"])['email']
        _user_id = User.objects.get(email = _email)
        song = Song.objects.get(id = _song_id)
        playlist = Playlist.objects.get(id = _playlist_id)
        PlaylistSongs.objects.filter(song_id = song, playlist_id = playlist).delete()
        return Response(
            {
                'success': True
            }
        )
    except Exception as err_msg:
        return Response(
            {
                'success': False,
                'message': str(err_msg)
            }
        )