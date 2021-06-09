# Generated by Django 3.1.7 on 2021-06-09 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210609_0830'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default='XZKUJN', max_length=8, unique=True),
        ),
        migrations.AlterField(
            model_name='room',
            name='host',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
