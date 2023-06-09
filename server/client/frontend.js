// Component loader
Vue.component('loader', {
    template: `
        <div style="display: flex; justify-content: center; align-items: center">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        `
})

// Init Vue
new Vue({
    el: '#app',

    data() {
        return {
            loading: false,
            form: {
                name: '',
                value: '',
            },
            contacts: [],
        }
    },

    computed: {
        canCreate() {
            return this.form.value.trim() && this.form.name.trim();
        }
    },

    methods: {
        async createContact() {
            const { ...contact } = this.form;

            const newContact = await request('/api/contacts', 'POST', contact);

            this.contacts.push(newContact);

            this.form.name = this.form.value = '';
        },

        async markContact(id) {
            const contact = this.contacts.find(c => c.id === id);

            const updated = await request(`/api/contacts/${id}`, "PUT", {
                ...contact,
                marked: true,
            })
            contact.marked = updated.marked;
        },

        async removeContact(id) {
            await request(`/api/contacts/${id}`, "DELETE");
            this.contacts = this.contacts.filter(c => c.id !== id);
        }
    },

    async mounted() {
        this.loading = true;
        this.contacts = await request('/api/contacts');
        this.loading = false;
    },
})
