cost=int(input("enter the cost="))
if cost>1000:
    discount=cost*(10/100)
    print("discount=",discount)
    totalcost=cost-discount
    print("Total Cost=",totalcost)
else:
    print("sorry.. we can't offer any discount at this price")