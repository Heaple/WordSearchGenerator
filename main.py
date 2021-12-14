from random import *

word_search = []
total_word_list = []
word_dict = {"c": [], "w": [], "h": []}

word_count = int(input("How many word you will include in word search? "))
width = int(input("How long is the width? "))
height = int(input("How tall is height? "))

for i in range(word_count):
    word_letter = []
    word = input("word have to include: ")
    for j in range(len(word)):
        word_letter.append(word[j])
    total_word_list.append(word_letter)
    if len(word_letter) > height:
        if len(word_letter) > width:
            word_dict["c"].append(word_letter)
        else:
            random_dir = ["c", "w"]
            word_dict[choice(random_dir)].append(word_letter)
    else:
        random_dir = ["w", "h"]
        word_dict[choice(random_dir)].append(word_letter)
    print(word_dict["c"], word_dict["h"], word_dict["w"])

for i in range(height):
    have_to_append = []
    for j in range(width):
        have_to_append.append(chr(randrange(65, 91)) + " ")
    word_search.append(have_to_append)

for i in word_search:
    for j in i:
        print(j, end="")
    print()