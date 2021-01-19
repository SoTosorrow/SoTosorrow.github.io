import xlrd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time

#book = xlrd.open_workbook("C:\\Users\\Cuimi\\Desktop\\test\\data.xlsx")
#names = book.sheet_names()
#print(names)

df = pd.read_excel("./data.xlsx",engine="openpyxl",sheet_name='Sheet1') # 
data = df.head(5) # -1
print("获取到所有的值:\n{0}".format(data))


# print(df['pit'].values)
data1 = df.loc[:,'pit'].values
data2 = df.loc[:,'roll'].values
data3 = df.loc[:,'yaw'].values

data1_np = np.array(data1)
data2_np = np.array(data2)
data3_np = np.array(data3)
print(data1_np)
print(data2_np)
print(data3_np)

timeline = []

size = np.size(data1_np)
for i in range(size):
    temp = 10 * i
    timeline.append(temp)
print(len(timeline))

'''
plt.plot(timeline,data1_np)
plt.title("test")
'''

data0 = []
time_ = []
i = 0
t = 0
plt.ion()
while i<size:

    if t>= 10 * np.pi:
        plt.clf()
        t = 0
        time_.clear()
        data0.clear()
    else:
        time_.append(i*10)
        data0.append(data1[i])
        print(i)
        i += 1
        # time.sleep(0.01)
        plt.plot(time_,data0,c='r',ls='-', marker='o', mec='b',ms=1)
        plt.pause(0.01)

#plt.show()
    




