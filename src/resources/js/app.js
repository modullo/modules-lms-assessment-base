var app = new Vue({
    el: '#app',
    data: {
      name: 'Musah Musah!',
      items: [
        {
            id: 1,
            name: "Getting Started",
            count: 3,
            duration: 27,
            videos: [
                {
                  //   id: 1,
                    title: "Introduction",
                    duration: '1 hr',
                    url: "https://www.youtube.com/embed/viHILXVY_eU"
                },
                {
                  //   id: 2,
                    title: "Diving Deeper",
                    duration: '5 min',
                    url: "https://www.youtube.com/embed/3BDIwBAL1iI"
                },
                {
                  title: "Quiz Section",
                },
            ]
        },
      ],
    },
    methods: {
      setVideo(payload) {
        // alert('videos' + payload)
        this.$refs.childRef.currentVideo = payload
        // this.$refs.childRef.currentVideo = payload
      },
    }
})