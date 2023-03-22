const {createApp} = Vue
createApp( {
    data(){
    return {
        eventos: [],
        filterEvents: [],
        categories: [],
        searchValue: '',
        checked: []
    }
    },
    created(){
        fetch("../assets/amazing.json")
        .then(res => res.json())
        .then(data => {
            this.eventos = data.events
            this.filterEvents = this.eventos
            this.categories =[ ...new Set(this.eventos.map(evento => evento.category))]
            })
        .catch(err => console.log(err))
    },
    methods: {
filtro(){
    this.filterEvents = this.eventos.filter( evento =>{
        return (this.checked.includes(evento.category)||this.checked-length === 0) && evento.name.toLowerCase().includes(this.searchValue.toLowerCase())
    }
        )
}
    },
    computed: {

    }
}) .mount("#app")