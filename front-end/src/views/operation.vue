<template>
<!--    <div  style="height: 100%">-->
      <div class="container">
        <div class="aside">
        <div>
          <el-radio v-model="sendType" label="1">通讯录</el-radio>
          <!--          <el-radio v-model="sendType" label="2">标签</el-radio>-->
          <el-radio v-model="sendType" label="3">群</el-radio>
        </div>
        <div class="user-list-area">
          <div class="choice-group" v-if="sendType !== '1'">
            <p class="tips">请选择群发的群</p>
            <el-select v-model="roomName" placeholder="请选择" @change="getRoomFriend">
              <el-option
                v-for="item in rooms"
                :key="item.userName"
                :label="item.nickName"
                :value="item.nickName">
              </el-option>
            </el-select>
          </div>
          <el-table
            ref="multipleTable"
            :data="friends"
            tooltip-effect="dark"
            max-height="500"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="50">
            </el-table-column>
            <el-table-column
              label="头像"
              width="80">
              <template slot-scope="scope">
                <img :src="avatar" alt="" width="50" height="50">
                <!--                <el-avatar :size="50" :src="scope.row.avatar" shape="square"></el-avatar>-->
              </template>
            </el-table-column>
            <el-table-column
              label="备注">
              <template slot-scope="scope">
                <div>{{scope.row.nickName}}</div>
                <div>({{scope.row.remarkName}})</div>
              </template>
            </el-table-column>
            <el-table-column label="群发备注">
              <template slot-scope="scope">
                <el-input v-model="scope.row.remark" placeholder="请输入内容" size="mini"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
  <el-container>
          <el-main>
            <p>请输入祝福语，%s 指代好友备注位置</p>
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="wish">
            </el-input>
            <p style="margin-top: 30px">测试结果</p>
            <div class="msg-box">
              <ul>
                <li v-for="item in testMsgList" class="msg-item">
                  发送给{{item.nickName}}({{item.remarkName}})的信息：{{item.msg}}
                </li>
              </ul>
            </div>
            <div class="btn-wrap">
              <el-button type="primary" @click="sendTest">测试发送</el-button>
              <el-button type="success" @click="sendTrue">正式发送</el-button>
            </div>
          </el-main>
        </el-container>
      </div>
<!--    </div>-->
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        roomName: '',
        rooms: [],
        sendType: '1',
        wish: '',
        avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        tableData: [
          {
            userName: '王小虎',
            avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
            remark: '王小虎',
            userId: 12,
          }, {
            userName: '王小虎',
            avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
            remark: '王小虎',
            userId: 34,
          },
          {
            userName: '王小虎',
            avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
            remark: '王小虎',
            userId: 45,
          }
        ],
        friends: [],
        sendPersons: [],
        testMsgList: [],
      }
    },
    components: {},
    created() {
      this.getUserList();
      this.getChatRooms();
    },
    computed: {},
    methods: {
      getUserList(param = {}) {
        let roomName = param.roomName;
        let tagName = param.tagName;

        this.$http.get('/api/getFriendList', {params: {roomName, tagName}}).then((res) => {
          let data = res.data.data;
          this.friends = data;
        })
      },
      getChatRooms() {
        this.$http.get('/api/getChatRooms').then((res) => {
          let data = res.data.data;
          this.rooms = data;

        })
      },
      getRoomFriend() {
        this.$http.get('/api/getRoomFriend',{params:{roomName:this.roomName}}).then((res) => {
          let data = res.data.data;
          this.friends = data;
        })
        console.log(this.roomName)
      },
      handleSelectionChange(val) {
        this.sendPersons = val;
      },
      sendTest() {
        if (!this.wish) {
          this.$alert('微信内容不能为空', '出错', {
            confirmButtonText: '确定',
          });
          return;
        }
        this.testMsgList = this.sendPersons.map((item) => {
          let msg = this.wish.replace('%s', item.remark);
          return {
            msg,
            nickName: item.nickName,
            remarkName: item.remarkName,
            userName: item.userName,
          }
        });
        // this.sendPersons.forEach((item)=>{
        //   this.testMsgList.push(`${this.wish}${item.remark}`)
        // })
      },
      sendTrue() {
        if (!this.wish) {
          this.$alert('微信内容不能为空', '出错', {
            confirmButtonText: '确定',
          });
          return;
        }
        this.$confirm('此操作将正式群发信息，请确保测试结果不会翻车, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          return this.$http.post('/api/sendMsg',{msgs:this.testMsgList})
        }).then((res)=>{
          console.log(res)
        });
      },
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex: 1;
  }

  .aside {
    flex-basis: 600px;
    padding: 20px;
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
  }

  .choice-group {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    /* justify-content: center; */
    align-items: center;
    /*background: #D3DCE6;*/
    color: #333;
  }

  .user-list-area {
    margin: 20px 0;
    /*background: white;*/
    border: 1px solid #DCDFE6;
    height: 90%;
  }

  .msg-box {
    padding-left: 10px;
    /*margin-top: 40px;*/
    background: white;
    border: 1px solid #DCDFE6;
    height: 300px;
    overflow-y: scroll;
    text-align: left;
    /*overflow-y: hidden;*/
  }

  .msg-item {
    padding-bottom: 5px;
    margin-bottom: 15px;
    border-bottom: #E9EEF3 solid 1px;
  }

  .btn-wrap {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /*justify-content: space-around;*/
  }

  .tips {
    font-size: 0.7rem;
    /*color: #B3C0D1;*/
  }


  /* body > .el-container {
    margin-bottom: 40px;
  } */
</style>
