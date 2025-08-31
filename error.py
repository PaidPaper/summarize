# mock_script_with_errors.py

import os
import sys


# Function to welcome user
def welcome_user(name):
    print("Welcome " + name)  # Missing closing parenthesis

# Function to add two numbers
def add_numbers(a, b)
    return a + b

# Function to divide two numbers
def divide_numbers(a, b):
    if b == 0:
        print("Error: Division by zero!")
    return a / b  # Missing return statement in case b is 0

# Function to check file existence
def check_file_exists(file_path):
    if os.path.exists(file_path):
        print(f"The file {file_path} exists.")
    else:
        print(f"The file {file_path} doesn't exist")  # Missing punctuation

# Main function to demonstrate usage of above functions
def main():
    # User input
    user_name = input("Enter your name: ")
    welcome_user(user_name)
    
    # Add numbers
    num1 = int(input("Enter the first number: "))  # This will throw error if user input is not a number
    num2 = int(input("Enter the second number: "))
    result = add_numbers(num1, num2)
    print(f"The sum of {num1} and {num2} is {result}")
    
    # Divide numbers
    num1 = int(input("Enter the numerator: "))
    num2 = int(input("Enter the denominator: "))
    result = divide_numbers(num1, num2)
    print(f"The result of division is {result}")
    
    # Check file
    file_path = input("Enter the path of a file to check: ")
    check_file_exists(file_path)

# Missing parentheses in 'if' statement
if __name__ == "__main__":
    main()
