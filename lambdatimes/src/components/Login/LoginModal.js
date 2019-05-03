import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			username: '',
			password: ''
		};
	}

	toggle = () => {
		this.setState((prevState) => ({
			modal: !prevState.modal
		}));
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.login(this.state.username);
		this.setState({ username: '', password: '' });
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	login = (username) => {
		if (localStorage.getItem('username') !== '') {
			localStorage.setItem('username', username);
			window.location.reload();
		}
	};

	render() {
		return (
			<div>
				<Button color="secondary" onClick={this.toggle}>
					Log In
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Login Below</ModalHeader>
					<ModalBody>
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								placeholder="username"
								name="username"
								onChange={this.handleChange}
								value={this.state.username}
							/>
							<input
								type="password"
								placeholder="password"
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
							<Button color="primary">Login</Button>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default LoginModal;
