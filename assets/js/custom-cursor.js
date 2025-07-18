
$(function() {
    const cursorLeader = document.querySelector('.cursor-leader');

    document.addEventListener('mousemove', e => {
        cursorLeader.setAttribute("style", "top: "+(e.clientY - 10)+"px; left: "+(e.clientX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursorLeader.classList.add("expand");

        setTimeout(() => {
            cursorLeader.classList.remove("expand");
        }, 500)
    })

    const target = document.querySelector('.iphone-mockup-clone');

    target.addEventListener('mouseover', e  => {
        cursorLeader.classList.add("active");
    })

    target.addEventListener('mouseout', e  => {
        cursorLeader.classList.remove("active");
    })

    const secondTarget = document.querySelector('.iphone-mockup');

    secondTarget.addEventListener('mouseover', e  => {
        cursorLeader.classList.add("active");
    })

    secondTarget.addEventListener('mouseout', e  => {
        cursorLeader.classList.remove("active");
    })
})


$(function() {
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', e => {
        cursorFollower.setAttribute("style", "top: "+(e.clientY - 10)+"px; left: "+(e.clientX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursorFollower.classList.add("expand");

        setTimeout(() => {
            cursorFollower.classList.remove("expand");
        }, 500)
    })
})









