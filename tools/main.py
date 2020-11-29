# !/usr/bin/python3
# coding = utf-8

import FolderMove
import shutil
import sys
import os
import PyQt5.QtWidgets
from PyQt5.QtWidgets import QLabel,QApplication, QWidget, QPushButton, QLineEdit,QMessageBox
from PyQt5.QtGui import QIcon
from PyQt5.QtCore import Qt,QCoreApplication
from random import randint

class Widget(QWidget):
    

    def __init__(self):
        super().__init__()
        self.initUI()


    def initUI(self):      
        self.setGeometry(700, 500, 900, 520)
        self.setWindowTitle('Folder Mover')
        # self.setWindowIcon(QIcon('xdbcb8.ico')) 
        
        # arg2:father
        self.move_from_lab = QLabel('Move From',self)
        self.move_from_lab.setGeometry(100,100,1000,50)
        self.move_from = QLineEdit('',self)
        self.move_from.setFocus()
        self.move_from.setGeometry(250,100,400,50)
        self.btn_browse = QPushButton('Browse',self)
        # self.btn.resize(btn.siezHindt())
        self.btn_browse.setGeometry(700,100,100,50)
        self.btn_browse.clicked.connect(lambda:self.setBrowerPath(1))

        self.move_to_lab = QLabel('Move To',self)
        self.move_to_lab.setGeometry(100,200,1000,50)
        self.move_to = QLineEdit('',self)
        self.move_to.setGeometry(250,200,400,50)
        self.btn_browse_2 = QPushButton('Browse',self)
        self.btn_browse_2.setGeometry(700,200,100,50)
        self.btn_browse_2.clicked.connect(lambda:self.setBrowerPath(2))
        self.btn_clear = QPushButton('Clear',self)
        self.btn_clear.setGeometry(100,300,100,50)
        self.btn_clear.clicked.connect(self.setTextClear)

        self.move = QPushButton("Move",self)
        self.move.setGeometry(300,300,100,50)
        #self.move.clicked.connect(lambda:self.moveFolder(2))
        self.move.clicked.connect(self.moveFolder)

        self.show()
    

    def setBrowerPath(self,i):
        download_path = PyQt5.QtWidgets.QFileDialog.getExistingDirectory(self,
                                                        "Browse",
                                                        "./")
        if i==1:
            self.move_from.setText(download_path)
        else:
            self.move_to.setText(download_path)

    def setTextClear(self):
        # QMessageBox.about(self,'Right', 'Yes,Again')
        # self.text.setFocus()
        self.move_to.clear()
        self.move_from.clear()

    def moveFolder(self):
        print("moveFolder:")
        #print(self.move_from.text(),self.move_to.text())
        self.file = FolderMove.File()
        self.file.file_init(self.move_from.text(),self.move_to.text())
        print(self.file.move_from,'\n',self.file.move_to)
        self.copy_move(self.file.move_from,self.file.move_to)
        
        #self.moveFolder()
    

    def copy_move(self,file_dir,move_to):
        print("move begin")
        print("from:",file_dir)
        print("to:",move_to)

        move_to_copy = move_to
        move_to_copy = move_to_copy.split('\\',-1)
        move_to_file = move_to_copy[-1]

        try:
            for file in os.listdir(file_dir):
                #print(file)
                if file==os.path.basename(__file__):
                    continue
                if file==move_to_file:
                    continue

                file = os.path.join(file_dir,file)
                print(file)
                if os.path.isdir(file):
                    print("dir:",file)
                    self.copy_move(file,move_to)
                else:
                    #print(file,move_to)
                    shutil.copy(file,move_to)
                    #shutil.move(file,move_to)
        except Exception:
            print(':)')



if __name__ == '__main__':
    
    app = QApplication(sys.argv)
    widget = Widget()
    sys.exit(app.exec_())




    
    '''

     1. 选取文件夹 QFileDialog.getExistingDirectory()  #返回字符串
     2. 选择文件 QFileDialog.getOpenFileName()   #返回元组
     3. 选择多个文件 QFileDialog.getOpenFileNames()
     4. 选择保存文件 QFileDialog.getSaveFileName()
     
 
    `fileName1, filetype = QFileDialog.getOpenFileName(self,
                  "选取文件",
                  "./",
                  "All Files (*);;Text Files (*.txt)")  #设置文件扩展名过滤,注意用双分号间隔
 
     files, ok1 = QFileDialog.getOpenFileNames(self,
                  "多文件选择",
                  "./",
                  "All Files (*);;Text Files (*.txt)")
 
     fileName2, ok2 = QFileDialog.getSaveFileName(self,
                  "文件保存",
                  "./",

    # override    
    def closeEvent(self, event):

        reply = QMessageBox.question(self, '确认', '确认退出吗', QMessageBox.Yes | QMessageBox.No, QMessageBox.No)
        if reply == QMessageBox.Yes:
            event.accept()        
        else:
            event.ignore()

            
    def keyPressEvent(self,e):
        if e.key() == Qt.Key_Up:
            self.lab.setText('up')
        
        elif e.key() == Qt.Key_Down:
            self.lab.setText('down')
         
        elif e.key() == Qt.Key_Space:
            self.lab.setText('Space')
        elif e.key() == Qt.Key_A:
            self.lab.setText('a')
        else:
            self.lab.setText('emmmm')
    
    '''

