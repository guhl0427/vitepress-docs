# SSH and GPG keys

## SSH keys
[SSH keys github官方文档](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh)

### 查看key
```bash
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
# id_rsa.pub(公匙 提供给github) 和 id_rsa(私匙)

# 方式一 直接复制到剪贴板
clip < ~/.ssh/id_rsa.pub

#方式二 查看&手动复制
cat ~/.ssh/id_rsa.pub
```

### 生成key
```bash
# 邮箱一般使用github绑定的邮箱
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 向github增加key
[new ssh key](https://github.com/settings/ssh/new)
```bash
# 方式一 直接复制到剪贴板
clip < ~/.ssh/id_rsa.pub

#方式二 查看&手动复制到剪贴板
cat ~/.ssh/id_rsa.pub
```
"Title"字段，为新密钥添加描述性标签。 例如，如果使用的是个人笔记本电脑，则可以将此密钥称为“个人笔记本电脑”。

"key"字段，粘贴上面复制的公匙内容

## GPG keys
[GPG keys github官方文档](https://docs.github.com/zh/authentication/managing-commit-signature-verification)

### 查看key
```bash
gpg --list-secret-keys --keyid-format=long
```
检查命令输出以查看是否有 GPG 密钥对。
+ 如果没有 GPG 密钥对，或者不想使用任何可用于对提交和标记进行签名的密钥对，则[生成新的 GPG 密钥](https://docs.github.com/zh/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)。
+ 如果存在现有的 GPG 密钥对，并且您希望使用它来对提交和标记进行签名，则可以使用以下命令显示公钥，并替换要使用的 GPG 密钥 ID。 在本例中，GPG 密钥 ID 为 `3AA5C34371567BD2`：
```bash
$ gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
```

### 生成key
```bash
# 生成key
$ gpg --full-generate-key
```

### 向github新增key
[new gpg key](https://github.com/settings/gpg/new)

```bash
# 查看全部keys
$ gpg --list-secret-keys --keyid-format=long
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot <hubot@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10

# 查看key的内容
$ gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
# 复制
# 以 `-----BEGIN PGP PUBLIC KEY BLOCK-----` 开头
# 并以 `-----END PGP PUBLIC KEY BLOCK-----` 结尾
# 的 GPG 密钥 粘贴到 `key` 字段。
```

### 将key告诉git
```bash
$ git config --global user.signingkey 3AA5C34371567BD2
```

### git commit提交带上签名
#### 手动挡
```
$ git commit -S -m "YOUR_COMMIT_MESSAGE"
```
#### 自动挡
Git 客户端配置
+ 默认为本地存储库的所有提交进行签名，运行 `git config commit.gpgsign true`。 

+ 默认为计算机上的任何本地存储库中的所有提交进行签名，运行 `git config --global commit.gpgsign true`。

要存储 GPG 密钥密码，以便无需在每次对提交签名时输入该密码，我们建议使用以下工具：

-   对于 Mac 用户，[GPG Suite](https://gpgtools.org/) 支持在 Mac OS 密钥链中存储 GPG 密钥密码。
-   对于 Windows 用户，[Gpg4win](https://www.gpg4win.org/) 将与其他 Windows 工具集成。

你也可以手动配置 [gpg-agent](http://linux.die.net/man/1/gpg-agent) 以保存 GPG 密钥密码，但这不会与 Mac OS 密钥链（如 ssh 代理）集成，并且需要更多设置。