Vue.component('chapter', {
    props: {
        videos: {
          type: Array,
          required: true
        },
        currentPlayingVideo: {
            type: Object,
            required: true,
            default: {}
        },
    },
    template: 
    `
    <div class="chapter-wrapper">
        <div v-for="(video, index) in videos" :key="index" :class="{'chapter-select-video': true, selectedVideo: compute(video)}" @click="emitVideo(video)">
            <div v-if="video.title !== 'Quiz Section'">
                <b-form-checkbox
                >
                <span>{{++index}} . {{video.title}}</span>
                </b-form-checkbox>
                <b-icon class="pl-4" icon="play-circle-fill" aria-hidden="true"></b-icon> <span class="pl-3 small">{{video.duration}}</span>
                <hr>
            </div>
            <div v-if="video.title === 'Quiz Section'" :class="{'chapter-select-video': true, selectedVideo: compute(video)}">
                <b-form-checkbox
                id="checkbox-3"
                name="checkbox-3"
                value="accepted"
                unchecked-value="not_accepted"
                >
                <span>Quiz Section</span>
                </b-form-checkbox>
                <b-button @click="callModal()" size="sm" class="m-2 small"><b-icon icon="question-octagon-fill" aria-hidden="true"></b-icon> Open Questions</b-button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            status: '',
            datachange: false,
        }
    },
    computed: {
        
    },
    methods: {
        emitVideo(video) {
            // this.status = 'accepted'
            this.$emit('change-video', video)
        },
        callModal() {
            this.$bvModal.show('modal-lg')
        },
        compute(video) {
            // this.$root.$emit('bv::toggle::collapse', 'accordion-1'+this.currentPlayingVideo.module)
            if (this.currentPlayingVideo.title === video.title) {
                return true
            }else {
                return false
            }
        }
    },
})