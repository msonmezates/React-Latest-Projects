class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
  }
  handleToggleVisiblity() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Visiblity Toggle</h2>
        <button onClick={this.handleToggleVisiblity}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
        {this.state.visible && (
          <div>
            <p>This is a secret password</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
