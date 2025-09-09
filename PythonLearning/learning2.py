thisset = {"apple", "banana", "cherry"}
print(thisset)

print("banana" in thisset)

thisset.add("orange")
print(thisset)

thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

thisset.update(tropical)

print(thisset)

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

print(thisdict)
print(thisdict["brand"])
print(len(thisdict))