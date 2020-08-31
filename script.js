document.addEventListener('DOMContentLoaded', () => {

  const socket = io('https://apprealnote.herokuapp.com');
  const editor = document.getElementById('note');

  socket.on('old', (data) => {
    editor.value = data
  });

  socket.on('message', (data) => {
    editor.value = data
  });

  editor.addEventListener('keyup', (event) => {
    socket.send(editor.value);
  });
});