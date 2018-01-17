'use strict';

var visibility = false;

var onButtonVisible = function onButtonVisible() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Visiblity toggle'
    ),
    React.createElement(
      'button',
      { onClick: onButtonVisible },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'This is a secret paragraph'
      )
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
