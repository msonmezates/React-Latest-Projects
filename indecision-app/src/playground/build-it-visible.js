let visibility = false;

const onButtonVisible = () => {
  visibility = !visibility;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h2>Visiblity toggle</h2>
      <button onClick={onButtonVisible}>{visibility ? 'Hide details' : 'Show details'}</button>
      {
        visibility && (
          <div>
            <p>This is a secret paragraph</p>
          </div>
        )
      }
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
}

renderApp();
