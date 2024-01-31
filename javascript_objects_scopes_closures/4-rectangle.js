class Rectangle:
    def __init__(self, w, h):
        if w <= 0 or h <= 0:
            pass
        else:
            self.width = w
            self.height = h

    def print(self):
        if hasattr(self, 'width') and hasattr(self, 'height'):
            for _ in range(self.height):
                print('X' * self.width)

    def rotate(self):
        if hasattr(self, 'width') and hasattr(self, 'height'):
            self.width, self.height = self.height, self.width

    def double(self):
        if hasattr(self, 'width') and hasattr(self, 'height'):
            self.width *= 2
            self.height *= 2

if __name__ == "__main__":
    r1 = Rectangle(2, 3)
    print('Normal:')
    r1.print()

    print('Double:')
    r1.double()
    r1.print()

    print('Rotate:')
    r1.rotate()
    r1.print()
