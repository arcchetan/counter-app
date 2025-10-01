(() => {
    const countDisplay = document.getElementById('countDisplay');
    const btnAdd = document.getElementById('btnAdd');
    const btnSubtract = document.getElementById('btnSubtract');
    const btnReset = document.getElementById('btnReset');

    // Counter state
    let count = 0;

    // Update the display counter value
    function updateDisplay() {
        countDisplay.textContent = count;
    }

    function increment() {
        count++;
        updateDisplay();
    }

    function decrement() {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    }

    function reset() {
        count = 0;
        updateDisplay();
    }

    // Button Event Listeners
    btnAdd.addEventListener('click', increment);
    btnSubtract.addEventListener('click', decrement);
    btnReset.addEventListener('click', reset);

    // Keyboard Controls
    document.addEventListener('keydown', (event) => {
        // Ignore keys if typing in input/textarea
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

        if (event.code === 'ArrowUp' || event.key === 'ArrowUp') {
            event.preventDefault();
            increment();
        } 
        else if (event.code === 'ArrowDown' || event.key === 'ArrowDown') {
            event.preventDefault();
            decrement();
        } 
        else if (event.code === 'Space' || event.key === ' ') {
            event.preventDefault();
            reset();
        }
    });

    // Initialize display on load
    updateDisplay();
})();
