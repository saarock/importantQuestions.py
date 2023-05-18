
# 1. What will be the output of the following program?
#  Program
l = [10, 20, 30, 40, 50]
t = ('Sundeep', 25, 79.58)
s = 'set theory'
s1 = set(l)
s2 = set(t)
s3 = set(s)
print(s1)
print(s2)
print(s3)


# 2.  Given a list
lst = [10, 25, 4, 12, 3, 8]
#  How will you check whether 30 is present in the list or not?
l =0 
while(l<len(lst)):
    a = lst[l]
    if(a==30):
        print('Yes the number 30 is present')
        break
    else:
        print('No 30 is not present')
    l+=1



# 3. Write a Python program to unpack a tuple into several variables.
l = (1,2,3,4,5,6,7)
a ,b ,c, d, e, f, g = l
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)
print(g)


# 4.  Write a Python program to copy a list.
l = [1,2,3,4,5]
c = l.copy()
print(c)



# 5.  Given a string
s = 'Hello'
for_new = []
#  How will you obtain a list['H', 'e', 'l', 'l', 'o'] from it?
for i in s:
    print(i)
    for_new.append(i)
print(for_new)





# 6.  Suppose a list has 20 numbers. Write a program that removes all
#  duplicates from this list.
let = [111,1,3,4,5,7,9,90,1,2,3,3,4,5,6,7,8,8,8,9,0]
for i in let:
    print(i)
    l = let.count(i)
    print(l, "I am the l")
    if let.count(i) > 1:
        print('yes')
        let.remove(i)
print(let)        



# 7. Write a Python program to count the number of even and odd numbers from a series of numbers.
let = [1,2,3,4,5,6,7,8,9]
odd_count = 0
even_count = 0
for i in let:
    if(i%2==0):
        even_count+=1
    else:
        odd_count+=1

print(odd_count)
print(even_count)

my_tuple = (1, 2, 3, 4, 5)
new_item = 6
new_tuple = my_tuple + (new_item,)
print(new_tuple)




# 9
l = set()
print(type(l))


# 10.  Write a Python program to convert a tuple to a string.
l = (1,2,3,4,5,6,7)
a = str(l)
print(a)
print(type(a))



# 11.  Suppose a list contains positive and negative numbers. Write a
#  program to create two lists—one containing positive numbers and
#  another containing negative numbers.

li = [1,2,3,4,5,6,-1,-2,-3,-4,-5,-6]
n_list = []
p_list = []
for i in li:
    if(i<0):
        n_list.append(i)
    else:
        p_list.append(i)

print(n_list)
print(p_list)




# Write a Python program to find the length of a tuple.
l = (1,2,3,4,5)
print(len(l))


# 13.  Write a Python script to add a key to a dictionary.
Sample_Dictionary = {0: 10, 1: 20}
Sample_Dictionary.update({2:30})
print(Sample_Dictionary)
# Expected Result : {0: 10, 1: 20, 2: 30}


# 14. Write a Python script to concatenate following dictionaries to create a new one.
# Sample Dictionary :

dic1={1:10, 2:20}
dic2={3:30, 4:40}
dic3={5:50,6:60}
dic1.update(dic2)
dic1.update(dic3)
print(dic1)




# 1515.  Write a Python script to check if a given key already exists in a dictionary.
let = {
    'name': "Aaysh",
    'caste': 'basnet',
    'id':20

}

while 'name' in let:
    print('yes')
    break

else:
    print('No')




# 16.  Write a Python script to print a dictionary where the keys are numbers between 1 and 15 (both included) and the values are square of keys.
# Sample Dictionary
l = {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100, 11: 121, 12: 144, 13: 169, 14: 196, 15: 225}    
n = {}
for i in range(1,16):
    k = i
    b = i**2
    # n.update({k,0})
    # We can do by this also and by the help of builtin setDfault methos also
    # n[k] = b
    n.setdefault(i, b)
print(n)



# 17. How will you create a list, tuple, set and dictionary, each containing
#  one element?

my_tupe = (1)
my_list = [2]
my_sets = {3}
my_dict = {'name': "aayush"}
print(type(my_tuple))
print(type(my_list))
print(type(my_sets))
print(type(my_dict))




# 18. Write a Python program to rename a key in dictionary.

l = {
    'name': 'aayush',

}

if  'name' in l:
    print(i)
    val = l['name']

    l.popitem()
    # Another method is this
    l.setdefault('caste', val)

    # One method is this and another method id this
    # l['caste'] = l.pop('name')



    # print(val)
    # l.popitem()
    # l.setdefault('caste', val)

print(l)



#19. Write a Python program to create a set.
let = set()
for i in range(1,11):
    let.add(i)



# 20. Write a Python program to iteration over sets.
for i in let:
    print(i)





# 21. Write a Python program to add member(s) in a set.
let = {1,2,3,4,5}
let.update({6,7,8,9,0, 'aa'})
print(let)


# or we can do in the another method also when we know the value that we have to pop()
d = {1, 2,3,4}
let -= d
print(let)

# 22. Write a Python program to remove item(s) from set
let.clear()
print(let)


#23  Write a Python program to remove an item from a set if it is present in the set.
s = {1,2,3,4,5,6,7,8,88}
if 88 in s:
    s.remove(88)
print(s)    


# 24. Write a Python program to create an intersection of sets. 
a = {1,2,3,4,5,6}
b = {1,2,3,7,8,9,0}
c = a.intersection(b)
print(c)



# 25. Write a Python program to update value in dictionary.
l = {
    'name': 'Aayush',
    'caste': 'basnet'
}

for i in l:
    if i == 'name':
        l[i] = 'Idichchha'
    if(i == 'caste'):
        # print(i)
        l[i] = "Gautam"    

print(l)        


# 26. Write a Python script to check if a given values exists in a dictionary.
given_value = 'Idichchha'
for i in l:
    if l[i] == 'Idichchha':
        print('yes')
        break;
    else:
        print('No')





# 27. Given the following dictionary:
d = { 'd1': {'Fruitname' : 'Mango', 'Season' : 'Summer'},
 'd2': {'Fruitname' : 'Orange', 'Season' : 'Winter'}}
#  How will you access and print Mango and Winter?

print(d['d1']['Fruitname'])
print(d['d2']['Season'])





# 28. Given the following dictionary
marks = {
 'Subu' : {'Maths' : 88, 'Eng' : 60, 'SSt' : 95},
 'Amol' : {'Maths' : 78, 'Eng' : 68, 'SSt' : 89},
 'Raka' : {'Maths' : 56, 'Eng' : 66, 'SSt' : 77}
 }

#28  Write a program to perform the following operations:
#  - Print marks obtained by Amol in English.
#  - Set marks obtained by Raka in Maths to 77.


print(marks['Amol']['Eng'])
marks['Raka']['Maths'] = 77
print(marks)



# 29. How will you create an empty list, empty tuple, empty set and
#  empty dictionary?
lis = []
tup = ()
print(type(tup))
se = set()
dic = {}
print(type(dic))




# 30. Given dictionary 
a={"salary":20, "age":90}
# Write a program to perform the following operations:
# -sort the given dictionary by key in ascending order
# -sort the given dictionary by value in descending order
nn = sorted(a)
g = {}
for i in nn:
    print(i)
    g.setdefault(i, a[i])


print(g)    

g: dict = {}
if(a['salary'] < a['age']):
    g.setdefault('age', a['age'])
    g.setdefault('salary', a['salary'])

print(g)






# 31. Write a program that takes a number.
# If the number is divisible by 3, it should return “Fizz”.
# If it is divisible by 5, it should return “Buzz”.
# If it is divisible by both 3 and 5, it should return “FizzBuzz”.
# Otherwise, it should return the same nu

let: int = [1,2,3,4,5,6,67,78,8,546,4,23,45,32421]
for i in let:
    if i%2 ==0:
        print('Fizz')
    if i%5 == 0:
        print('Buzz')    

    if(i%3 ==0 and i%5==0):
        print('“FizzBuzz”')

    else:
        print(i)    





# 32. Given input
a=[1,2,3,4]
# expected output: ["ram",1,2,"hari",4]
a.insert(0, 'ram')
a.pop(3)
a.insert(3,'hari')
print(a)


# 33. Given input
a=[1,2,3,4]
# expected output: [1,2,3,4,[8,9]]
a.append([8,9])
print(a)

# Finished



