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

thisdict["year"] = 2018
print(thisdict)

thisdict["color"] = "red"
print(thisdict)

thisdict2 = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict2.pop("model")
print(thisdict2)

for x in thisdict:
  print(x)

for x in thisdict:
  print(thisdict[x])

thisdict3 = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict3.copy()
print(mydict)

myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}

print(myfamily)

a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")

a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")

day = 4
match day:
  case 1:
    print("Monday")
  case 2:
    print("Tuesday")
  case 3:
    print("Wednesday")
  case 4:
    print("Thursday")
  case 5:
    print("Friday")
  case 6:
    print("Saturday")
  case 7:
    print("Sunday")

i = 1
while i <= 6:
  print(i)
  i += 1

i = 1
while i < 6:
  print(i)
  if (i == 3):
    break
  i += 1

i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")

fruits3 = ["apple", "banana", "cherry"]
for x in fruits3:
  print(x) 

def my_function():
  print("Hello from a function")

my_function()


def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")

def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")

cars = ["Ford", "Volvo", "BMW"]

x = cars[0]

print(x)

for x in cars:
  print(x)
