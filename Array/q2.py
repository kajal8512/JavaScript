age=int(input("enter the age="))
sex=input("enter the sex as M/F=")
days=int(input("enter the days="))
if age>=18 and age<30:
    print("age=",age)
    if sex=="M":
        print("wage is=700")
    elif sex=="F":
        print("wage is =750")