def get_profile():
    profile = {
        "name": "Rashid Ray M. De Pedro",
        "nickname": "Rash, Shid,",
        "birthday": "01/14/2002",
        "address": "Calumpang, Molo, Iloilo City",
        "favorite_song": "Ikaw - Jom",
        "hobbies": "Gaming, Biking, Hiking, Running, Gym",
        "motivation": "Everyday is a chance to begin again.",
    }
    return profile


def display_profile(profile):
    print(f"Name       : {profile['name']} ({profile['nickname']})")
    print(f"Birthday   : {profile['birthday']}")
    print(f"Address    : {profile['address']}")
    print(f"Fav Song   : {profile['favorite_song']}")
    print(f"Hobbies    : {profile['hobbies']}")
    print(f"Motivation : {profile['motivation']}")


profile = get_profile()
display_profile(profile)