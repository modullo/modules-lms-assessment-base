Vue.component('sidebar-item', {
    template: 
    `
    <div class="accordion" role="tablist">
      <b-card v-for="(video, index) in videos.items" :key="index" no-body class="mb-1">
        <b-card-header header-tag="header" class="p-2 text-left" role="tab">
          <div block v-b-toggle="'accordion-1' +index" class="text-left shadow-non module-title">Module {{video.id}}: {{video.name}}
          <b-icon class="float-right m-2 mr-3" icon="chevron-down"></b-icon>
          </div>
          <span class="module-duration-text">0 / {{video.count}} | 27min</span>
        </b-card-header>
        <b-collapse :id="'accordion-1' +index" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <chapter :videos="video.videos" @change-video="check"></chapter>
          </b-card-body>
        </b-collapse>
      </b-card>

    </div>
    `,
    data() {
        return {
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
          text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor.'
        }
    },
    methods: {
      check(payload) {
        this.$emit('send-video-to-sidebar', payload)
      }
    }
})