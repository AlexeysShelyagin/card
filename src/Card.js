import React, { Component } from 'react';
import './App.css';
import './material.min.css';


class Card extends Component {
  render () {
    var card_BG = {background: "url(" + this.props.source + ") center / cover"};
    return (
      <div class="card">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title" style={card_BG}>
            <h2 class="mdl-card__title-text">{this.props.name}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </button>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">+</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
