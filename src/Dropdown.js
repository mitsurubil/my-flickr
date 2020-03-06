import React, { Component } from 'react';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            showOptions: false,
        }
        this.showOptions = this.showOptions.bind(this);
        this.closeOptions = this.closeOptions.bind(this);
    }

    showOptions(event) {
        event.preventDefault();

        this.setState({ showOptions: true }, () => {
            document.addEventListener('click', this.closeOptions);
        });
    }

    closeOptions(event) {

        if (!this.dropdown.contains(event.target)) {

            this.setState({ showOptions: false }, () => {
                document.removeEventListener('click', this.closeOptions);
            });
        }
    }

    state = { active: false }


    handleClick() {
        this.setState({
            condition: !this.state.condition
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.showOptions}>Tags
                <i onClick={() => this.handleClick()} className={this.state.condition ? "chevron" : "chevron down"}></i>
                </button>
                {
                    this.state.showOptions
                        ? (
                            <div
                                className="options"
                                ref={(element) => {
                                    this.dropdown = element;
                                }}
                            >
                                <button> Option 1 </button>
                                <button> Option 2 </button>
                                <button> Option 3 </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default Dropdown;