# git-rebase

## git rebase xxx

将当前分支变基到xxx分支，变基的过程中，需要处理每一次冲突，处理完成冲突后，需要添加到暂存区`git add .`，之后`git rebase --continue`进行下一次的冲突处理。

## git rebase -i xxx 合并提交

### 作用
合并提交。日常开发中，往往会将一些与功能本身没有太多关系的代码提交，如果不进行提交合并的话，这些没有意义的提交上生产后会被带入主分支，不优雅。那么此时就可以合并提交，展示一个清晰合理的提交历史。

### 命令
git rebase -i commit-hash

将commit-hash(不包含该commit)值之后的commit合并为同一个commit

git rebase -i HEAD~4

将前4个commit合并为同一个commit

### 操作流程
1. git rebase -i commit-hash
2. 按`i键`进入编辑模式
3. 将最上面的一次提交设置为`pick`，其他的提交设置为`squash`。
4. 按`ESC键`然后输出`:wq`，保存并退出
5. 在之后出现的编辑页面继续按`i键`进入编辑模式，整理`commit信息`（不需要的直接删除就行dd快速删除行）


```
pick hash1 update readme
pick hash2 commit1
pick hash3 commit2
pick hash4 commit3

->

pick hash1 update readme
pick hash2 commit1
s hash3 commit2
s hash4 commit3
```
hash1会被保留

hash2、hash3、hash4合并为一个commit，并且整合commit message

> 切记：不要在共享分支上进行变基
> 
> 切记：不要在共享分支上进行变基
> 
> 切记：不要在共享分支上进行变基

## 作用
[官方文档](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)

顾名思义，变基就是改变基点。

将当前分支与目标分支先进行比较，找出当前分支领先于目标分支的commits，将这些commits按顺序放到目标分支。

## 命令
> git rebase xxx

将当前分支变基到xxx分支`（一般来说是主分支或者预发分支）`

## 操作流程
变基的过程中，需要处理每一次冲突。

处理完单次冲突后，需要`git add .`添加到暂存区，然后`git rebase --continue（类似变基过程中的git commit）`提交本次合并，并进行下一次的冲突处理。

变基完成后再merge到主分支。
```
git checkout feat/branch
git rebase main
...处理冲突
git add.
git rebase --continue

# 变基完成后 合并到主分支
git checkout main
git merge feat/branch
```

# git rebase -i xxx 交互模式
(题外话：并不清楚这个命令跟rebase有什么关系)

## 作用
> 合并提交

日常开发中，往往会将一些与功能本身没有太多关系的代码提交。

如果不进行提交合并的话，这些没有意义的提交上生产后会被带入主分支，不优雅[狗头]。

那么此时就可以合并提交操作，修改提交历史，展示一个清晰合理的提交历史。

## 命令
> git rebase -i commit-hash

将commit-hash值（不包含该commit）之后的commit合并为同一个commit

> git rebase -i HEAD~n

将前n个commit合并为同一个commit

## 操作流程
1. git rebase -i commit-hash
2. 按`i键`进入编辑模式
3. 将最上面的一次提交设置为`pick`，其他的提交设置为`squash`。
4. 按`ESC键`然后输出`:wq`，保存并退出
5. 在之后出现的编辑页面继续按`i键`进入编辑模式，整理`commit信息`（不需要的直接删除就行dd快速删除行）

### 例1
```
pick hash1 update readme
pick hash2 commit1
pick hash3 commit2
pick hash4 commit3
# 修改为->
pick hash1 update readme
pick hash2 commit1
s hash3 commit2
s hash4 commit3
```
hash1会被保留

hash2、hash3、hash4合并为1个commit，并且整合commit message

相当于原本的4次commit变成了2次commit

### 例2
```
pick hash1 update readme
pick hash2 commit1
pick hash3 commit2
pick hash4 commit3
# 修改为->
pick hash1 update readme
pick hash2 commit1
s hash3 commit2
r hash4 commit3
```
hash1会被保留

hash2和hash3合并为1个commit，并且整合commit message

hash4会被保留，但可以修改commit的message

相当于原来的4次commit变成了3次commit