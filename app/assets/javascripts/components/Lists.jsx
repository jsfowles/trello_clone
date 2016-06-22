class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] };
  }

  componentWillMount() {
    $.ajax({
      url: `/boards/${this.props.boardId}/lists`,
      type: 'GET',
      dataType: 'JSON',
    }).done( lists => {
      this.setState({ lists });
    }).fail( data => {
      alert('Failed to grab board lists')
    });
  }

  addList(e) {
    e.preventDefault();
    $.ajax({
      url: `/boards/${this.props.boardId}/lists`,
      type: 'POST',
      data: { list: { name: this.refs.name.value } },
      dateType: 'JSON'
    }).done( list => {
      this.setState({ lists:[{...list}, ...this.state.lists ] });
    }).fail( data => {
      alert('List not saved.');
    });
  }

  render() {
    let lists = this.state.lists.map( list => {
      return(<h3>{list.name}</h3>);
    });
    return(
      <div>
          <form onSubmit={this.addList.bind(this)} ref='addList'>
            <input type='text' ref='name' placeholder='List Name' required />
            <input type='submit' className='btn' value='Add' />
          </form>
          {lists}
      </div>
    );
  }
}
