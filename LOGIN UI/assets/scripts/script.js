const body = document.body;

const mainForm = document.getElementById("main-form");

const loginForm = document.getElementById("login");

const signupForm = document.getElementById("signup");

body.onmousemove = (e) => {

    const containerRect = body.getBoundingClientRect();

    const containerWidth = containerRect.width;

    const containerHeight = containerRect.height;

    var mouseX = e.clientX - containerRect.left;

    var mouseY = e.clientY - containerRect.top;

    var percentageX = ((containerWidth - mouseX) / containerWidth) * 100;

    var percentageY = ((containerHeight - mouseY) / containerHeight) * 100;

    mainForm.style.left = percentageX + "%";

    mainForm.style.top = percentageY + "%";

};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            loginForm.style.left = "35%";

            loginForm.style.opacity = "1";

            setTimeout(() => {

                loginForm.getElementsByClassName("inner")[0].style.left = "50%";

                loginForm.getElementsByClassName("inner")[0].style.opacity = "1";

                setTimeout(() => {

                    signupForm.style.left = "65%";

                    signupForm.style.opacity = "1";

                    setTimeout(() => {

                        signupForm.getElementsByClassName("inner")[0].style.left = "50%";

                        signupForm.getElementsByClassName("inner")[0].style.opacity = "1";

                    }, 100);

                }, 100);

            }, 200);

        } else {



        }
    });

}, options);

window.onload = () => {

    setTimeout(() => {

        observer.observe(mainForm);

    }, 500);

};