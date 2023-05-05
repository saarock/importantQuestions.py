# Question number 1
a =  'Softwarica'
for i in range(10):
    print(a)



# Question number 2
let = [1,2,3,4,5]
b = sum(let)
n = 0
for i in let:
    n += i
print(n)


# Question number 3
user_input = input('Enter character')
keep = str(user_input)
for i in range(len(keep)):
    print(keep[i])


# Question number 4
# 4. write a program to display integer from of a list. given list=[1,"a","c",2,3,4]
list = [1,'a', 'c', 3, '4']
for i in list:
    if type(i) == str:
        print('string')
    else:
        print(i, "We are the integer")

# 5.multiplication of a each element. given list=[4,5,3,2]
lst = [4,5,3,2]
m = 1;
for i in lst:
    m*=i     
print(m, 'THIS IS THE MULTIPLICATION.')



# 6.multiplication table of a given number
user_input = input('Enter integer for multiplication')
get_int = int(user_input)
for i in range(1,11):
    print(f'{get_int} * {i} = {get_int*i}')


# 7. reverse a list
lis = [1,2,3,4,5,7,"i"]
here = reversed(lis)
keep_reversedlist = []
for i in here:
    keep_reversedlist.append(i)

print(keep_reversedlist)


# Questin number 7
reversed_again = lis[::-1]
print(reversed_again)



# Question number 8
# 8.  given list is [1,2,3,4] but expected output in new list [2,3,4,5]
let = [1,2,3,4]
n = []
