# engine.py
import random

DUMMY_DATA = [
    {
        "id_number": "1234567890",
        "full_name": "Fahad Almutairi",
        "employer": "Saudi Post",
        "status": "clean",
    },
    {
        "id_number": "2234567890",
        "full_name": "Abdullah Alqahtani",
        "employer": "Ministry of Health",
        "status": "expired",
    },
    {
        "id_number": "3234567890",
        "full_name": "Nasser Alharbi",
        "employer": "Aramco",
        "status": "alert",
    },
]

class DummyFaceEngine:
    @staticmethod
    def match_face(image):
        # هنا ما فيه ذكاء — تختار بيانات وهمية عشوائياً
        return random.choice(DUMMY_DATA)
