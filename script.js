const container = document.querySelector('.before-after-container');
const after = document.querySelector('.after');
const divider = document.querySelector('.divider');

let isDragging = false;

const updatePosition = (x) => {
  const rect = container.getBoundingClientRect();
  let position = ((x - rect.left) / rect.width) * 100;
  position = Math.max(0, Math.min(100, position));
  after.style.clipPath = `inset(0 0 0 ${position}%)`;
  divider.style.left = `${position}%`;
};

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  updatePosition(e.clientX);
});
container.addEventListener('mousemove', (e) => {
  if (isDragging) updatePosition(e.clientX);
});
window.addEventListener('mouseup', () => {
  isDragging = false;
});

container.addEventListener('touchstart', (e) => {
  updatePosition(e.touches[0].clientX);
});
container.addEventListener('touchmove', (e) => {
  updatePosition(e.touches[0].clientX);
});
