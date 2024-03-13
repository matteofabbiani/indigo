<!-- Particles -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
    // Function to initialize particles for a given element ID
    function initializeParticles(elementId) {
        particlesJS(elementId, {
            "particles": {
                "number": {
                    "value": 313,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 10,
                        "height": 10
                    }
                },
                "opacity": {
                    "value": 0.75,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2.2,
                        "opacity_min": 0.1038961038961039,
                        "sync": false
                    }
                },
                "size": {
                    "value": 1,
                    "random": false,
                    "anim": {
                        "enable": true,
                        "speed": 0.6,
                        "size_min": 0.7,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 0.7,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 2446.3576890600452,
                        "rotateY": 157.82952832645452
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize particles for each element
    ['particles-js', 'particles-js-3', 'particles-js-4', 'particles-js-5', 'particles-js-6', 'particles-js-7'].forEach(function(elementId) {
        initializeParticles(elementId);
    });
</script>
