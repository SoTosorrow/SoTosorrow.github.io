from bs4  import BeautifulSoup
import re
import urllib.request as ur
import requests

#url = "http://yuedu.163.com/book_reader/a073b33a371247f6accd59a934d3f4bd_4"
#url = "https://read.qidian.com/chapter/nJu1DlOtHD2RTIpqx7GUJA2/GVQfMDLtxnxMs5iq0oQwLQ2"
url = "https://yuedu.163.com/book_reader/337ff265998543119dee4143023573ad_4/b9794c8a891d48c88ef1e4e5896e4f8c_4"
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

