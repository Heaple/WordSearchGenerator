word_search = []
total_word_list = []

word_count = int(input("How many word you will include in word search? "))
width = int(input("How long is the width? "))
height = int(input("How tall is height? "))

for i in range(word_count):
    word_letter = []
    word = input("word have to include: ")
    for j in range(len(word)):
        word_letter.append(word[j])
    total_word_list.append(word_letter)

for i in range(height):
    have_to_append = []
    for j in range(width):
        have_to_append.append("⬜️")
    word_search.append(have_to_append)

for i in word_search:
    for j in i:
        print(j, end="")
    print()