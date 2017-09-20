import React from 'react';
import ReactDOM from 'react-dom';

var BlockLvl1Top = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl1Top">
      <BlockLvl3_1 />
      <BlockLvl3_2 />
      </div>
    );
  }
});

var BlockLvl1Mid = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl1Mid">
      <BlockLvl3_3 />
      <BlockLvl2 />
      </div>
    );
  }
});

var  BlockLvl1Bot = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl1Bot">
      <BlockLvl3_6 />
      <BlockLvl3_7 />
      </div>
    );
  }
});

var BlockLvl2 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl2">
      <BlockLvl3_4 />
      <BlockLvl3_5 />
      </div>
    );
  }
});

var BlockLvl3_1 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_1">
      </div>
    );
  }
});

var BlockLvl3_2 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_2">
      <div className="wrapper">
      <i className="fa fa-bars" aria-hidden="true"></i>
      <h2>Ali Sayed's<br/> <b>Web Designing</b><br/> Prodject</h2>
      <p>
	      Lorem ipsum dolor sir amet, consectituer adipiscing elit, sed diam
	      nonummy nibh euismod tincidunt ut laoreet dolore
	      </p>
	      <p>
	      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ul aliquip
	      ex ea commodo consequal. Duis autem vel eum iriure dol.
	      </p>
      </div>
      </div>
    );
  }
});

var BlockLvl3_3 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_3">
      	<div className="layer">
      	<div className="wrapper">
      	<h2>Drawing <b>Scketch</b></h2>
	    <p>
	    Lorem ipsum dolor sir amet, consectituer adipiscing elit, sed diam
	    nonummy nibh euismod tincidunt ut laoreet dolore
	    </p>
	    <h2>Making <b>Design</b></h2>
	    <p>
	    Lorem ipsum dolor sir amet, consectituer adipiscing elit, sed diam
	    nonummy nibh euismod tincidunt ut laoreet dolore
	    </p>
	    <h2>Developing <b>Product</b></h2>
	    <p>
	    Lorem ipsum dolor sir amet, consectituer adipiscing elit, sed diam
	    nonummy nibh euismod tincidunt ut laoreet dolore
	    </p>
	    </div>
	    </div>
      </div>
    );
  }
});

var BlockLvl3_4 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_4">
      	<div className="layer">
      	<div className="wrapper">
      	<h2>Best <b>Starting</b></h2>
	    <p>
	    Lorem ipsum dolor sir amet, consectituer adipiscing elit, sed diam
	    nonummy nibh euismod tincidunt ut laoreet dolore quis nostrud exerci tation ullamcorper suscipit lobortis nisl ul aliquip
	      ex ea
	    </p>
	    <div className="button_black">View Our History</div>
	    </div>
	    </div>
      </div>
    );
  }
});

var BlockLvl3_5 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_5">
      	<div className="layer">
      	<div className="wrapper">
      	<h2>Verified <b>Dummy</b></h2>
	    <p>
	    Lorem ipsum dolor sir amet, consectituer adipiscing elit, sed diam
	    nonummy nibh euismod tincidunt ut laoreet dolore quis nostrud exerci tation ullamcorper suscipit lobortis nisl ul aliquip
	      ex ea
	    </p>
	    <div className="button">Go To The Page</div>
	    </div>
	   	</div>
      </div>
    );
  }
});

var BlockLvl3_6 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_6">
      	<div className="layer">
      	<div className="wrapper">
      	<h2>This web page <b>Designeg by</b></h2>
      	<div className="author">
      	<h2><b>Ali Sayed</b></h2>
      	<p>Graphic Designer</p>
      	</div>
    	</div>
    	</div>
      </div>
    );
  }
});

var BlockLvl3_7 = React.createClass({
  render: function() {
    return (
      <div className="BlockLvl3_7">
      	<div className="layer">
      	<div className="wrapper">
      	<h2>Say <b>'Hello'</b></h2>
      	<div className="nameWrapper">
      	<input type="text" placeholder="Your Name" />
      	<input type="text" placeholder="Your Email" />
      	</div>
      	<textarea id="message" type="text" placeholder="Your Message Here ..."></textarea>
    	</div>
    	</div>
      </div>
    );
  }
});

var Page = React.createClass({
  render: function() {
    return (
      <div className="page">
      	<BlockLvl1Top />
      	<BlockLvl1Mid />
      	<BlockLvl1Bot />
      </div>
    );
  }
});

ReactDOM.render(
  <Page />,
  document.getElementById('app')
);