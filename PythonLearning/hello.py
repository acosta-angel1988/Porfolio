print("Hello, World!")

if 5 > 2:
    print("Five is greater than two!")  
if 5 > 2:
    print("Five is greater than two!") 

x = 5
y = "Hello, World!"

print(x)
print(y)

#This is a comment.
"""
This is a comment
written in
more than just one line
"""

x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0

x = 5
y = "John"
print(type(x))
print(type(y))

x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)

x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()


x = "awesome"

def myfunc():
  global x
  x = "fantastico"

myfunc()

print("Python is " + x)


import random

print(random.randrange(1, 10))

a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

a = "Hello, World!"
print(a[1])

for x in "banana":
  print(x) 

a = "Hello, World!"
print(len(a))

txt = "The best things in life are free!"
print("free" in txt)


b = "Hello, World!"
print(b[2:5])

a = "Hello, World!"
print(a.replace("H", "J"))

age = 36
txt = f"My name is John, I am {age}"
print(txt)

thislist = ["apple", "banana", "cherry"]
print(len(thislist))

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])

thislist3 = ["apple", "banana", "cherry"]
thislist3[1] = "blackcurrant"
print(thislist3)

thislist4 = ["apple", "banana", "cherry"]
thislist4.insert(2, "watermelon")
print(thislist4) 

thislist5 = ["apple", "banana", "cherry"]
thislist5.append("orange")
print(thislist5)

thislist6 = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist6.extend(tropical)
print(thislist6)

thislist7 = ["apple", "banana", "cherry"]
thislist7.remove("banana")
print(thislist7)

thislist8 = ["apple", "banana", "cherry"]
thislist8.pop(1)
print(thislist8)

thislist9 = ["apple", "banana", "cherry"]
thislist9.clear()
print(thislist9)

thislist10 = ["apple", "banana", "cherry"]
for x in thislist10:
  print(x)

thislist11 = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist11):
  print(thislist11[i])
  i = i + 1

thislist12 = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist12.sort()
print(thislist12)

thislist13 = ["apple", "banana", "cherry"]
mylist = thislist13.copy()
print(mylist)

list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]
list1.extend(list2)
print(list1)

