# coding=utf8
import itchat, time, random

# SINCERE_WISH = u'祝%s新年快乐！'
# REAL_SINCERE_WISH = u'祝%s新年快乐！！'

# 祝福语数组 %s 后面替换为好友昵称或者好友备注
wishList = [
  u'祝%s新年快乐！',
  u'%s，祝你新年快乐！',
  u'%s，新年快乐！',
]


# 入口函数
def entry():
  print('请选择群发选项')
  print('a:一键群发所有好友   b：群发指定群好友')
  sendType = input()

  if sendType == 'a':
    send_wishes()
  elif sendType == 'b':
    print('请输入指定的群')
    groupName = input()
    send_special_wishes(groupName)
  print('是否继续群发 y/n')
  flag = input()
  if flag == 'y':
    entry()
  else:
    exit()


def inputLine():
  # str = input()
  str = ''
  lines = []
  while True:
    line = input()
    if line != '#':
      str += line + '\r\n'
    else:
      # lines.append(input())
      break
  # print(str)
  return str


# 群发所有好友
def send_wishes():
  friendList = itchat.get_friends(update=True)[1:]
  print('请输入要群发的信息，可以粘贴，换行 # 号结束')
  message = inputLine()
  for friend in friendList:
    # 如果不是演示目的，把下面的方法改为itchat.send即可
    print(friend['RemarkName'] + ',' + message)
    time.sleep(.5)
  print('请检查信息是否有误，没有问题输入 s 发送')
  sendFlag = input()
  if sendFlag == 's':
    for friend in friendList:
      # 如果不是演示目的，把下面的方法改为itchat.send即可
      itchat.send(friend['RemarkName'] + ',' + message, friend['UserName'])
      print(friend['RemarkName'] + '发送成功')
      time.sleep(.5)
  else:
    return


# 群发指定群的好友
def send_special_wishes(chatroomName='微信群名'):
  itchat.get_chatrooms(update=True)
  chatrooms = itchat.search_chatrooms(name=chatroomName)
  if chatrooms is None:
    print(u'没有找到群聊：' + chatroomName)
  else:
    print('请输入要群发的信息，可以粘贴, 换行 # 结束')
    message = inputLine()
    chatroom = itchat.update_chatroom(chatrooms[0]['UserName'])
    for friend in chatroom['MemberList']:
      friend = itchat.search_friends(userName=friend['UserName'])
      # 如果不是演示目的，把下面的方法改为itchat.send即可
      # RemarkName 你对好友的备注  NickName 好友自己的昵称
      if friend:
        print(friend['RemarkName'] + ',' + message)
        time.sleep(.5)
    print('请检查信息是否有误，没有问题输入 s 发送')
    sendFlag = input()
    if sendFlag == 's':
      for friend in chatroom['MemberList']:
        friend = itchat.search_friends(userName=friend['UserName'])
        # 如果不是演示目的，把下面的方法改为itchat.send即可
        # RemarkName 你对好友的备注  NickName 好友自己的昵称
        if friend:
          itchat.send(friend['RemarkName'] + ',' + message, friend['UserName'])
          print(friend['RemarkName'] + '发送成功')
          time.sleep(.5)
    else:
      return


itchat.auto_login(enableCmdQR=True)
# itchat.login(enableCmdQR=True)
# 要一次性群发给所有好友，把下面的注释去掉（删除 # 号）
# send_wishes()

# 要群发给指定群的好友，把下面的注释去掉（删除 # 号）
# 括号里面传入参数，例如 send_special_wishes('b')，传入'b'，就是群发给 群聊为 「b」的好友

entry()
print('end')
# 当然可以一次性发几个群的好友
# send_special_wishes('a')
# send_special_wishes('b')
