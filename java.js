document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.container-2');
    const gapInput = document.getElementById('gap');
    const flexItems = []; 
    let boxCount = 0; 

    document.getElementById('reset-flexbox').addEventListener('click', () => {
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'stretch';
        resetGrow();
        resetGap();
    });

    document.querySelectorAll('button[data-flex-direction]').forEach(button => {
        button.addEventListener('click', (e) => {
            flexContainer.style.flexDirection = e.target.getAttribute('data-flex-direction');
        });
    });

    document.querySelectorAll('button[data-justify-content]').forEach(button => {
        button.addEventListener('click', (e) => {
            flexContainer.style.justifyContent = e.target.getAttribute('data-justify-content');
        });
    });

    document.querySelectorAll('button[data-align-items]').forEach(button => {
        button.addEventListener('click', (e) => {
            flexContainer.style.alignItems = e.target.getAttribute('data-align-items');
        });
    });

    gapInput.addEventListener('input', (e) => {
        flexContainer.style.gap = `${e.target.value}px`;
    });

    document.getElementById('reset-grow').addEventListener('click', resetGrow);

    document.getElementById('grow-all').addEventListener('click', () => {
        flexItems.forEach(item => item.style.flexGrow = '1');
    });

    document.getElementById('add-box').addEventListener('click', addBox);

    document.getElementById('remove-box').addEventListener('click', removeBox);

    document.getElementById('reset-boxes').addEventListener('click', resetBoxes); // Added reset boxes functionality

    function resetGrow() {
        flexItems.forEach(item => item.style.flexGrow = '0');
    }

    function addBox() {
        boxCount++;
        const newBox = document.createElement('h1');
        newBox.classList.add('box');
        newBox.textContent = boxCount;
        flexItems.push(newBox);
        flexContainer.appendChild(newBox);
        newBox.style.backgroundColor = getRandomColor();
    }

    function removeBox() {
        if (flexItems.length > 0) {
            const removedBox = flexItems.pop();
            flexContainer.removeChild(removedBox);
            boxCount--;
        }

    }

    function resetBoxes() {
        flexItems.forEach(item => flexContainer.removeChild(item));
        flexItems.length = 0;
        boxCount = 0;
    }

    function resetGap() {
        gapInput.value = '0';
        flexContainer.style.gap = '0px';
    }
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
        function resetGrow() {
        document.getElementById('box1').value = 0;
        document.getElementById('box2').value = 0;
        document.getElementById('box3').value = 0;
        flexItems.forEach(item => item.style.flexGrow = '0');
    }
});
