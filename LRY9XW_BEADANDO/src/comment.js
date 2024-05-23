const comment = {
  name: '',
  comment: '',
}

const getCurrentArticle = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const article = urlParams.get('article');
  return article;
}

const saveCommentToLocalStorage = (comment) => {
  const currentArticle = getCurrentArticle();
  const comments = JSON.parse(localStorage.getItem(currentArticle)) || [];
  comments.push(comment);
  localStorage.setItem(currentArticle, JSON.stringify(comments));
}

const getCommentsForCurrentArticle = () => {
  const currentArticle = getCurrentArticle();
  const comments = JSON.parse(localStorage.getItem(currentArticle)) || [];

  return comments;
}

const displayComments = (comments) => {
  for (const comment of comments) {
    $('.comments > ul').append(`
      <li>
        <h3>${comment.name}</h3>
        <p>${comment.comment}</p>
      </li>
    `);
  }
}

$(document).ready(function () {
  const comments = getCommentsForCurrentArticle();

  // For testing purposes
  if (comments.length === 0) {
    saveCommentToLocalStorage({ name: 'Bence', comment: 'Ez egy komment' });
  }

  displayComments(comments);

  $('#comment-form').submit(function (event) {
    event.preventDefault();
    comment.name = $('#name').val();
    comment.comment = $('#comment').val();

    saveCommentToLocalStorage(comment);

    $('.comments').empty();
    displayComments(getCommentsForCurrentArticle());
  });

  $('#add-comment').click(() => {
    const modal = `
      <section class="modal-container">
        <div class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <form id="comment-form-modal">
              <label for="name-modal">Name:</label>
              <input type="text" id="name-modal" required>
              <label for="comment-modal">Comment:</label>
              <textarea id="comment-modal" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    `;

    // Append the modal to the body
    $('body').append(modal);

    // Open the modal when the add comment button is clicked
    $('.modal').css('display', 'block');

    // Close the modal when the close button is clicked
    $('.close').click(() => {
      $('.modal-container').remove();
    });

    // Save the comment when the form is submitted
    $('#comment-form-modal').submit(function (event) {
      event.preventDefault();
      comment.name = $('#name-modal').val();
      comment.comment = $('#comment-modal').val();

      saveCommentToLocalStorage(comment);

      $('.modal-container').remove();
      $('.comments > ul').empty();

      displayComments(getCommentsForCurrentArticle());
    });
  });
});