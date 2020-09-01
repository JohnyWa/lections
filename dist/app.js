const socket = io('ws://localhost:5050');

const refs = {
  sendBtnRef: document.getElementById('send-btn'),
  inputRef: document.getElementById('input-id'),
  listRef: document.getElementById('list-box-id'),
};

const appendMessage = ({ author, message, date, userId}) => {
  const currDate = new Date(date);
  let currClass = "list-item";

  if(userId === socket.id) {
    currClass += " own-message";
  }

  const html = `
    <li class="${currClass}">
        <div>
            <b>User:</b>${author}
            <span class="time-box">
                (${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()})
            </span>
            <div>${message}</div>
        </div>
    </li>
  `;

  refs.listRef.insertAdjacentHTML('beforeend', html);
};

const user = prompt("Enter your name please") || "Hidden user";

socket.emit("user/joinRooms", user);

socket.on("user/joinSuccess", data => {
  console.log("user/joinSuccess:   ", data)
});

socket.on("room/userJoined", data => {
  console.log("room/userJoined:   ", data)
});

socket.on("user/connected", data => {
  data.map(message => appendMessage(message))
});

socket.on("chat/newMessage", appendMessage);

refs.sendBtnRef.addEventListener("click", () => {
  socket.emit("chat/newMessage", refs.inputRef.value);

  refs.inputRef.value = '';
});
