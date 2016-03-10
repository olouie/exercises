# Add a = [5,6,3] and b = [9, 9, 9] should create an array c of c = [1,5,6,2]

a = [5, 6, 3]
b = [9, 9, 9]

def add_these(array1, array2):
	c = []
	d = [0]

	while array1:

		total = array1.pop() + array2.pop() + d.pop()

		for i in str(total):
			d.append(int(i))

		c.insert(0, d.pop())

		if not a:
			c.insert(0, d.pop())

	print c

add_these(a,b)