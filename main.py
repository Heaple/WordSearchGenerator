from random import *

word_count = int(input("How many word you will include in word search? "))
width = int(input("How long is the width? "))
height = int(input("How tall is height? "))

total_word_list = []

for i in range(word_count):
    word_letter = []
    word = input("word have to include: ")

    if len(word) > width:
        print("The word is too long. Please retype word or retype width.")
        word = input("word have to include: ")
    elif len(word) > height:
        print("The word is too long. Please retype word or retype height.")
        word = input("word have to include: ")

    for j in range(len(word)):
        word_letter.append(word[j])
    
    total_word_list.append(word_letter)

print(total_word_list)

for i, v in enumerate(total_word_list):
    hori_or_verti = choice(["hori", "verti"])

    if hori_or_verti == "hori":
        for j in v:
            print("  "*i, end="")
            print(j)

    else:
        print(*v)