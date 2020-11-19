class Main {
    constructor() {
        this.setupListeners()

        window.gmap = new GoogleApi()
    }

    setupListeners() {
        var $form = document.querySelector('#place-search')
        $form.addEventListener('submit', this.handleSearch)

        document.addEventListener('place-results', this.handleSearchResults)
    }

    handleSearch(theEvent) {
        theEvent.preventDefault()
    
        var query = document.querySelector('[name="query"]').value
        // var location = document.querySelector('[name="location"]').value
    
        console.log('searching for ', query)
    
        var customEvent = new CustomEvent('place-search', {detail : {query: query}})
        document.dispatchEvent(customEvent)
    }

    handleSearchResults = (theEvent) => {
        //show list or grid of results below the map
        const results = theEvent.detail
        const resultsUl = document.querySelector('.results-grid')
        resultsUl.textContent = ''

        for (let r in results) {
            const resultInfo = results[r]

            const resultEl = document.createElement('li')
            resultsUl.appendChild(resultEl)

            const resultDiv = document.createElement('div')
            resultDiv.setAttribute('class', 'result-div')
            resultEl.appendChild(resultDiv)

            const dataDiv = document.createElement('div')
            dataDiv.setAttribute('class', 'info-box')
            resultDiv.appendChild(dataDiv)

            const nameDiv = document.createElement('div')
            nameDiv.setAttribute('class', 'name-box')
            dataDiv.appendChild(nameDiv)

            const categoryDiv = document.createElement('div')
            categoryDiv.setAttribute('class', 'category-div')
            dataDiv.appendChild(categoryDiv)

            const statsDiv = document.createElement('div')
            statsDiv.setAttribute('class', 'stats-div')
            dataDiv.appendChild(statsDiv)

            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', resultInfo.icon)
            resultDiv.appendChild(imgEl)



        }


    }
}



new Main()