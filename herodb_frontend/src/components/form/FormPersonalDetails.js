import React, {Component} from 'react';
import Mui from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	state = {
		multiline: 'Controlled',
	};

	render() {
		const {values, handleChange} = this.props;
		return (
			<Mui>
				<React.Fragment>
					
					<AppBar title="Enter Your Heroes Information" align="center" />
					<TextField
						hintText="EX: amime title, comic book title "
						floatingLabelText="Series"
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
						style={styles.textField}
					/>
					<br/>
					<TextField
						hintText="manga, an amime, a cartoon, etc"
						floatingLabelText="Medium"
						onChange={handleChange('city')}
						defaultValue={values.city}
						style={styles.textField}
					/>
					<br/>
					<TextField
						id="standard-multiline-flexible"
						label="Multiline"
						multiline
						rows="4"
						margin="normal"
						hintText="Enter Hero Bio"
						floatingLabelText="Bio"
						onChange={handleChange('bio')}
						defaultValue={values.bio}
						style={styles.textField}
					/>
					<br/>
					<div style={{marginLeft: "40%"}}>
						<RaisedButton
							label="Continue"
							primary={true}
							style={styles.button}
							onClick={this.continue}
						/>
						<RaisedButton
							label="Previous"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
					</div>
				</React.Fragment>
			</Mui>
		);
	}
}

const styles = {
	textField: {
		marginLeft: '40%',
		marginRight: 'auto',
		paddingBottom: 0,
		marginTop: 0,
		fontWeight: 500
	},
	button: {
		margin: 15,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
}

export default FormPersonalDetails;