document.addEventListener('alpine:init', () => {
  Alpine.store('state', {
      searchtext: '',

      items: [
        {name : "Paco", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1093988186939723846/hehehehha.png"},
        {name : "Jose", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1116443954670473357/B_Logo_with_BG2.png"},
        {name : "Maria", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1116443954670473357/B_Logo_with_BG2.png"},
        {name : "Juan", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1056880252380516392/385.png"},
        {name : "Luis", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1116443954670473357/B_Logo_with_BG2.png"},
        {name : "Pepe", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1116443954670473357/B_Logo_with_BG2.png"},
        {name : "Pablo", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1116443954670473357/B_Logo_with_BG2.png"},
        {name : "Pedro", img: "https://cdn.discordapp.com/attachments/1023950935355031602/1116443954670473357/B_Logo_with_BG2.png"}
      ],

      foundobjects: [],

      switch(text) {
        console.log(text)
          this.text = text
      },

      search() {
        var searchtext = this.searchtext.toLowerCase()
        if (this.searchtext.length > 0) {
          this.foundobjects = this.items.filter(item => item.name.toLowerCase().includes(searchtext))

          if (this.foundobjects.length == 0) {
            this.foundobjects = [{name: "No Friends Found", img: "https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"}]
          }
        } else {
          this.foundobjects = this.items
        }

      },

    init() {
        console.log('init')
        this.search()
    },
  })
})

