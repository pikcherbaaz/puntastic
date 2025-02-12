function generatePun() {
    let word = document.getElementById("wordInput").value.trim().toLowerCase();
    let output = document.getElementById("punOutput");

    if (!word) {
        output.textContent = "Please enter a word!";
        return;
    }

    let puns = {
        "cat": ["You're purrfect!", "Stay pawsitive!"],
        "dog": ["You’re pawsome!", "What a fur-tunate day!"],
        "coffee": ["You’re brew-tiful!", "Espresso yourself!"],
        "egg": ["You’re eggstraordinary!", "Let’s hatch a plan!"],
        "bread": ["You’re on a roll!", "That’s the yeast I could do!"]
    };

    // If word is in predefined puns, use it
    if (puns[word]) {
        output.textContent = puns[word][Math.floor(Math.random() * puns[word].length)];
        return;
    }

    // Fallback: Generate a simple pun by adding a suffix
    let suffixes = ["tastic", "licious", "mazing", "riffic", "tacular"];
    let pun = word + suffixes[Math.floor(Math.random() * suffixes.length)];
    
    output.textContent = `You're absolutely ${pun}!`;
}