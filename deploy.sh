###
 # @Descripttion: 
 # @Author: peterroe
 # @Date: 2021-11-04 23:34:41
 # @LastEditors: peterroe
 # @LastEditTime: 2021-11-06 13:47:33
### 
cd docs

cd dist

git init

git remote add origin git@github.com:peterroe/ungeui.git

git add .

git commit -m ":pencil: docs: update doc"

git push -f origin master