const text = 'Lydia Miligkou is a visual artist from Athens, GR.';
const el = document.getElementById('aboutText');
let i = 0;

function type() {
  if (i < text.length) {
    el.textContent += text[i];
    i++;
    setTimeout(type, 52);
  }
}

setTimeout(type, 600);
