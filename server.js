//firebase connect
// var admin = require("firebase-admin");

// var serviceAccount = require("D:\\Docs(D)\\zTemp\\prats\\p2p-chat-app-683b7-firebase-adminsdk-k0c5j-5bd436baea.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://p2p-chat-app-683b7-default-rtdb.firebaseio.com"
// });


var admin = require("firebase-admin");

var serviceAccount = {
  "type": "service_account",
  "project_id": "whatsapp-clone-62559",
  "private_key_id": "26db834f25f5de17e68fd350c2e606ec1b7c4908",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDHuqDP08Gv6l2h\nMKci3bzazsJMX5kUtRbtsR61c7n06LhAh4VQaKk1yNateVV/uv2MDwIjBdtXwBh2\nFL2c2nDn88YqrZKeF5TFEYZGB0S+i7oQlP7xKvHI81avp5RY7N+gRFdHTt3dz0Cf\n470oIWDbb550X3GpIvRrlTSAWWTQN+esKK9yJGJVPhelGwT67xf1gUggfKJgk3p0\ncV13njDMsyTtmIqBwBmHVTikHqs8a+YVbVTRtE+5zxlcRossLiKklcRCSpeOtFHR\nyTXNKESlAt5dNin81vRZpTxppPeBsoA3K07vxdXYMx3+kvvsf670J4dL2d5ky0vX\ndimMRUfnAgMBAAECggEAMSTJG8n5Tu0mU5qSjWAs71PPeBZPpso2FY8uxKvwdgPr\nDimqUlImTG8Z73463N5oM5Wfy3lN8qX3/tn0m8sd29zeBjNGL7MSrni05rc0IYRk\n6F6Y6kNMUcsaKcdcl5LVJWybYxbTPZgYyR6ytNSdrfCldvHjGCBbLrt8OxaD2T1w\njscj98aHtVAc1cwr3IcaYKQBD2L3Bm5Y6x4nQf9s2HMvKqEBOxPqqBL5g8oe620W\nBfXXtEDlVcM3oOay9AAH5tpUlAkE/uR4ZirXchyFy8c3092wb6gOzZSUYecOqGax\nXQ/OOdDNbR/1ZAe11BDkNTavDmTNsXPBfrgCs65RnQKBgQD17/9dvkZR0oRXGkC8\n0YMmBjgULxH05FJ1AJnCYy+uJRBD2F+lxgt37Agf11evz9C0KewREZNasWk2qMC+\nvkKyVIdAJpmgkfytu2uPT9okY+sdRe2kFQEop4CclOMmZVvuO28vYo0VBsdhWlgr\nkwcpiMW0vHmlqIbOjz05BAXb5QKBgQDP5qIScrbqc6F//n9aQbYyN/Uz24IWZGUq\nCcDRicnJ9iXftm9bRitN/6PY1VsWzP59LUl/2oEW9tCoZY2QYJGTv6ZRhembpiYf\nKOmZTDX1ATOjSpWqR12srlGl1RFP9NekQIE2dUHYk6zNYeR4Ki6j6iI2jvcf5OjZ\nWjOJBWTP2wKBgQCqoRkeU+37xL/Wors5hW6lSflMX5/otSRUUtda22/wNXzEZXFu\n1SmNyS+Vz9ThgKA+7zr+WKBQcvgZWRlo/R3PFgBETMOXeNHDQ14Lrw4c40nzJFoM\n1hnYt+XuPQof0IDol0m7qXdSmEJqU8EKclasxVzN2VnYykTFOPH0Bct+1QKBgQCY\nBxs1SlWgFHZg1oXiRnMpPeo8xaPXJAsmNoOdtpis6ya+9PVxVVqNawcxpLM7dSQT\n/W3l5K7JUCs9OSXQEg3icR76Nmahv1nZJ13LEAPU6dAM9JmFLzK896wVDD3grjaS\nkejrHcvMyBBxD8i2ZoI8sxXZt6nW1NnBN0jARgV2SQKBgQCKug4NwAnsYRZ8q+Tr\nkXo3rrYlsHneHhjS07tGbMdO9RznZrAFprWSdlnOXFPnHxCxIq642Tgtb48EU6wQ\nUb1BT9l7OPXqyE0YgmyahFz6YE6r+cKhnf2PAd4oV+UqXMGIpd8K0gn4i01bjLvP\nS/m8l6TkSUi8S7CpdgPF/7M1Xg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-s0giw@whatsapp-clone-62559.iam.gserviceaccount.com",
  "client_id": "100556298113453890404",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s0giw%40whatsapp-clone-62559.iam.gserviceaccount.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://whatsapp-clone-62559-default-rtdb.firebaseio.com"
});


const database = admin.database();
const usersRef = database.ref('/users');

const userChatRef = database.ref('/Chats');

usersRef.on('child_added', snapshot => {
    console.log('New data has been added to the database !');
});

// usersRef.on('child_changed', snapshot => {
//     console.log('Data has been changed !');
// });

// usersRef.on('child_removed', snapshot => {
//     console.log('Data has been removed !');
// });

// usersRef.on('value', snapshot => {

//     console.log('An event occured on the database !',snapshot);
// });

const express = require('express');
const cors=require('cors');
const app = express();
const host = process.env.HOST || '127.0.0.1'
const port = 8080

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/',(req,res)=>{
  res.send("hello"); 
});

const http= require('http').Server(app);
const io = require("socket.io")(http,{
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true        
    }
});

const peers={};

function findInfo(person,friend){
  //finds if a person in online and his peer is the paramter friend or not and returns result in an array
  result=[];
  let r_soc = io.sockets.connected[name2sid[person]];
  console.log(peers);
  let talking=peers[friend];

  console.log(talking);
  if(r_soc)
    result[0]="Online";
  if(talking === person)
    result[1]=1;  
//  usersRef.get((snapshot)=>console.log("get: ",snapshot.val()));
  return result;
};

/*
function findInfo(person,friend){
  //finds if a person in online and his peer is the paramter friend or not and returns result in an array
  result=[];
  usersRef.orderByChild('User_id').on('value', snapshot => {
    snapshot.forEach((data) => {
        // console.log('The ' + data.key + 'holds ' + data.val().last_name);
        if(data.val().User_id===person)
           {
            result[0]=data.val().status;
            result[1]=(friend===data.val().peer_id);
            // console.log("info obtained on ",person);
            return result;
           } 
      });        
    });
  return result;    
};
*/

function updatePeer(person,friend){
   //called whenever user clicks on a chat or sends a message to someone
   const peer={
       peer_id: friend
   };
   usersRef.child(person).update(peer);
   peers[person] = friend;
};

function make_chat_id(sender,recp){
    users=[sender,recp];
    users.sort();
    const id=String(users[0])+"*"+String(users[1]);   
    return id;
};


async function update_chats(chat_id,convo_id,status_msg){
    const status_info={
        status: status_msg
    };
    let keys = []
    userChatRef.child(chat_id).orderByKey().on('value', (snapshot) => {
        snapshot.forEach((data) => {
          // console.log("here");  
          if(data.val().status<status_msg){
            // userChatRef.child(chat_id).child(data.key).update(status_info); 
            keys.push(data.key);
            console.log("updated");
          }
        // console.log("value is",snapshot.val());
        });
      });
    
};

const name2sid = {};
const sid2name = {};

const online = {
    status: "Online"
   };

const offline = {
    status: "Offline"
};

io.on('connection', socket => {
  const id = socket.handshake.query.id
  console.log("id: ", id, " sid: ", socket.id, " status: ", socket.connected);

  socket.join(id)
  name2sid[id] = socket.id;
  sid2name[socket.id] = id;

  //update users info in database
  const newData = {
        User_id: id,
        socket_id: socket.id,
        status: "Online",
        peer_id: "NULL"
    };
    const updates = {};
    updates['/users/' + id] = newData;
    database.ref().update(updates);    
  //-----------------------------

  socket.on('send-message', ({ recipients, text ,id}) => {
    console.log("receivers =>", recipients);
    console.log("sender:=> ",id);
    //make sure sender is online && its peer is updated
    usersRef.child(id).update(online);
    let recp = recipients[0];
    updatePeer(id,recp);
    //-------------------------

    let r_soc = io.sockets.connected[name2sid[recp]];
    if(r_soc){
      // double tick
      usersRef.child(recp).update(online);//update receiver online 
      socket.emit("send-info", { status : 1 });
    }
    else{
      // single tick
      usersRef.child(recp).update(offline);
      console.log(recp + "is offline");
      socket.emit("send-info", { status : 0 });
    }

    //store the messages
    const chat_id=make_chat_id(id,recp);

    const d = new Date();
    let time = d.getTime();
    convo_id=time;

    let status_recv=findInfo(recp,id);
    console.log("--------> ", status_recv)
    let status_msg=0;

    if(status_recv[0]==='Online'){
        if(status_recv[1])
            status_msg=2; //blue tick
        else
            status_msg=1; //double tick
    }

    // console.log("convoRef: ",convoRef);
    const UserConvoRef=userChatRef+'/'+chat_id;
    console.log("chat-id: ",chat_id," convo id: ",convo_id);
    userChatRef.child(chat_id+'/'+convo_id).set({
        sender: id,
        receiver: recp,
        status: status_msg,
        text: text
    });   
    console.log("===============>>>>>> here");
    if(status_msg>0)
        update_chats(chat_id,convo_id,status_msg);    
    //------------------
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
    database.ref().update(updates); 
  })
});

http.listen(8080, () => {
  console.log('listening on *:8080');
});



// app.get('/get',(req,res)=>{
//     usersRef.orderByChild('first_name').on('value', snapshot => {
//         snapshot.forEach((data) => {
//             console.log('The ' + data.key + 'holds ' + data.val().last_name);
//             if(data.key==='119cs0174')
//                 res.send(data);
//           });        
//     });  
// });
app.post('/save_chat',(req,res)=>{
    const user_id = req.body.user_id;
    const recp=req.body.recp;
    const chat_id=make_chat_id(user_id,recp);
  
    const time = Date.now();
    var d=new Date();
    var datetime = d.toLocaleString();
    console.log("Date time: ",datetime);
    console.log("time: ",time);
    userChatRef.child(chat_id+'/'+time).set({
        sender: user_id,
        receiver: recp,
        status: req.body.status_msg,
        text: req.body.text,
        datetime: datetime
    });

    res.send("success");
});

//-------important api calls-------//
app.post('/chats',(req,res)=>{
   //retrieve all chats in between users
   console.log("/chats ", req.body);
   const user_id=req.body.user_id;
   const peer_id=req.body.peer_id;   

   const chat_id=make_chat_id(user_id,peer_id);
   
   const chats=new Array();
   userChatRef.child(chat_id).orderByKey().once('value', (snapshot) => {
    snapshot.forEach((data) => {
      console.log(data.val());  
      let obj={
          receiver: data.val().receiver,
          sender: data.val().sender,
          status: data.val().status,
          text: data.val().text           
      }
      chats.push(obj);
    //   console.log("chats r: ",chats); 
    });
    res.send(chats);
  });  
   //send chats in form of objects containing properties such as sender receiver text and status
});

app.post('/update_peer', (req, res) => {
     const user_id=req.body.user_id;
     const peer_id=req.body.peer_id;
     updatePeer(user_id,peer_id);
     res.send("peer updated");
});

app.get('/active_users',(req,res)=>{
   res.send(OnlineUsers());
});

function OnlineUsers() {
    let users_online=0;
    let usrs = []
    for (const id in name2sid) {
        let r_soc = io.sockets.connected[name2sid[id]];
        if(r_soc){
          users_online+=1;  
          usrs.push(id);
        }
        else
           usersRef.child(id).update(offline);   
      }
    console.log("users online are: ",users_online);  
    return usrs;
};
  
// setInterval(OnlineUsers, 1500);



// app.listen(port, () => {
//   console.log(`App is listening to port ${port}`);
// });

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

