from django.urls import include, path
from playlist_system_api.views import register_user, login, get_all_songs, add_song_to_playlist, get_songs_for_playlist, get_all_playlists_for_user, add_song, add_playlist_for_user,remove_song_from_playlist,remove_playlist_for_user
from rest_framework import routers


urlpatterns = [

    path('api/adduser/',register_user),
    path('api/login/',login),
    path('api/allsongs',get_all_songs),
    path('api/addsongtoplaylist/',add_song_to_playlist),
    path('api/getsongsforplaylist/', get_songs_for_playlist),
    path('api/getallplaylistsforuser/', get_all_playlists_for_user),
    path('api/addsong/', add_song),
    path('api/addplaylistforuser/', add_playlist_for_user),
    path('api/removesongfromplaylist/', remove_song_from_playlist),
    path('api/removeplaylistforuser/',remove_playlist_for_user),
]