const friends = [
  {
    name: "Сережа",
    comment: "Поболтаем?"
  },
  {
    name: "Петр",
    comment: "Давайте"
  },
  {
    name: "Ольга",
    comment: "Ребята как сходили"
  }
];

const listElement = document.getElementById('list');
const nameInput = document.getElementById('neme-input');
const commentInput = document.getElementById('comment-input');
const addCommentButton = document.getElementById('add-comment-button');


function renderFriends() {
  let frendsHtml = "";

  friends.forEach((friend) => {
    frendsHtml += `
        <li class="friend">
            <p>${friend.name}</p>
            <div class="comments">
                <p class="comment">${friend.comment}</p>
            </div>
        </li>
    `;
  });
  listElement.innerHTML = frendsHtml;
}

renderFriends();

addCommentButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name && comment) {
    friends.push({
    name: name,
    comment: comment
  });
  renderFriends();
  nameInput.value = "";
  commentInput.value = "";
  } else {
    alert('Пожалуйста заполните поля ввода');
  }
});