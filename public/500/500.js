/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const p404 = () => {
  let emojiEl;
  let emojiBlock4 = '';
  let emojiBlock0 = '';

  for (let i = 1; i < 13; i += 1) {
  // eslint-disable-next-line prefer-template, quotes
    emojiEl = "<span class='emoji emoji" + i + "'>&#1285" + getRandomInt(13, 67) + ";</span>";
    emojiBlock4 += emojiEl;
  }
  document.querySelectorAll('.emoji-wrap_4').forEach(
    (ele) => {
      ele.innerHTML = emojiBlock4;
    },
  );
  for (let j = 1; j < 15; j += 1) {
  // eslint-disable-next-line prefer-template, quotes
    emojiEl = "<span class='emoji emoji" + j + "'>&#1285" + getRandomInt(13, 67) + ";</span>";
    emojiBlock0 += emojiEl;
  }
  document.querySelectorAll('.emoji-wrap_0').forEach(
    (el) => {
      el.innerHTML = emojiBlock0;
    },
  );

  // eslint-disable-next-line prefer-const
  let ball = document.querySelectorAll('.emoji');
  ball.forEach(
    (el) => {
      el.onmousedown = (e) => {
        el.style.position = 'absolute';
        // eslint-disable-next-line no-use-before-define
        moveAt(e);
        document.body.appendChild(el);
        el.style.zIndex = 1000;

        const moveAt = (e) => {
          el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
          el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
        };
        document.onmousemove = (e) => {
          moveAt(e);
        };
        el.onmouseup = () => {
          document.onmousemove = null;
          el.onmouseup = null;
        };
      };
      el.ondragstart = () => false;
    },
  );
};

p404();
