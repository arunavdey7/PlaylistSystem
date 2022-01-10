# Generated by Django 3.2.10 on 2022-01-08 21:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Playlist',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('playlist_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('song_name', models.CharField(max_length=255)),
                ('singer', models.CharField(max_length=255)),
                ('duration', models.CharField(max_length=255)),
                ('release_date', models.DateTimeField()),
                ('album', models.CharField(max_length=255, null=True)),
                ('play_count', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PlaylistSongs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('playlist_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='playlist_system_api.playlist')),
                ('song_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='playlist_system_api.song')),
            ],
        ),
        migrations.AddField(
            model_name='playlist',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='playlist_system_api.user'),
        ),
    ]