Vue.component('lesson-tabs', {
    template: 
    `
    <div class="m-4 ml-5">
    <b-tabs content-class="mt-3">
        <div v-if="mobileDisplay">
        <b-tab title="Course Content" active>
            <sidebar-item></sidebar-item>
        </b-tab>
        </div>

        <b-tab title="Overview">
        <b-container>
         <b-row>
            <b-col lg="8" offset-lg="2">
                <h3 class="text-left">About This Course</h3>
                <div class="overview-text">
                Become a Fullstack Laravel Engineer by 
                developing a Dribbble Clone, Provisioning a server and Deploying with SSL
                </div>
                <hr>
                
            </b-col>
         </b-row>
        </b-container>
        </b-tab>
        <b-tab title="Notes">
        <b-container class="mb-5">
            <b-row>
                <b-col>
                <b-col lg="8" offset-lg="2">
                    <h3 class="text-left">Notes</h3>
                    <div class="mb-5">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </div>
                    <b-form method="post">
                    <div id="editor">
                        <p>Put down some note.</p>
                    </div>
                    <b-button v-if="selected" class="mt-3">Submit</b-button>
                    </b-form>
                </b-col> 
                </b-col>
            </b-row>
        </b-container>
        </b-tab>
    </b-tabs>
    </div>
    `,
    data() {
        return {
            view: 'display:none',
            selected: null,
            options: [
            { value: null, text: 'Select Module For Note' },
            { value: 'a', text: 'Module 1' },
            { value: 'b', text: 'Module 2' },
            { value: 'c', text: 'Module 3' },
            { value: 'd', text: 'Module 4' },
            { value: 'e', text: 'Module 5' },
            ],
            mobileDisplay: false,
        }
    },
    mounted() {
        this.resizeForMobile()
        window.addEventListener('resize', this.resizeForMobile)
    },
    methods: {
        resizeForMobile() {
            if (window.innerWidth < 991) {
                this.mobileDisplay = true
            } else {
                this.mobileDisplay = false
            }
        }
    }
})