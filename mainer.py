import tkinter as tk
import random

def main():
    with open("db.txt") as f:
        lines = f.readlines()
    randomArray = lines[2::3]
    randomArray = [x.replace('\n', '') for x in randomArray]
    f.close()
    return randomArray

main()

codeArray = main()
print(codeArray)

def getRandom():
    arrayR = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','R','T','U','V','W','X','Y','Z']
    code = ''
    
    for j in range(25):
        i = random.randint(0, 36)
        code = code + str(i)
    
    codeArray.append(code)
    return(code)

#def check(code):
  #  return code in codeArray

def clickExitButton():
    exit()


def addNew():
    newFName = entryFName.get()
    newLName = entryLName.get()
    f = open("db.txt","a")
    f.write(newFName)
    f.write("\n")
    f.write(newLName)
    f.write("\n")
    numGen = getRandom()
    f.write(numGen)
    f.write("\n")
    f.close()
    print(numGen)


root= tk.Tk()
root.title('Badge Reader')
canvas1 = tk.Canvas(root, width = 400, height = 300)
canvas1.pack()

entry1 = tk.Entry (root) 
canvas1.create_window(100, 220, window=entry1)

entryFName = tk.Entry (root)
canvas1.create_window(140, 60, window=entryFName)

entryLName = tk.Entry (root)
canvas1.create_window(300, 60, window=entryLName)

labelFName = tk.Label (root, text="First Name")
canvas1.create_window(140, 80, window=labelFName)

labelLName = tk.Label (root, text="Last Name")
canvas1.create_window(300, 80, window=labelLName)

def checkPassword():  
    x1 = entry1.get()
    print(codeArray)
    print(x1)
    if x1 in codeArray:
        access = 'access granted'
    else:
        access = 'access denied'
    label1 = tk.Label(root, text=access)
    canvas1.create_window(120, 20, window=label1)
    
button1 = tk.Button(text='Check Password', command=checkPassword)
#canvas1.create_window(200, 180, window=button1)
doButton = tk.Button(text="Add New", command=addNew)
exitButton = tk.Button(text="Exit", command=clickExitButton)
nameButton = tk.Button(text="Check Password", command=checkPassword)
doButton.place(x=180, y=100)
exitButton.place(x=280, y=250)
nameButton.place(x=50, y=250)





root.mainloop()

