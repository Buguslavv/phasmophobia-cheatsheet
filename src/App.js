import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MainPage from './components/pages/main-page.component';
import VoiceLinesPage from './components/pages/voice-lines-page.component';
import AboutPage from './components/pages/about-page.component';
import ContactPage from './components/pages/contact-page.component';

import data from './phasmophobia-data/data.js';

import logo from "./images/ghost.svg";

const BG = "dark"; // primary, dark, light
const VARIANT = "dark"; // dark, light

// const reloadWindow = () => window.location.reload();


const WEBSITE_URL = "un0btanium.github.io/phasmophobia-cheatsheet/";

class App extends Component {


  	constructor(props) {
		super(props);

		let ghostNames = [];
		let ghostsByName = {};
		let selectedGhosts = {};
		let ghostHasEvidence = {};
		let selectedEvidence = {};
		let remainingEvidence = {};
		// TODO ignored evidence feature (right mouse click to rule out evidence and ghosts)
		// TODO add tooltip info for each ghost (copy ingame texts)

		for (let ghost of data.ghosts) {
			selectedGhosts[ghost.name] = false;
			ghostsByName[ghost.name] = ghost;
			ghostNames.push(ghost.name);
		}

		let sortAlphabetically = (a, b) => {
			if(a < b) { return -1; }
			if(a > b) { return 1; }
			return 0;
		}
		ghostNames.sort(sortAlphabetically);
		data.voicelines.general.sort(sortAlphabetically);
		data.voicelines.ouija.sort(sortAlphabetically);
		data.voicelines.spiritbox.sort(sortAlphabetically);
		
		for (let evidence of data.primaryevidence) {
			selectedEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}
		
		for (let evidence of data.secondaryevidence) {
			selectedEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}
		

		for (let ghostName of ghostNames) {
			ghostHasEvidence[ghostName] = {};
			for (let evidence of ghostsByName[ghostName].evidence) {
				ghostHasEvidence[ghostName][evidence] = true;
			}
		}
		




		this.onEvidenceClick = this.onEvidenceClick.bind(this);
		this.toggleSetting = this.toggleSetting.bind(this);
		this.resetSelected = this.resetSelected.bind(this);

		this.state = {
			showAllSecondaryEvidence: false,

			data: data,

			ghostNames: ghostNames,
			ghostsByName: ghostsByName,

			selectedGhosts: selectedGhosts,
			selectedEvidence: selectedEvidence,
			remainingEvidence: remainingEvidence,

			selectedGhostAmount: 0,
			selectedEvidenceAmount: 0,
			selectedSecondaryEvidenceAmount: 0,

			ghostHasEvidence: ghostHasEvidence,
			
			onEvidenceClick: this.onEvidenceClick,
			toggleSetting: this.toggleSetting,
			resetSelected: this.resetSelected

		};

	}

  	render() {

		return (
			<Router>
				<div className="full-screenable-node">
					<Navbar bg={BG} variant={VARIANT} expand="xl" style={{ boxShadow: '0px 2px 5px #000000'}}>
						<Navbar.Brand style={{ marginLeft: "15%"}}>
							<a href={"http://" + WEBSITE_URL}>
								<img src={logo} width="35" height="35" alt="Logo" />
								<b>{' Phasmophobia CheatSheet'}</b>
							</a>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "10%"}}>
							<Nav className="mr-auto">
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/ghostsandevidence"><b>Ghosts & Evidence</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/voicelines"><b>Voicelines</b></Nav.Link>
							</Nav>

							<Nav>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/about"><b>About</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/contact"><b>Contact</b></Nav.Link>
								<Navbar.Text style={{ color: "rgb(223, 105, 26)", marginLeft: "20px"}}><b>Patch <i>Post Launch Update #1</i></b></Navbar.Text>
								{/* <Form inline style={{marginLeft: "20px"}}><Form.Check id="toggleIsFullScreen" type="checkbox" className="custom-switch" custom="true" label="Go Fullscreen" checked={this.state.isFullScreen} onChange={(e) => this.toggleSetting("isFullScreen")} /></Form> */}
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/phasmophobia-cheatsheet/ghostsandevidence" render={(props) => <MainPage {...props}
								{...this.state}
							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/voicelines" render={(props) => <VoiceLinesPage {...props}
								{...this.state}
							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/about" render={(props) => <AboutPage {...props}
						
							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/contact" render={(props) => <ContactPage {...props}
						
							/>}
						/>
						<Route render={(props) => <MainPage {...props}
								{...this.state}
							/>}
						/>
					</Switch>
				</div>
			</Router>
		);
	}

	/* Settings */

	preventEvent(e) {
		e.preventDefault();
	}

	toggleSetting(key) {
		localStorage.setItem(key, !this.state[key]);
		this.setState({
			[key]: !this.state[key]
		});
	}



	/* Grid */
	
	onEvidenceClick(e, evidence) {
		e.preventDefault();

		if (e.type === 'click') {
			let selectedEvidence = {...this.state.selectedEvidence};
			selectedEvidence[evidence] = !selectedEvidence[evidence];

			let selectedEvidenceAmount = 0;
			let selectedSecondaryEvidenceAmount = 0;
			for (let e in selectedEvidence) {
				if (selectedEvidence[e] === true) {
					selectedEvidenceAmount++;
					if (this.state.data.secondaryevidence.includes(e)) {
						selectedSecondaryEvidenceAmount++;
					}
				}
			}

			let selectedGhosts = {};
			let selectedGhostAmount = 0;
			let remainingEvidence = {};
			for (let ghost of this.state.data.ghosts) {
				let ghostFitsAllEvidence = true;
				for (let e in selectedEvidence) {
					if (selectedEvidence[e]) {
						if (!ghost.evidence.includes(e)) {
							ghostFitsAllEvidence = false;
							break;
						}
					}
				}

				if (ghostFitsAllEvidence) {
					selectedGhosts[ghost.name] = true;
					selectedGhostAmount++;
					for (let e of ghost.evidence) {
						remainingEvidence[e] = true;
					}
				} else {
					selectedGhosts[ghost.name] = false;
				}
			}

			console.log(remainingEvidence)

			this.setState({
				selectedGhosts: selectedGhosts,
				selectedEvidence: selectedEvidence,
				remainingEvidence: remainingEvidence,
				
				selectedGhostAmount: selectedGhostAmount,
				selectedEvidenceAmount: selectedEvidenceAmount,
				selectedSecondaryEvidenceAmount: selectedSecondaryEvidenceAmount
			});
		}
	}

	resetSelected() {
		let selectedGhosts = {};
		let selectedEvidence = {...this.state.selectedEvidence};
		let remainingEvidence = {};

		for (let ghost of data.ghosts) {
			selectedGhosts[ghost.name] = false;
		}

		for (let evidence of data.primaryevidence) {
			selectedEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}
		
		for (let evidence of data.secondaryevidence) {
			selectedEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}
		
		
		this.setState({
			selectedGhosts: selectedGhosts,
			selectedEvidence: selectedEvidence,
			remainingEvidence: remainingEvidence,
			
			selectedGhostAmount: 0,
			selectedEvidenceAmount: 0,
			selectedSecondaryEvidenceAmount: 0
		});
	}

}

export default withRouter(App);