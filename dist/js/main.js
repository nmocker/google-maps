"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    _defineProperty(this, "handleSearchResults", function (theEvent) {
      //show list or grid of results below the map
      var results = theEvent.detail;
      var resultsUl = document.querySelector('.results-grid');
      resultsUl.textContent = '';

      for (var r in results) {
        var resultInfo = results[r];
        var resultEl = document.createElement('li');
        resultsUl.appendChild(resultEl);
        var resultDiv = document.createElement('div');
        resultDiv.setAttribute('class', 'result-div');
        resultEl.appendChild(resultDiv);
        var dataDiv = document.createElement('div');
        dataDiv.setAttribute('class', 'info-box');
        resultDiv.appendChild(dataDiv);
        var nameDiv = document.createElement('div');
        nameDiv.setAttribute('class', 'name-box');
        dataDiv.appendChild(nameDiv);
        var categoryDiv = document.createElement('div');
        categoryDiv.setAttribute('class', 'category-div');
        dataDiv.appendChild(categoryDiv);
        var statsDiv = document.createElement('div');
        statsDiv.setAttribute('class', 'stats-div');
        dataDiv.appendChild(statsDiv);
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', resultInfo.icon);
        resultDiv.appendChild(imgEl);
      }
    });

    this.setupListeners();
    window.gmap = new GoogleApi();
  }

  _createClass(Main, [{
    key: "setupListeners",
    value: function setupListeners() {
      var $form = document.querySelector('#place-search');
      $form.addEventListener('submit', this.handleSearch);
      document.addEventListener('place-results', this.handleSearchResults);
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(theEvent) {
      theEvent.preventDefault();
      var query = document.querySelector('[name="query"]').value; // var location = document.querySelector('[name="location"]').value

      console.log('searching for ', query);
      var customEvent = new CustomEvent('place-search', {
        detail: {
          query: query
        }
      });
      document.dispatchEvent(customEvent);
    }
  }]);

  return Main;
}();

new Main();
//# sourceMappingURL=main.js.map
