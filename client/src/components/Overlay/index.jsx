

const Overlay = () => {

    const closeCartAndMenuSidebar = () => {
        const cartSidebar = document.querySelector(".cart");
        const menuSidebar = document.querySelector(".menu-sidebar");
        const overlay = document.querySelector(".overlay");

        cartSidebar.classList.remove("open");
        menuSidebar.classList.remove("open");
        overlay.classList.remove("open");
    }

    return (
        <div className="overlay" onClick={closeCartAndMenuSidebar}></div>
    );
}

export default Overlay;