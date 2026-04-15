document.addEventListener("DOMContentLoaded", function () {

    // ICONS
    
    const recipeIconDesktop = document.getElementById("recipe-book-icon-desktop");
    const recipeIconTaskbar = document.getElementById("recipe-book-icon-taskbar");

    // WINDOW
    
    const recipeWindow = document.getElementById("grape-window");
    const closeBtn = document.getElementById("close-grape");

    // SOUND
    
    const clickSound = document.getElementById("click-sound");

    function playSound() {
        document.addEventListener("DOMContentLoaded", function ()) {
        clickSound.play();
    };

    // OPEN WINDOW (desktop icon)
    
    if (recipeIconDesktop) {
        recipeIconDesktop.addEventListener("click", function () {
            recipeWindow.style.display = "block";
            playSound();
        });
    }

    // OPEN WINDOW (taskbar icon)
    
    if (recipeIconTaskbar) {
        recipeIconTaskbar.addEventListener("click", function () {
            recipeWindow.style.display = "block";
            playSound();
        });
    }

    // CLOSE WINDOW
    
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            recipeWindow.style.display = "none";
            playSound();
        });
    }

});



document.addEventListener("DOMContentLoaded", function () {

    
    const recipeIconDesktop = document.getElementById("recipe-book-icon-desktop");
    const recipeIconTaskbar = document.getElementById("recipe-book-icon-taskbar");

    
    const recipeWindow = document.getElementById("grape-window");
    const closeBtn = document.getElementById("close-grape");

    
    const title = document.querySelector("#grape-window h3");
    const content = document.querySelector("#grape-window .window-content");

    
    const nextBtn = document.querySelector(".sound-btn:nth-of-type(2)");

    
    const clickSound = document.getElementById("click-sound");

    function playSound() {
        if (!clickSound) return;
        clickSound.currentTime = 0;
        clickSound.play();
    }

    const recipes = [
        {
            name: "Easy Grape Jam",
            html: `
                <h3>Easy Grape Jam</h3>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    <li>1.7 kg seedless grapes</li>
                    <li>1 kg sugar</li>
                    <li>3 tbsp lemon juice</li>
                </ul>

                <p><strong>Instructions:</strong></p>
                <ol>
                    <li>Combine grapes, sugar, and lemon juice.</li>
                    <li>Heat and stir until sugar dissolves.</li>
                    <li>Crush grapes and blend.</li>
                    <li>Boil for 25 minutes.</li>
                    <li>Test on cold plate and jar.</li>
                </ol>

                <button class="sound-btn">Save</button>
                <button class="sound-btn next-btn">Next</button>
            `
        },
        {
            name: "Strawberry Jam",
            html: `
                <h3>Strawberry Jam</h3>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    <li>2 cups strawberries (chopped)</li>
                    <li>1 cup sugar</li>
                    <li>1 tbsp lemon juice</li>
                </ul>

                <p><strong>Instructions:</strong></p>
                <ol>
                    <li>Place strawberries, sugar, and lemon juice in a pan.</li>
                    <li>Cook on medium heat, stirring often.</li>
                    <li>Crush strawberries as they soften.</li>
                    <li>Simmer until thick (15–20 minutes).</li>
                    <li>Cool and store in jars.</li>
                </ol>

                <button class="sound-btn">Save</button>
                <button class="sound-btn next-btn">Next</button>
            `
        }
    ];

    let currentRecipe = 0;

    function loadRecipe(index) {
        content.innerHTML = recipes[index].html;

        const buttons = content.querySelectorAll(".sound-btn");
        buttons.forEach(btn => {
            btn.addEventListener("click", playSound);
        });

        // NEXT BUTTON LOGIC
        const next = content.querySelector(".next-btn");
        if (next) {
            next.addEventListener("click", function () {
                currentRecipe = (currentRecipe + 1) % recipes.length;
                loadRecipe(currentRecipe);
            });
        }
    }

  
    function openWindow() {
        recipeWindow.style.display = "block";
        loadRecipe(currentRecipe);
        playSound();
    }

    if (recipeIconDesktop) {
        recipeIconDesktop.addEventListener("click", openWindow);
    }

    if (recipeIconTaskbar) {
        recipeIconTaskbar.addEventListener("click", openWindow);
    }

   
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            recipeWindow.style.display = "none";