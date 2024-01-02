class SearchForm extends HTMLElement {
  constructor () {
    super()
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        search-form {
            min-height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            row-gap: 5px;
        }
        form {
            display: flex;
            gap: 5px;
        }
        form input#search-input {
            padding: 5px 5px;
            font-size: 1rem;
            min-height: 25px; max-height: 25px;
            min-width: 50px; max-width: 200px;
        }
        form input#search-submit {
            padding: 0 5px;
        }

        
        @media (max-width:600px) {
          search-form {
              flex-direction: column-reverse;
              text-align: left !important;
              align-items: flex-start;
              padding: 5px 0;
              border-bottom: 0.5px solid gray;
          }
          search-form .navbar-top {
              position: relative;
              display: flex;
              width: 100%;
              gap: 5px;
          }
          search-form .navbar-top input {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }

          form {
              max-width: 300px;
          }

          form input#search-input {
              width: 100%;
              min-width: none; max-width: none;
          }

        }
      </style>

        <form name="anime-search-form">
            <input type="text" id="search-input" autocomplete="off" spellcheck="false" placeholder="search" 
            maxlength="20" required>
            <input type="submit" id="search-submit" value="submit">
        </form>
        
        <nav class="navbar-top">
            <input type="button" class="nav-top" data-section="top-anime" value="top-anime">
            <input type="button" class="nav-top" data-section="top-manga" value="top-manga">
            <input type="button" class="nav-top" data-section="top-characters" value="top-characters">
        </nav>
    `
  }
}

customElements.define('search-form', SearchForm)
