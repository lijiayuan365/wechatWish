from flask import Flask, jsonify, request, render_template
import itchat
import time
import webbrowser

app = Flask(__name__)


webbrowser.open_new_tab('http://127.0.0.1:5000/#/warn')

# chatRooms = itchat.get_chatrooms()
# userList = itchat.get_friends()

# print(chatRooms)
# print(userList)
@app.route('/')
def hello_world():
  return render_template('index.html')
  # return 'Hello World!'

@app.route('/api/login',methods=['POST'])
def login():
  res = itchat.auto_login()
  # print(res)
  return jsonify({
    'code': 0,
    'data': 1,
    'msg': 'OK',
  })

@app.route('/api/getFriendList')
def get_user_list():
    # 获取全部客户的用户列表
  friends = itchat.get_friends()
  # base_path = 'headImages'
  # if not os.path.exists(base_path):
  #   os.mkdir(base_path)
  data = []
  for friend in friends:
    # avatar = itchat.get_head_img(userName=friend['UserName'])
    # img_name = friend['RemarkName'] if friend['RemarkName'] != '' else friend['NickName']  # if语句为真时取前面的值
    # img_file = os.path.join(base_path, img_name + '.jpg')  # 拼接路径
    # avatar = base64.b64decode(avatar)
    # print(img_file)
    # with open(img_file, 'wb') as file:
    #   file.write(avatar)
    data.append({
      'avatar': 'avatar',
      'remarkName': friend['RemarkName'],
      'remark': friend['RemarkName'] or friend['NickName'],
      'nickName': friend['NickName'],
      'sex': friend['Sex'],
      'userName': friend['UserName']
    })
  # print('demo')
  # t = {
  #   'room': chatRooms,
  #   'use': userList
  # }
  return jsonify({
    'data': data,
    'code': 0,
    'msg': 'OK'
  })


@app.route('/api/getChatRooms')
def get_chat_room():
  chatRooms = itchat.get_chatrooms()
  data = []
  for room in chatRooms:
    data.append({
      'nickName': room['NickName'],
      'userName': room['UserName']
    })
  return jsonify({
    'code': 0,
    'data': data,
    'msg': 'OK'
  })


@app.route('/api/getRoomFriend')
def get_room_friend():
  roomName = request.args.get('roomName')
  itchat.get_chatrooms(update=True)
  chatrooms = itchat.search_chatrooms(name=roomName)
  chatroom = itchat.update_chatroom(chatrooms[0]['UserName'])
  friends = chatroom['MemberList']
  data = []
  for friend in friends:
    friend = itchat.search_friends(userName=friend['UserName'])
    if friend:
      data.append({
      'avatar': 'avatar',
      'remarkName': friend['RemarkName'],
      'remark': friend['RemarkName'] or friend['NickName'],
      'nickName': friend['NickName'],
      'sex': friend['Sex'],
      'userName': friend['UserName']
      })
  return jsonify({
    'data': data,
    'code': 0,
    'msg': 'OK'
  })

@app.route('/api/sendMsg', methods=['POST'])
def send_msg():
  params = request.get_json()
  msgs = params['msgs']
  for msg in msgs:
    itchat.send(msg['msg'], msg['userName'])
    time.sleep(1)
  return jsonify({
    'code': 0,
    'data': [],
    'msg': 'OK',
  })

if __name__ == '__main__':
  app.run()


def get_room_user(roomName):
  return jsonify()


def get_all_friend():
  return jsonify()
