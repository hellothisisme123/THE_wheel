// woooooops
// oh noooo
// it appears this code was minified
// and theres nothing I can do about it??????
// goooowy
// damamamamammmmmn
const c=document.querySelectorAll(".wheel_item"),parent_unit=(e,t)=>{let i=e[0].parentElement.getBoundingClientRect();e.forEach(e=>e.style.setProperty("--child_height",`${i.height/2}px`))};window.addEventListener("resize",e=>{parent_unit(c,"--child_height")}),parent_unit(c,"--child_height");

const wheel_wrapper = document.querySelector('.wheel_wrapper')
let wheel_rotation = 0, // rotation of the wheel
    increment_speed = 1; // exponentially grows

wheel_wrapper.addEventListener('click', (e) => {
    if (e.target != wheel_wrapper) return //only run on center button click
    increment_speed = 1 // resets the speed that the wheel spin accelerates
    setTimeout(() => { // stops the wheen from spinning and sets the rotation to a random value
        // the random value is set while the wheel is spinning too fast for people to see
        wheel_rotation = random_min_max_int(0, 360)
        wheel_wrapper.style.rotate = `${wheel_rotation}deg`
        clearInterval(spin_interval)
    }, 3000);
    let spin_interval = setInterval(spin_wheel, 100); // rotates every 100ms for 3s
});


const spin_wheel = () => { // runs for 3s on click
    // increments the wheel rotation by an exponentially growing amount (increment_speed)
    wheel_rotation += increment_speed; 
    increment_speed += 10;
    wheel_wrapper.style.rotate = `${wheel_rotation}deg`
}