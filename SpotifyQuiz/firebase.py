# Import database module.
from firebase_admin import db, credentials
import firebase_admin

databaseURL = 'https://uppercase-0405-default-rtdb.firebaseio.com/'
cred = credentials.Certificate("/Users/ejchow/1.LiU/TDDD27_project_spotify_quiz/SpotifyQuiz/uppercase-0405-firebase-adminsdk-cjrjy-69b469eb23.json")
default_app = firebase_admin.initialize_app(cred, {'databaseURL': databaseURL })

ref = db.reference('/')

def signUp():
    users_ref = ref.child('users')
    users_ref.set({
        'test1': {
            'date_of_birth': 'June 23, 1912',
            'full_name': 'Alan Turing'
        },
        'test2': {
            'date_of_birth': 'December 9, 1906',
            'full_name': 'Grace Hopper'
        }
    })