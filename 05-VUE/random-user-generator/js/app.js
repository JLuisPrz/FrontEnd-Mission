const app = Vue.createApp({
    data() {
        return {
          firstName: 'Lisset',
          lastName: 'Hilario',
          email: 'lishilario@gmail.com',
          gender: 'female',
          country: 'Mexico',
          phone: '222 656 8686',
          picture: 'https://randomuser.me/api/portraits/women/28.jpg'

        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            console.log(results);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.country = results[0].location.country
            this.phone = results[0].phone
            this.picture = results[0].picture.large
        }

    }

})

app.mount('#app');