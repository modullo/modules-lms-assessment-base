Vue.component('open-course', {
    template: 
    `
    <div>
        <div class="video-section pl-1" style="position:relative" v-if="this.currentVideo.title === 'Quiz Section'">
            <b-card class="text-center mt-5">
            <h3>Final Chapter: Quiz Section</h3>
            <b-card-body>This is The Quiz Section, You can start taking the questions now...</b-card-body>
            <b-icon class="ml-3 chevron-style" @click="toggleVideo(currentVideo.index)" title="Go to Previous Course" icon="chevron-left" style="top:30%;left:0; position:absolute">Previous</b-icon>
            <b-icon class="chevron-style chevron-next" @click="toggleVideo(currentVideo.index)" title="Go to Next Course" icon="chevron-right" style="top:40%;right:0;position:absolute">Next</b-icon>
                <b-button @click="$bvModal.show('modal-lg')"><b-icon icon="question-octagon-fill" aria-hidden="true"></b-icon> Open Quiz Section</b-button>
            </b-card>
        </div>
        <div v-else @change-video="selectedVideo" class="video-section pl-1" style="position:relative">
            <b-icon class="ml-3 chevron-style" @click="toggleVideo(currentVideo.index)" title="Go to Previous Course" icon="chevron-left" style="top:40%;left:0; position:absolute">Previous</b-icon>
            <b-icon class="chevron-style chevron-next" @click="toggleVideo(currentVideo.index)" title="Go to Next Course" icon="chevron-right" style="top:40%;right:0;position:absolute">Next</b-icon>
            <iframe class="w-100" height="558" :src="currentVideo.url" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <br>
        </div>
    </div>
        `,
            // <span class="ml-5">{{currentVideo.url}} / {{currentVideo.title}}</span>
    data() {
        return{
            videos: {
                items: [
                    {
                        id: 1,
                        name: "Getting Started",
                        count: 3,
                        duration: 27,
                        videos: [
                            {
                              index: 0,
                              title: "Introduction",
                              duration: '1 hr',
                              url: "https://www.youtube.com/embed/viHILXVY_eU"
                            },
                            {
                              index: 1,
                              title: "Diving Deeper",
                              duration: '5 min',
                              url: "https://www.youtube.com/embed/3BDIwBAL1iI"
                            },
                            {
                              index: 2,
                              title: "Quiz Section",
                            },
                        ]
                    },
      
                    {
                        id: 2,
                        name: "Theoratical Overview",
                        count: 3,
                        duration: 10,
                        videos: [
                            {
                              index: 0,
                              title: "New Course Clip",
                              duration: '4 hr',
                              url: "https://www.youtube.com/embed/nzV1NmhC7ik"
                            },
                            {
                              index: 1,
                              title: "Aknowledgement",
                              duration: '6 min',
                              url: "https://www.youtube.com/embed/4m-l-QpqxOo"
                            },
                            {
                              index: 2,
                              title: "Quiz Section",
                            },
                        ]
                    },
                    
                    {
                        id: 3,
                        name: "Implementation",
                        count: 4,
                        duration: 10,
                        videos: [
                            {
                              index: 0,
                              title: "Abstraction Logic",
                              duration: '30 sec',
                              url: "https://www.youtube.com/embed/viHILXVY_eU"
                            },
                            {
                              index: 1,
                              title: "Data Status",
                              duration: '17 min',
                              url: "https://www.youtube.com/embed/4m-l-QpqxOo"
                            },
                            {
                              index: 2,
                              title: "Logic Control",
                              duration: '18 min',
                              url: "https://www.youtube.com/embed/zPuVjhBGPFE"
                            },
                            {
                              index: 3,
                              title: "Quiz Section",
                            },
                        ]
                    },
                ],
            },
            count: '',
            currentVideo: '',
        }
    },
    methods: {
        selectedVideo() {
            alert('video Selected')
        },
        getAllVideo(single = null) {
            this.count = 0
            const pagination = this.videos.items.map((module) => {
                return module.videos.map((video) => {
                    video.index = this.count++;
                    return video;
                })
            }).flat();
            if (single === null) {
                this.currentVideo = pagination[0]
                return pagination
            }
            return pagination
        },
        toggleVideo(index) {
            const count = index + 1
            if ((count) === Object.keys(this.getAllVideo()).length) {
                // @de end
                alert('end')
            }else {
                index = index + 1
                this.currentVideo = this.getAllVideo(true).filter((video) => {
                    return video.index === index
                })[0]

            }
        },

    },
    created() {
        this.getAllVideo()
    }
    // width="1030" height="360" <video class="video-cover" src="../assets/video/video1.mp4" controls></video>
})