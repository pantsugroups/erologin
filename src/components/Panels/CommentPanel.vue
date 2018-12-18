<template>
<div class="panel comment-panel">
        <div class="panel-title">书评区</div>
        <div class="comment-send">
            <div class="respond">
                <textarea rows="8" name="text" id="textarea" class="textarea" placeholder="快来写下成为女装大佬的宣言吧！" required=""></textarea>
                <a class="send" id="submit-comment">
                    <svg style="width:50px;height:20px" viewBox="0 0 24 24">
                        <path fill="#666666" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="comment-list">
            <div class="comment-item" v-for="comment in comments">
                <div class="avatar">
                    <img v-bind:src="comment.avatar" alt="">
                </div>
                <div class="content">
                    <div class="author"> <a>{{ comment.author }}</a>
                        <span class="floor" v-bind:style="comment.style">{{ comment.floor }}</span>
                        <span class="bio">{{ comment.bio }}</span>
                    </div>
                    <div class="comment-text" v-html="comment.content">
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'CommentPanel',
    props:['comments'],
    data () {
        return {
            'title':'goushi'
        };
    }
}
</script>
<style scope lang="less">
.comment-panel{
    margin-top:10px;
    .comment-send{
        .reply-info {
            transition: all 0.25s;
            height: 34px;
            padding: 0 20px;
            justify-content: space-between;
            background-color: #78c755;
            color: white;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            font-size: 13px;
            display: flex;
            align-items: center;
        }
        .reply-info .left{
            color: white;
            text-shadow: 1px 1px 10px rgba(0,0,0,0.4);
        }
        .reply-info span{
            color: white;
        }
        .reply-info-closed {
          height: 0;
          opacity: 0;
          padding: 0 45px;
        }
        .respond {
          display: flex;
              align-items: flex-end;
              flex-direction: column;
          padding: 0;
          margin: 0;
          
        }
        .respond .tooltip{
            width:100%;
        }
        #comment-form:hover .extra {
            margin-right:80px;
        }
        textarea {
          width: 100%;
          resize: none;
          max-width: 100%;
          box-sizing: border-box;
          border: none;
          -webkit-appearance: none;
          padding: 15px 20px;
          outline: none;
          border-bottom:1px solid #d8d8d8;
          font-size: 13px;
          background-color: white;
          color: #555;
          background-size:135px;
          transition: all 0.5s,background-position 0.3s,background-size 0.3s;
          background-image:url('../../assets/kongou.png');
          background-repeat: no-repeat;
          background-position: right bottom;
        }
        #comment-form:hover .send-comment textarea {
            background-position: right 70px bottom;
            background-size: 100px;
        }
        .send {
          background-color: #bdeaff;
          margin-right:10px;
          cursor:pointer;
          display: flex;
          height:50px;
          width: 50px;
          border-radius: 50%;
          flex-direction: column;
          box-shadow: 0px 0px 15px rgba(0,0,0,0.06);
              margin: -25px 15px;
            z-index: 1;
          padding: 0;
          align-items: center;
          animation:roll-out 0.3s;
          animation-fill-mode: forwards;
          justify-content: center;
          opacity:0;
          color: #5d5c5c;
          transition: all 0.25s;
        }
        #comment-form:hover .send {
          animation:roll-in 0.3s;
          animation-fill-mode: forwards!important;
        }
        .send .mdi {
          color: inherit;
          transition: all 0.25s;
        }
        .send:hover {
         background-color: #abe4ff;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1), inset 0px 0px 0px rgba(0, 0, 0, 0.1);
          color: #000;
        }
        .send:active {
          background-color: #abe4ff;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), inset 0px 0px 15px rgba(0, 0, 0, 0.1);
          color: #000;
        }
        .send:active .mdi {
          margin-left: 2px;
          margin-right: -2px;
        }
        &:hover{
            .textarea {
                background-position: right 70px bottom;
                background-size: 100px;
            }
            .send {
              animation:roll-in 0.3s;
              animation-fill-mode: forwards!important;
            }
        }
    }
    .comment-item{
        margin-top:20px;
        display:flex;
        .avatar img{
            border-radius:50%;
            width:65px;
            height:65px;
        }
        .content {
            width: 100%;
            padding: 0 15px;
        }
        
        span{
            font-size: 14px;
            margin-left:5px;
            color: #969696;
        }
        .floor{
            background-color: #4ba5f5;
            padding: 1px 8px;
            border-radius: 100px;
            color: #ffffff;
        }
        .author {
            font-size: 16px;
            color: #333;
        }
        
        .comment-text{
            font-size:14px;
            line-height:1.5;
            color:#555;
        }
    }
}
@keyframes roll-in
{
from {opacity:0;transform:scale(0.5);}
to {opacity:1;transform:scale(1);}
}
@keyframes roll-out
{
from {opacity:1;transform:scale(1);}
to {opacity:0;transform:scale(0.5);}
}
</style>