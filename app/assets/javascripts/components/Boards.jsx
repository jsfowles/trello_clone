class Boards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {boards: props.boards};
    }

    addBoard(board) {
      this.setState({ boards: [{...board}, ...this.state.boards] });
    }

    render() {
        let boards = this.state.boards.map( board => {
            return(<Board key={`board-${board.id}`} {...board} />);
        });

        return(
            <div>
              <NewBoard addBoard={this.addBoard.bind(this)} />
              {boards}
            </div>
        )
    }
}
