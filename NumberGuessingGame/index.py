print("You have 7 changes to guess the number. Let's start!")

print("\nYou have 10 changes to guess the number between 1 and 50. let start!")

gc = 0
chances = 10
num = 37

while gc < chances:
    gc += 1
    guess = int(input("Enter your guess"))

    if guess == num:
        print("Correct!")
        break

    elif guess > num:
        print('Too high! Try a lower number.')

    elif guess < num:
        print('Too low! Try a higher number.')
    
    elif gc >= chances:
        print(f'Sorry! The number was {num}. Better luck next time.')

