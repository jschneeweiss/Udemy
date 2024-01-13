amountStr = input("Bitte geben Sie Ihre Ersparnisse ein: ")
amount = float(amountStr)

# print("Nach einem Jahr haben Sie: " + str(amount * 1.08) + " Euro")
# print("Nach einem Jahr haben Sie: " + str(amount * 1.08 * 1.08) + " Euro")
# print("Nach einem Jahr haben Sie: " + str(amount * 1.08 * 1.08 * 1.08) + " Euro")


# amount = amount * 1.08
# print("Nach einem Jahr haben Sie: " + str(amount) + " Euro")

# amount = amount * 1.08
# print("Nach zwei Jahr haben Sie: " + str(amount) + " Euro")

# amount = amount * 1.08
# print("Nach drei Jahr haben Sie: " + str(amount) + " Euro")

amount = amount * 1.08
print("Nach 1 Jahr haben Sie: " + str(amount) + " Euro")


for i in range(1, 40):
    amount = amount * 1.08
    print("Nach " + str(i + 1) + " Jahren haben Sie: " + str(amount) + " Euro")
