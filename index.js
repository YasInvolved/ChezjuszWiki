darkMode = false
tailwind.config = {
    darkMode: 'selector',
}

function setThemeCookie(value) {
    document.cookie = `theme=${value};`
}

function getThemeCookie(value) {
    cookies = document.cookie.split(';');
}

function onDarkModeToggle() {
    darkMode = !darkMode;
    if (darkMode) document.body.classList.add("dark")
    else document.body.classList.remove("dark")
    setThemeCookie(darkMode)
}