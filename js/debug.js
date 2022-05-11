(() => {
  document.querySelector('[js-modal-form]').addEventListener('submit', e => {
    console.log('debug found');
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

    e.currentTarget.reset();
  });
})();
