
        const sideBar = document.getElementById('side_nav');
             const sideBtn = document.getElementById('sidebtn');

        sideBtn.addEventListener('click', opensidebar);

        function opensidebar(e){
            console.log('this is a click event listener');
            if (sideBar.style.display === 'none') { 
                sideBar.style.display = 'block'
            } else {
                sideBar.style.display = 'none'
            }
        }
