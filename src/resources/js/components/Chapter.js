Vue.component('chapter', {
    props: {
        videos: {
          type: Array,
          required: true
        }
    },
    template: 
    `
    <div class="chapter-wrapper">
        <div v-for="(video, index) in videos" :key="index" :class="{'chapter-select-video': true}" @click.prevent="emitVideo(video)">
            <div v-if="video.title !== 'Quiz Section'">
                <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                v-model="status"
                value="accepted"
                unchecked-value="not_accepted"
                >
                <span>{{++index}} . {{video.title}}</span>
                </b-form-checkbox>
                <b-icon class="pl-4" icon="play-circle-fill" aria-hidden="true"></b-icon> <span class="pl-3 small">{{video.duration}}</span>
                <hr>
            </div>
        </div>
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
    `,
    data() {
        return {
            status: 'not_accepted'
        }
    },
    methods: {
        emitVideo(video) {
            // this.status = 'accepted'
            this.$emit('change-video', video)
            // this.$emit('change-video', {'url': url})
        },
        callModal() {
            this.$bvModal.show('modal-lg')
        }
    }
})