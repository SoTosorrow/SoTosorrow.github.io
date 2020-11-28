import os
import sys
#https://docs.python.org/zh-cn/3/library/shutil.html
import shutil
'''
shutil.copyfile(oldfile, newfile)  # 复制  覆盖？？用copy好
shutil.move(oldfile, newfile)  # 移动
'''
#文件路径+文件名
#print(sys.argv[0])

#当前工作目录
#print(os.getcwd())
#print(os.path.abspath('.'))

#当前目录文件父目录
#print(os.path.abspath('..'))

#路径合并
#print(os.path.join('D:','back'))

'''
遍历目录文件
os.walk(top[, topdown=True[, onerror=None[, followlinks=False]]])
top:根目录每一个文件夹（包含自己），产生三元组（dirpath,dirname,filenames）
    文件夹路径，文件夹名，文件名
topdown True:top to down
        False:down to top


for root,dirs,files in os.walk(path_current):
    print(root)
    print(dirs)
    print(files)
print('_______')

'''

#move_to ='C:\\Users\\Cuimi\\Desktop\\日常\\move_file\\move_to'

print("Please the path of file you want to copy and move,split with \\\\")
print("for example, C:\\\\User\\\\Yourname\\\\Desktop")
print("if you input 'pass', then the path will default as pwd")
judge = input()
if judge=="pass":
    #默认所在目录
    move_from = os.path.abspath('.')
else:
    #判断路径是否正确
    if os.path.exists(judge):
        move_from = judge
    else:
        print("path is not exists")
        sys.exit(0)
print("move_from:",move_from)

print("Please input the path of move target,split with \\\\")
print("if you input 'pass', then the files will move to a new folder named 'target' ")
judge = input()
if judge=="pass":
    target_dir = os.path.join(move_from,'target')
    if os.path.exists(target_dir):
        #sys.exit(0)
        move_to = os.path.join(move_from,'target')
    else:
        #mk多级目录
        #os.makedirs(move_from+'\\target\\target2')
        os.mkdir(move_from+'\\target')
        move_to = os.path.join(move_from,'target')
else:
    if os.path.exists(judge):
        move_to = judge
    else:
        print("path is not exists")
        sys.exit(0)
print("move to:",move_to)
print("__________")




print("move_begin")

def copy_to_file(file_dir):
    move_to_copy = move_to
    move_to_copy = move_to_copy.split("\\",-1)
    move_to_file = move_to_copy[-1]
    #print(move_to_file)
    for file in os.listdir(file_dir):
        if file=='move_folder.py':
            continue
        if file==move_to_file:
            continue
        
        file = os.path.join(file_dir,file)
        print(file)
        if os.path.isdir(file):
            #file_head_copy = file
            copy_to_file(file)
            #print(file)
        else:
            shutil.copy(file,move_to)
            #shutil.move(file,move_to)

copy_to_file(move_from)









