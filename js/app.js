(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App, AppWithoutRadium, components, routes;

console.log("React App Initialized");

components = require("./index.cjsx");

AppWithoutRadium = React.createClass({
  displayName: "App",
  isRoot: true,
  render: function() {
    return React.createElement(Radium.StyleRoot, null, React.createElement("div", null, this.props.children));
  }
});

App = Radium(AppWithoutRadium);

var basename = window.location.pathname.startsWith('/softrade-website') ? '/softrade-website' : '';
window.__basename__ = basename;

routes = React.createElement(Route, {
  "name": "app",
  "path": basename + "/",
  "component": App
}, React.createElement(IndexRoute, {
  "component": components.Home
}), React.createElement(Route, {
  "name": "team",
  "path": basename + "/team",
  "component": components.Team
}), React.createElement(Route, {
  "name": "projects",
  "path": basename + "/projects",
  "component": components.Projects
}));

ReactDOM.render(React.createElement(Router, {
  "routes": routes,
  "history": browserHistory
}), document.getElementById("app-container"));


},{"./index.cjsx":4}],2:[function(require,module,exports){
var Button, Centerize, LinkButton;

exports.FadeInBackground = React.createClass({
  displayName: "FadeInBackground",
  propTypes: {
    startColor: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      startColor: "0,0,0"
    };
  },
  render: function() {
    return React.createElement("div", {
      "className": "cf",
      "style": {
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + this.props.imageUrl + ")",
        backgroundSize: "cover"
      }
    }, React.createElement(Motion, {
      "defaultStyle": {
        x: 0
      },
      "style": {
        x: spring(1, [20, 20])
      }
    }, ((function(_this) {
      return function(value) {
        return React.createElement("div", {
          "className": "cf",
          "style": {
            backgroundColor: "rgba(" + _this.props.startColor + "," + (1 - value.x) + ")",
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0
          }
        }, _this.props.children);
      };
    })(this))));
  }
});

Centerize = React.createClass({
  displayName: "Centerize",
  render: function() {
    return React.createElement("div", {
      "style": {
        position: "relative",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0
      }
    }, React.createElement("div", {
      "className": "cf",
      "style": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "80vh",
        minWidth: "60%",
        "@media (max-width: 500px)": {
          minWidth: "90%"
        }
      }
    }, this.props.children));
  }
});

exports.Centerize = Radium(Centerize);

Button = React.createClass({
  displayName: "Button",
  clickHandler: function(e) {
    e.preventDefault();
    return this.props.clickHandler();
  },
  render: function() {
    var buttonStyle, defaultStyle, ref;
    defaultStyle = {
      padding: "0.5rem",
      fontSize: "0.8rem",
      margin: "0.5rem",
      border: "2px solid rgba(0,0,0,0.1)",
      borderRadius: "5px",
      outline: 0,
      ":hover": {
        cursor: "pointer",
        border: "2px solid rgba(0,0,0,0.4)"
      }
    };
    buttonStyle = update(defaultStyle, {
      $merge: ((ref = this.props) != null ? ref.style : void 0) || {}
    });
    return React.createElement("button", {
      "onClick": this.clickHandler,
      "style": buttonStyle
    }, this.props.children);
  }
});

exports.Button = Radium(Button);

LinkButton = React.createClass({
  displayName: "LinkButton",
  render: function() {
    var buttonStyle, defaultStyle, ref;
    defaultStyle = {
      color: "black",
      padding: "0.5rem",
      fontSize: "0.8rem",
      margin: "0.5rem",
      border: "2px solid rgba(0,0,0,0.1)",
      borderRadius: "5px",
      outline: 0,
      textDecoration: "none",
      ":hover": {
        cursor: "pointer",
        border: "2px solid rgba(0,0,0,0.4)"
      }
    };
    buttonStyle = update(defaultStyle, {
      $merge: ((ref = this.props) != null ? ref.style : void 0) || {}
    });
    return React.createElement("a", {
      "href": this.props.href,
      "style": buttonStyle
    }, this.props.children);
  }
});

exports.LinkButton = Radium(LinkButton);


},{}],3:[function(require,module,exports){
var Home, components;

components = require("../index.cjsx");

Home = React.createClass({
  displayName: "Home",
  render: function() {
    var style;
    style = {
      titleContainer: {
        width: "100%",
        height: "100vh",
        minHeight: "20rem",
        overflow: "hidden"
      },
      titleLogo: {
        height: "4rem",
        textAlign: "center"
      },
      titleWhite: {
        textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255, 0.2)",
        marginBottom: "3rem",
        color: "white"
      },
      subtitleWhite: {
        textAlign: "center",
        textAlign: "center",
        color: "white"
      },
      titleBlack: {
        textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255, 0.2)",
        marginBottom: "3rem",
        color: "black"
      },
      subtitleBlack: {
        textAlign: "center",
        textAlign: "center",
        color: "black"
      }
    };
    return React.createElement("div", null, React.createElement(components.Navigation, {
      "mode": "home"
    }), React.createElement("div", {
      "className": "cf",
      "style": style.titleContainer
    }, React.createElement(components.elements.FadeInBackground, {
      "imageUrl": (window.__basename__ || "") + "/img/landingBackground1.jpg"
    }, React.createElement(components.elements.Centerize, null, React.createElement("div", {
      "className": "cf",
      "style": style.titleLogo
    }, React.createElement("img", {
      "style": {
        height: "100%"
      },
      "src": (window.__basename__ || "") + "/img/SoftradeLogoWhite.png"
    })), React.createElement("h3", {
      "style": style.subtitleWhite
    }, "We help transform businesses by building powerful\ncustomized software products using cutting edge technologies.")))), React.createElement("div", {
      "className": "cf",
      "style": style.titleContainer
    }, React.createElement(components.elements.FadeInBackground, {
      "imageUrl": (window.__basename__ || "") + "/img/webBackground1.jpg"
    }, React.createElement(components.elements.Centerize, null, React.createElement("h2", {
      "style": style.titleWhite
    }, "Web \& Mobile"), React.createElement("h3", {
      "style": style.subtitleWhite
    }, "Our expertise with the web, enables us to deliver top-notch\nonline experiences, bringing your brand alive and helping you\nengage effectively with your users.")))), React.createElement("div", {
      "className": "cf",
      "style": style.titleContainer
    }, React.createElement(components.elements.FadeInBackground, {
      "imageUrl": (window.__basename__ || "") + "/img/platformsBackground1.jpg"
    }, React.createElement(components.elements.Centerize, null, React.createElement("h2", {
      "style": style.titleWhite
    }, "Platforms"), React.createElement("h3", {
      "style": style.subtitleWhite
    }, "Our experience with data has enabled us to engineer complex\nsystems at scale. Our systems have processed millions of\npayments and enabled thousands of businesses to change the way\nthey work.")))), React.createElement("div", {
      "className": "cf",
      "style": style.titleContainer
    }, React.createElement(components.elements.FadeInBackground, {
      "imageUrl": (window.__basename__ || "") + "/img/experienceBackground1.jpg"
    }, React.createElement(components.elements.Centerize, null, React.createElement("h2", {
      "style": style.titleWhite
    }, "28 Years of Experience"), React.createElement("h3", {
      "style": style.subtitleWhite
    }, "We have been around since the mainframe days and we understand\ncomputers deeply. Our habit of constantly learning and adapting\nthe latest technologies has enabled our customers to stay\nahead of the curve for decades now.")))), React.createElement("div", {
      "className": "cf",
      "style": style.titleContainer
    }, React.createElement(components.elements.FadeInBackground, {
      "imageUrl": (window.__basename__ || "") + "/img/contactBackground1.jpg"
    }, React.createElement(components.elements.Centerize, null, React.createElement("h3", {
      "style": style.subtitleWhite
    }, "Want to collaborate? Write to us!"), React.createElement("div", {
      "style": {
        textAlign: "center"
      }
    }, React.createElement(components.elements.LinkButton, {
      "href": "mailto:contact@softrade.in",
      "style": {
        backgroundColor: "white"
      }
    }, React.createElement("i", {
      "className": "fa fa-envelope fa-lg"
    }), React.createElement("span", {
      "style": {
        marginLeft: "0.25rem"
      }
    }, " Email ")))))));
  }
});

module.exports = Radium(Home);


},{"../index.cjsx":4}],4:[function(require,module,exports){
exports.Home = require("./home/home.cjsx");

exports.Navigation = require("./navigation/navigation.cjsx");

exports.PageLayout = require("./pageLayout/pageLayout.cjsx");

exports.Team = require("./team/team.cjsx");

exports.Projects = require("./projects/projects.cjsx");

exports.elements = require("./elements/elements.cjsx");


},{"./elements/elements.cjsx":2,"./home/home.cjsx":3,"./navigation/navigation.cjsx":5,"./pageLayout/pageLayout.cjsx":6,"./projects/projects.cjsx":7,"./team/team.cjsx":8}],5:[function(require,module,exports){
var Navigation;

module.exports = Navigation = React.createClass({
  displayName: "Navigation",
  render: function() {
    if (this.props.mode === "home") {
      return React.createElement("nav", {
        "className": "cf",
        "style": {
          height: "60px",
          width: "100%",
          margin: 0,
          padding: 0,
          textAlign: "center",
          position: "fixed",
          backgroundColor: "rgba(255,255,255,0.95)",
          color: "black",
          zIndex: 99
        }
      }, React.createElement(Link, {
        "to": "/"
      }, React.createElement("img", {
        "src": (window.__basename__ || "") + "/img/SoftradeLogoWithText.png",
        "style": {
          height: "54px",
          padding: "3px",
          width: "auto"
        }
      })));
    } else {
      return React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
        "to": "/"
      }, " Home ")), React.createElement("li", null, React.createElement(Link, {
        "to": "/team"
      }, " Team ")), React.createElement("li", null, React.createElement(Link, {
        "to": "/projects"
      }, " Projects "))));
    }
  }
});


},{}],6:[function(require,module,exports){
var PageLayout, components;

components = require("../index.cjsx");

module.exports = PageLayout = React.createClass({
  displayName: "PageLayout",
  render: function() {
    return React.createElement("div", null, React.createElement(components.Navigation, {
      "mode": "normal"
    }), this.props.children);
  }
});


},{"../index.cjsx":4}],7:[function(require,module,exports){
var Projects, components;

components = require("../index.cjsx");

module.exports = Projects = React.createClass({
  displayName: "Projects",
  render: function() {
    return React.createElement(components.PageLayout, null, "We have done some absolutely incredible projects!");
  }
});


},{"../index.cjsx":4}],8:[function(require,module,exports){
var Team, components;

components = require("../index.cjsx");

module.exports = Team = React.createClass({
  displayName: "Team",
  render: function() {
    return React.createElement(components.PageLayout, null, "We have an awesome team!");
  }
});


},{"../index.cjsx":4}]},{},[1]);
