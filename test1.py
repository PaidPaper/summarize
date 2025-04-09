# mock_script.py

# Importing necessary libraries
import os
import sys

# Function to print a welcome message
def welcome_user(name):
    print(f"Welcome, {name}!")

# Function to calculate the sum of two numbers
def add_numbers(a, b):
    return a + b

# Function to check if a file exists
def check_file_exists(file_path):
    if os.path.exists(file_path):
        print(f"The file {file_path} exists.")
    else:
        print(f"The file {file_path} does not exist.")

# Main function to demonstrate the usage of above functions
def main():
    # Get user input
    user_name = input("Enter your name: ")
    welcome_user(user_name)
    
    # Add numbers
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = add_numbers(num1, num2)
    print(f"The sum of {num1} and {num2} is: {result}")
    
    # Check if a file exists
    file_path = input("Enter the path of a file to check: ")
    check_file_exists(file_path)

# Run the main function if this script is executed
if __name__ == "__main__":
    main()
