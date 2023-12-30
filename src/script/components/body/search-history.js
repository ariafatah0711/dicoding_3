class searchHistory extends HTMLElement {
  set historys(historys) {
    this._historys = historys;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        search-history {
            padding: 5px 20px;
            position: relative;
            display: flex;
            flex-grow: 1;
            gap: 10px;
        }
        
        search-history button {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        search-history p {
            position: absolute;
            right: 0;
        }
      </style>
    `;

    if (Array.isArray(this._historys)) {
      this._historys.forEach((history) => {
        window[`submit${history}`] = function () {
          const searchInput = document.getElementById("search-input");
          searchInput.value = history;

          const form = document.forms["anime-search-form"];
          const submitEvent = new Event("submit", { cancelable: true });

          form.dispatchEvent(submitEvent);

          if (!submitEvent.defaultPrevented) {
            form.submit();
          }
        };

        const button = document.createElement("button");
        button.textContent = history;
        button.addEventListener("click", window[`submit${history}`]);

        this.appendChild(button);
      });
    }
  }
}

customElements.define(`search-history`, searchHistory);
