
import React, { Component } from 'react';


interface BlurState {
  isOpen: boolean;
}

export class BlurExample extends Component<{}, BlurState> {
  timeOutId: any;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;
  }

  onClickHandler = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // Cerramos la ventana emergente en el siguiente tick usando setTimeout.
  // Esto es necesario porque primero debemos comprobar 
  // si otro hijo del elemento ha recibido el foco ya que
  // el evento de desenfoque se dispara antes del nuevo evento de foco.
  onBlurHandler = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  // Si un hijo recibe el foco, no cerrar la ventana emergente.
  onFocusHandler = () => {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React nos ayuda burbujeando los eventos de desenfoque
    // y enfoque hacia los padres.
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}