document.addEventListener("DOMContentLoaded", function () {
    const rays = document.querySelectorAll('.ray');

    rays.forEach((ray, index) => {
        ray.style.transform = `rotate(${index * (360 / rays.length)}deg)`;
        ray.animate([
            { opacity: 0.5 },
            { opacity: 1 },
            { opacity: 0.5 }
        ], {
            duration: 2000,
            iterations: Infinity,
            delay: index * 100
        });
    });
});
