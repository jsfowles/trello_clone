class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount() {
    //todo: make agax call to grab all the lists items
    // on success - set state of all the items
  }

  render() {
    let items = this.state.items.map( item => {
      // this should be a new components
      return(<h3>{item.name}</h3>)
    });
    return(
      <div>
        <h3>{this.props.name}</h3>
        <button className='btn red' onClick={() => this.props.deleteList(this.props.id)}>Delete</button>
        <hr />
        {items}
      </div>
    );
  }
}
