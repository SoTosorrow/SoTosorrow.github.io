# !/usr/bin/python3
# coding:utf-8

import sys
import os
import shutil

class BaseDescribe:


    def __init__(self):
        self.base_name = os.path.basename(__file__)
        self.path_move_default = os.path.abspath('.')

class File():


    def __init__(self):
        self.move_to=''
        self.move_from=''



    def file_init(self,input_from,input_to):
        #judge = input()
        judge = input_from
        if judge=="":
            #默认所在目录
            self.move_from = os.path.abspath('.')
        else:
            #判断路径是否正确
            if os.path.exists(judge):
                self.move_from = judge
            else:
                print("path is not exists")
                sys.exit(0)
        print("move_from:",self.move_from)

        #judge = input()
        judge = input_to
        if judge=="":
            target_dir = os.path.join(self.move_from,'target')
            if os.path.exists(target_dir):
                #sys.exit(0)
                self.move_to = target_dir
            else:
                os.mkdir(self.move_from+'/target')
                self.move_to = target_dir
        else:
            if os.path.exists(judge) and os.path.isdir(judge):
                self.move_to = judge
            else:
                print("path is not exists")
                sys.exit(0)
        print("move to:",self.move_to)
        print("__________")
    

#file = File()
#file.file_init("C:/Users/Cuimi/Desktop/日常/move_file/folder4","C:/Users/Cuimi/Desktop/日常/move_file/folder4")
#print(file.move_to)
            

