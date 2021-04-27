from bs4  import BeautifulSoup
import re
import urllib.request as ur
import requests

url = "http://yuedu.163.com/book_reader/a073b33a371247f6accd59a934d3f4bd_4"
#url = "https://read.qidian.com/chapter/nJu1DlOtHD2RTIpqx7GUJA2/GVQfMDLtxnxMs5iq0oQwLQ2"
response = requests.get(url,'utf-8')
response.encoding= response.apparent_encoding
#print(response.text)
print(response.encoding,response.status_code)
'''
response = requests.get(url,'utf-8')
response.encoding= response.apparent_encoding
#print(response.text)
print(response.encoding,response.status_code)

content = BeautifulSoup(response.content.decode("utf-8"), "lxml")
#print(content)
element = content.find_all(id="J_Player")

# 起点
#e2 = content.find_all('div',class_="read-content j_readContent")
# 福尔摩斯
#e2 = content.find_all('div',class_="portrait-player")
e2 = content.find_all('div',class_="article J_Article")
print(e2)

'''

headers = {'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',

        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    }
response = requests.get(url, headers=headers) #请求的地址
soup = BeautifulSoup(response.content, 'html.parser')  #返回的html信息用soup解析
print(response.status_code)  #请求状态码
print(soup.prettify())#以格式输出html
