from models import Animal, Dog, Cat

def main():
    dog = Dog("Buddy", 3, "Black", "Labrador")
    cat = Cat("Penny", 1, "White", True)
    animal = Animal("Gena", 5, "Gray")

    animals=[dog, cat, animal]

    for a in animals:
        print(a)
        print(a.speak())
        print(a.info())
        print("-" * 20)

if __name__ == "__main__":
    main()