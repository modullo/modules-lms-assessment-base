Vue.component('lesson-tabs', {
    template: 
    `
    <div class="m-4 ml-5">
    <b-tabs active-nav-item-class="font-weight-bold text-uppercase" content-class="mt-3">
        <div v-if="mobileDisplay">
        <b-tab title="Course Content" :title-link-class="linkClass()" active>
            <sidebar-item :currentPlayingVideo="listener" @send-video-to-sidebar="collectVideoFromSideBar"></sidebar-item>
        </b-tab>
        </div>

        <b-tab title="Overview" style="margin-bottom: 10em;" :title-link-class="linkClass()">
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
        <b-tab title="Notes" :title-link-class="linkClass()">
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
            listener: {},
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
    destroyed: function () {
        document.removeEventListener('resize', this.resizeForMobile);
    },
    mounted() {
        this.resizeForMobile()
        window.addEventListener('resize', this.resizeForMobile)
    },
    methods: {
        linkClass() {
            return 'fix-tab'
        },
        collectVideoFromSideBar(payload) {
            this.$emit('send-video-to-appwrapper', payload)
        },
        resizeForMobile() {
            if (window.innerWidth < 991) {
                this.mobileDisplay = true
            } else {
                this.mobileDisplay = false
            }
        }
    }
})