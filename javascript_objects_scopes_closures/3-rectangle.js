class Rectangle:
    def __init__(self, w, h):
        if w <= 0 or h <= 0:
            pass  # Creating an empty object
        else:
            self.width = w
            self.height = h

    def print(self):
        if hasattr(self, 'width') and hasattr(self, 'height'):
            for _ in range(self.height):
                print("X" * self.width)


# Test cases
if __name__ == "__main__":
    r1 = Rectangle(2, 3)
    r1.print()

    r2 = Rectangle(10, 5)
    r2.print()
