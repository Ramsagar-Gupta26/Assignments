
    const textDiv = document.getElementById("text-container");

    // 1. Change color on button click
    document.getElementById("colorchange").addEventListener("click", () => {
        const color = document.getElementById("colorbox").value;
        textDiv.style.color = color;
    });

    // 2. Change font size on range slider input
    document.getElementById("fontsize").addEventListener("input", (e) => {
        textDiv.style.fontSize = e.target.value + "px";
    });

    // 3. Toggle Italic
    document.getElementById("italic").addEventListener("click", () => {
        textDiv.style.fontStyle = (textDiv.style.fontStyle === "italic") ? "normal" : "italic";
    });

    // 4. Toggle Underline
    document.getElementById("underline").addEventListener("click", () => {
        textDiv.style.textDecoration = (textDiv.style.textDecoration === "underline") ? "none" : "underline";
    });

    // 5. Toggle Bold
    document.getElementById("bold").addEventListener("click", () => {
        textDiv.style.fontWeight = (textDiv.style.fontWeight === "bold") ? "normal" : "bold";
    });

    // 6. Change Font Family on dropdown selection
    document.getElementById("list").addEventListener("change", (e) => {
        textDiv.style.fontFamily = e.target.value;
    });

    // 7. Get and display CSS style properties
    document.getElementById("getstyle").addEventListener("click", () => {
        const computedStyles = window.getComputedStyle(textDiv);

        const props = [
            `color: ${textDiv.style.color || computedStyles.color}`,
            `font-size: ${textDiv.style.fontSize || computedStyles.fontSize}`,
            `font-family: ${textDiv.style.fontFamily || computedStyles.fontFamily}`,
            `text-decoration: ${textDiv.style.textDecoration || computedStyles.textDecorationLine}`,
            `font-style: ${textDiv.style.fontStyle || computedStyles.fontStyle}`,
            `font-weight: ${textDiv.style.fontWeight || computedStyles.fontWeight}`
        ];

        // Show result as string with proper formatting
        document.getElementById("css-props").textContent = props.join("; ") + ";";
    });

